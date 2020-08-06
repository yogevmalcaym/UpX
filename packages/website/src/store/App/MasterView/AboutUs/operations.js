import * as actions from './actions';
import * as helper from './helper';

export {reset} from './actions';

export const init = () => async (dispatch, getState) => {
    try {
        const context = await helper.fetchAboutUsContext();
        await dispatch(actions.setContext({value: context}));
    } finally {
        await dispatch(actions.setInitCompleted({value: true}));
    }
};
