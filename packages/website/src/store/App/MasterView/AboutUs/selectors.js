import {STORE_PATH} from './manifest';
import {getState} from 'store/utils';

export const initCompleted = args => getState({...args, STORE_PATH}).initCompleted;

export const getContext = args => getState({...args, STORE_PATH}).context;
