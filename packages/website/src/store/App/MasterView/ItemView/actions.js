import * as types from './types';
import {createBasicAction} from 'store/utils';

export const setInitCompleted = createBasicAction(types.SET_INIT_COMPLETED);
export const setItemDetails = createBasicAction(types.SET_ITEM_DETAILS);
export const reset = (createBasicAction(types.RESET));
