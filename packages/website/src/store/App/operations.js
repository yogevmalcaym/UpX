import * as actions from './actions';
import {init as appContextInit} from './AppContext/operations'

export const init = () => async (dispatch, getState) => {
    await dispatch(appContextInit());
    await dispatch(actions.setInitCompleted({value: true}));
};
