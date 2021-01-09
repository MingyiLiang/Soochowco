import React from 'react';
import { Action, AnyAction, ActionCreator, Meta } from 'typescript-fsa';
import 'whatwg-fetch';
import { find, keys, forEach } from 'lodash';
import { matchPath } from 'react-router';
import { LogLevel } from './logger';

const CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

export interface LoggerOptions {
  proxyEnabled?: boolean;
  tenantId?: string;
  facility?: string;
  version?: string;
  microservice?: string;
  release?: string;
  user?: string;
  sessionID?: string;
}

let loggerOptions: LoggerOptions = {
  proxyEnabled: false,
  tenantId: 'unknown',
  facility: 'ui',
  version: 'unknown',
  microservice: 'ui',
  release: 'unknown',
  user: 'unknown',
  sessionID: 'unknown',
};

export function setLoggerOptions(options: LoggerOptions) {
  loggerOptions = {
    ...loggerOptions,
    ...options,
  };
}

export interface LogRequest {
  action?: string;
  level: number;
  source: string;
  tenant: string;
  version: string;
  release: string;
  user?: string;
  session?: string;
  session_ms?: number;
  route?: string;
  params?: string;
  error?: string;
  stacktrace?: string;
  message?: string;
  shape_id?: string;
  shape_version?: string;
  job_id?: string;
  record_id?: string;
  correlation_id?: string;
  module?: string;
  ajax?: {
    method: string;
    url: string;
    status_code?: number;
    req_mime: string;
    res_mime?: string;
  };
}

export interface RouteActionPayload {
  hash: string;
  key: string;
  pathname: string;
  search: string;
}

// Start time is captured when this module is loaded.  This allows us to load
// the number of milliseconds into the session the action took place.
const startTime: number = new Date().getTime();

// The route map stores a mapping between the templates and the give routes.  This will
// be used by the routeLoggingMiddleware to determine the templates used for a given route.
const routeMap: Object = {};

// This interface allows the ErrorLoggingBoundary to determine when events occur
// that signal it should reset its error state.  Prior to this once the error state
// was triggered, it could never be undone.  I am not certain if this is the best
// solution, however I felt making it a connected component was overkill.  The reason
// it was overkill, is because we could have many scoped ErrorLoggingBoundary components,
// and they may or may not indicate that the entire application is in an error state.
export interface IResetErrorStateEventEmitter {
  onResetErrorState: (callback: Function) => void;
}

export interface ErrorLoggingBoundaryProps {
  children: any;
  errorComponent?: React.ComponentType<{ error: Error }>;
  resetStateEmitter?: IResetErrorStateEventEmitter;
}

export interface ErrorLoggingBoundaryState {
  hasError: boolean;
  error: Error;
}

export class ErrorLoggingBoundary extends React.Component<ErrorLoggingBoundaryProps, ErrorLoggingBoundaryState> {
  private mounted = false;

  constructor(props: ErrorLoggingBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };

    if (props.resetStateEmitter) {
      props.resetStateEmitter.onResetErrorState(() => this.resetErrorState());
    }
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  resetErrorState() {
    if (this.mounted) {
      this.setState({ hasError: false, error: null });
    }
  }

  componentDidCatch(error: Error) {
    logError(error);
    if (this.mounted) {
      this.setState({ hasError: true, error: error });
    }
  }

  render() {
    const { children, errorComponent } = this.props;

    if (this.state.hasError && errorComponent) {
      return React.createElement(errorComponent, this.state);
    }

    return children;
  }
}

// This class will work with the resetErrorOnRoutingMiddleware to trigger a
// reset of the error state.
export class RoutingResetErrorStateEmitter implements IResetErrorStateEventEmitter {
  // hold pointers to callbacks
  callbacks: Function[];

  constructor() {
    this.callbacks = [];
  }

  onResetErrorState(callback: Function) {
    this.callbacks.push(callback);
  }

