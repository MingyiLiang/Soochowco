import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import * as models from './models';
import deepFreeze from '../../utils/deepFreeze';


export const initialState: models.AppModel = deepFreeze({
  modalSemaphore: 0,
  currentPath: `${window.location.pathname}${window.location.search}${window.location.hash}`,
});

const typedAppReducer = reducerWithInitialState(initialState)
  .case(actions.setBackPath, (state, payload) => ({
    ...state,
    backPath: payload,
  }))
  .case(actions.AppActions.changeModalCount, (state, payload) => ({
    ...state,
    modalSemaphore: Math.max(state.modalSemaphore + payload, 0),
  }));

export default typedAppReducer;
