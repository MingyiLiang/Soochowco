import { ToastOptions } from 'react-toastify';
import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('ui/App');

export interface ComponentError {
  error?: Error;
  logMessage?: string;
  userMessage?: string;
}

export const componentError = actionCreator<ComponentError>('COMPONENT_ERROR', null, true);

/**
 *
 * @param {name:string, endpoint: { url: string, token: string}} namedEndpoint
 */
export const ready = actionCreator('READY', { sendToParent: true });

export interface ToastPayload {
  message: string;
  options: ToastOptions;
}
export const toast = actionCreator<ToastPayload>('TOAST');
export const setBackPath = actionCreator<string>('SET_BACK_PATH');

export interface NavigateOrRedirectPayload {
  ownRoute: any;
  parentRoute: any;
}
export const navigateOrRedirect = actionCreator<NavigateOrRedirectPayload>('NAVIGATE_OR_REDIRECT');

export const AppActions = {
  componentError,
  toast,
  // Increments or decrements the number of modals currently displayed.
  changeModalCount: actionCreator<number>('changeModalCount'),
};