  resetErrorState() {
    forEach(this.callbacks, (cb) => cb());
  }
}

export const resetErrorStateOnRouting = new RoutingResetErrorStateEmitter();

// Calls reset error state on routing events
export const resetErrorOnRoutingMiddleware = <T>() => (store) => (next) => (action) => {
  if (action?.type && action?.type === CALL_HISTORY_METHOD) {
    resetErrorStateOnRouting.resetErrorState();
  }

  next(action);
};

// Registers a route with the logging system
export function logRouteTemplate(template: string) {
  routeMap[template] = true;
}

export type Loggable = {
  type: string;
  meta: {
    log: boolean;
  };
};

function isAction<T>(action: any): action is Action<T> {
  return (action as Action<T>)?.type !== undefined;
}

// Marks an action as loggable by the logging middleware.
export const makeLoggableAction = <T>(actionCreator: ActionCreator<T>): ActionCreator<T> => {
  const realActionCreator: any = actionCreator;
  const r = Object.assign(
    (payload: T, meta?: Meta) => {
      const a = realActionCreator(payload);
      a.meta = { ...a.meta, log: true };
      return a;
    },
    {
      type: actionCreator.type,
      toString: () => actionCreator.type,
      match: (a: AnyAction): a is Action<T> => a.type === actionCreator.type,
    }
  );

  return r as any;
};

// Logs actions to Naveego's central logging system
export const loggingMiddleware = <T>() => (store) => (next) => (action) => {
  if (isAction(action)) {
    var a = action as Action<T>;
    if (a.meta && a.meta.log) {
      const logReq: LogRequest = Object.assign(
        {
          message: `Logging UI Action: ${action.type}`,
        },
        defaultLogRequest(action.type)
      );
      sendLog(logReq);
    }
  }

  if (action?.type && action?.type === CALL_HISTORY_METHOD) {
    let match;
    find(keys(routeMap), (t) => {
      match = matchPath(action.payload.args[0], {
        path: t,
        exact: true,
        strict: false,
      });
      return match;
    });

    if (match) {
      const logReq: LogRequest = Object.assign(defaultLogRequest(action?.type), {
        message: `UI Route Action: ${match.path}`,
        route: match.path,
        params: paramsToString(match.params),
      });
      sendLog(logReq);
    }
  }

  next(action);
};

// Create a log requst with default values
const defaultLogRequest = (action?: string): LogRequest => {
  const tenantID = loggerOptions.tenantId;
  return {
    action: action,
    source: 'ui',
    tenant: tenantID || '',
    version: loggerOptions.version || '',
    release: loggerOptions.release || '',
    user: loggerOptions.user,
    session: loggerOptions.sessionID,
    level: LogLevel.Info,
    // eslint-disable-next-line @typescript-eslint/camelcase
    session_ms: new Date().getTime() - startTime,
  };
};

export function sendLog(log: Partial<LogRequest>) {
  if (!loggerOptions.proxyEnabled) {
    return;
  }

  const l = Object.assign(defaultLogRequest(), log);
  fetch('/logging-proxy/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(l),
  }).catch((err) => {
    console.error('Could not log message to logging proxy', err);
  });
}

export function logError(error: Error | string) {
  console.error(error);
  if (!loggerOptions.proxyEnabled) {
    return;
  }

  let err: string;
  let stacktrace: string | undefined = undefined;

  if (typeof error === 'string') {
    err = error as string;
  } else {
    err = error.message;
    stacktrace = error.stack;
  }

  const logReq = Object.assign(defaultLogRequest('LOG_ERROR'), {
    message: `UI Error: ${err}`,
    error: err,
    stacktrace: stacktrace,
    level: LogLevel.Error,
  });
  sendLog(logReq);
}

function paramsToString(params: any): string {
  var str = '';
  forEach(keys(params), (key) => {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + encodeURIComponent(params[key]);
  });
  return str;
}
