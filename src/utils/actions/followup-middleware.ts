import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';

const FOLLOWUP = 'FOLLOWUP';

export function withFollowupAction<T>(action: Action<T>, followup: (dispatch: Dispatch) => void): Action<T> {
  if (!action.meta) {
    action.meta = {};
  }
  action.meta[FOLLOWUP] = followup;
  return action;
}

export function followupMiddleware() {
  return function(store) {
    return function(next) {
      return function(action) {
        let result = next(action);
        const followup = action.meta && action.meta[FOLLOWUP];
        if (followup) {
          followup(store.dispatch);
        }
        return result;
      };
    };
  };
}
