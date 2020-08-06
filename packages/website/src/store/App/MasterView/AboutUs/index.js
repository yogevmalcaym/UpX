import {combineReducers} from 'redux';
import * as types from './types';
import {createBasicReducer} from 'store/utils';

const reducer = combineReducers({
    initCompleted: createBasicReducer({type: types.SET_INIT_COMPLETED, def: false, reset: types.RESET}),
    context: createBasicReducer({type: types.SET_CONTEXT, def: null, reset: types.RESET}),
});

export default reducer;

