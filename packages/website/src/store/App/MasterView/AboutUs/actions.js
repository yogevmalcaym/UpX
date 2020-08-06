import * as types from './types';
import {createBasicAction} from 'store/utils';

export const setInitCompleted = createBasicAction(types.SET_INIT_COMPLETED);
export const setContext = createBasicAction(types.SET_CONTEXT);
export const reset = createBasicAction(types.RESET);
