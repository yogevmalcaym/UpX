import * as types from './types';
import {createBasicAction} from 'store/utils';

export const setInitCompleted = createBasicAction(types.SET_INIT_COMPLETED);
export const setItems = createBasicAction(types.SET_ITEMS);
export const reset = createBasicAction(types.RESET);
