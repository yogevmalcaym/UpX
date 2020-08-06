import * as actions from './actions';
import * as helper from './helper';

export const init = () => async (dispatch, getState) => {
    try {

    } catch (error) {
        // TODO: handle error
        console.error(error)
    } finally {
        await dispatch(actions.setInitCompleted({ value: true }));
    }

};