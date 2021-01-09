// This file exists due to a circular reference issue between config.ts and log.ts
import { sendLog, logError } from './logging';

export enum LogLevel {
  Off = 0,
  Error = 3,
  Warning = 4,
  Info = 5,
  Debug = 6
}

export type LogLevelProvider = {
  level: () => LogLevel;
};

export default class Logger {
  private readonly _levelProvider: LogLevelProvider;

  constructor(logLevelProvider: LogLevelProvider) {
    this._levelProvider = logLevelProvider;
  }

  info(message: string, ...optionalParams: any) {
    if (this._levelProvider.level() >= LogLevel.Info) {
      sendLog({ message });
      console.log(message, optionalParams);
    }
  }

  debug(message: string, ...optionalParams: any) {
    if (this._levelProvider.level() >= LogLevel.Debug) {
      sendLog({ message, level: LogLevel.Debug });
      // tslint:disable-next-line:no-console
      console.debug(message, optionalParams);
    }
  }

  warn(message: string, ...optionalParams: any) {
    if (this._levelProvider.level() >= LogLevel.Warning) {
      sendLog({ message, level: LogLevel.Warning });
      console.warn(message, optionalParams);
    }
  }

  error(message: string, err: Error) {
    if (this._levelProvider.level() >= LogLevel.Error) {
      logError(err);
      console.error(message, err);
    }
  }
}
