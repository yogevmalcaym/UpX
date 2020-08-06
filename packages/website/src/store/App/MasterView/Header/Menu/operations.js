import * as actions from './actions';
import * as helper from './helper';

export {reset} from './actions';

export const init = () => async (dispatch, getState) => {
    try {
        const menuItems = await helper.fetchMenuItems();
        await dispatch(actions.setMenuItems({value: menuItems}));
    } catch (e) {
        console.error('Cannot get menu items', e)
    } finally {
        await dispatch(actions.setInitCompleted({value: true}));
    }
};
