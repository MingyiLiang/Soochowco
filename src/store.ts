import { History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import { loggingMiddleware, resetErrorOnRoutingMiddleware } from './utils/logging';
import { followupMiddleware } from './utils/actions/followup-middleware';
import createSagaMiddleware from 'redux-saga'
import _ from 'lodash';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history: History) {
    // Create the store with two middlewares
    //
    // IMPORTANT: loggingMiddleware should always be first, incase another middleware
    // interupts the chain.
    //
    // 1. loggingMiddleware: Logs all route changes to central logging
    // 2. resetErrorOnRoutingMiddleware: Allows ErrorLogginBoundaries that want to reset on routing event to work
    // 2. sagaMiddleware: Makes redux-sagas work
    // 3. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
        loggingMiddleware(),
        resetErrorOnRoutingMiddleware(),
        followupMiddleware(),
        sagaMiddleware,
        routerMiddleware(history),
      ];

    const enhancers = [applyMiddleware(...middlewares)];
    const composedEnhancers = compose(...enhancers) as any;

    const injectedReducers = {
        router: connectRouter(history),
    };

    const reducer = createReducer(injectedReducers);
    const unenhancedStore = createStore(reducer, initialState, composedEnhancers);
    
    const store = _.assign(unenhancedStore, {
        runSaga: sagaMiddleware.run,
        injectedReducers, // Reducer registry
        injectedSagas: {}, // Saga registry
    });
    
    return store;
}