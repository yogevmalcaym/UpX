import * as actions from './actions';
import * as helper from './helper';
import {getCartItems} from './selectors';

export const init = () => async (dispatch, getState) => {
    // await helper.fetchSomething();
    // await dispatch(actions.setInitCompleted({value: true}));
};

export const addToCart = cartModel => async (dispatch, getState) => {
    const currentCartItems = getCartItems({state: getState()});
    dispatch(actions.setCartItems({value: [...currentCartItems, cartModel]}));
};
