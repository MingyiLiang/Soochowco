import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import { combineReducers, Store } from 'redux';
import checkStore from './checkStore';

export function setGlobalReducers(reducers: { [key: string]: any }) {
  globalReducers = reducers;
}

let globalReducers = {};

export type InjectableStore = Store & {
  injectedReducers: any;
  injectedSagas: any;
};

export function injectReducerFactory<T extends InjectableStore>(store: T, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) {
      checkStore(store);
    }

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function'
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) {
      return;
    }

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
    const newReducer = combineReducers({
      ...globalReducers,
      ...store.injectedReducers,
    });
    store.replaceReducer(newReducer);
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
