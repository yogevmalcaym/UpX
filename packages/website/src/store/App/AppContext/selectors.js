import {STORE_PATH} from './manifest';
import {getState} from 'store/utils';

export const getAppContext = args => getState({...args, STORE_PATH}).appContext;
