import appReducer from './containers/App/reducer'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { setGlobalReducers } from './utils/reducerInjectors';

/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

export interface State {
  app?: any;
  [container: string]: any;
}

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to connected-react-router@4
 *
 */

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
function createReducer(injectedReducers?: any) {
  return combineReducers({
    ...globalReducers,
    ...injectedReducers,
  });
}

const globalReducers = {
  // route: routeReducer,
  app: appReducer,
  //agents: agentsReducer,
  form: formReducer,
};

setGlobalReducers(globalReducers);

export default createReducer;
