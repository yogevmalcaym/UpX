import {combineReducers} from 'redux';
import * as types from './types';
import {createBasicReducer} from 'store/utils';

const reducer = combineReducers({
    initCompleted: createBasicReducer({type: types.SET_INIT_COMPLETED, def: false, reset: types.RESET}),
    items: createBasicReducer({type: types.SET_ITEMS, def: [], reset: types.RESET}),
});

export default reducer;

