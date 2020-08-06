import {fetchAppContext} from './helper';
import {setAppContext} from './actions';

export const init = () => async (dispatch, getState) => {
    try {
        const appContext = await fetchAppContext();
        await dispatch(setAppContext({value: appContext}));
    } catch (error) {
        // TODO: Handle error
        console.error(error);
    }
};
