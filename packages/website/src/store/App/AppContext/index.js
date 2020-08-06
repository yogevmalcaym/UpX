import {combineReducers} from 'redux';
import * as types from './types';
import {createBasicReducer} from 'store/utils';

const reducer = combineReducers({
    appContext: createBasicReducer({type: types.SET_APP_CONTEXT, def: null})
});

export default reducer;

