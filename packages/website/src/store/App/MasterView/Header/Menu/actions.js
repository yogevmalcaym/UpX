import * as types from './types';
import {createBasicAction} from 'store/utils';

export const setInitCompleted = createBasicAction(types.SET_INIT_COMPLETED);
export const setMenuItems = createBasicAction(types.SET_MENU_ITEMS);
export const reset = createBasicAction(types.RESET);
