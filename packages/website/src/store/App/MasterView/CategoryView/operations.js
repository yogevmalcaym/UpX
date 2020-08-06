import * as actions from './actions';
import * as helper from './helper';

export {reset} from './actions';

export const init = () => async (dispatch, getState) => {
    const items = await helper.fetchItems();

    await dispatch(actions.setItems({value: items}));
    await dispatch(actions.setInitCompleted({value: true}));
};
