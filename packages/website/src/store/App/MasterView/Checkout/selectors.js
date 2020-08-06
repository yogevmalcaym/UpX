import {STORE_PATH} from './manifest';
import {getState} from 'store/utils';


export const getCartItems = args => getState({...args, STORE_PATH}).cartItems;
