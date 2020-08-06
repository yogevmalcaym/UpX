import {combineReducers} from 'redux';
import {createBasicReducer} from 'store/utils';
import * as types from './types';

const reducer = combineReducers({
    initCompleted: createBasicReducer({type: types.SET_INIT_COMPLETED, def: false}),
});

export default reducer;
