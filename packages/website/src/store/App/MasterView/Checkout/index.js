import {combineReducers} from 'redux';
import * as types from './types';
import {createBasicReducer} from 'store/utils';

const reducer = combineReducers({
    cartItems: createBasicReducer({type: types.SET_CART_ITEMS, def: []}),
});

export default reducer;

