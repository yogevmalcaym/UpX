import * as actions from './actions';
import * as helper from './helper';

export const init = args => async (dispatch, getState) => {
    try {
        const itemDetails = await helper.fetchItemDetails(args);
        await dispatch(actions.setItemDetails({value: itemDetails}));
    } catch (error) {
        // TODO: handle error
        console.error(error)
    } finally {
        await dispatch(actions.setInitCompleted({value: true}));
    }

};

export const resetData = () => async (dispatch, getState) => {
    await dispatch(actions.reset);
}