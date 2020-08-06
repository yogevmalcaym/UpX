import {combineReducers} from 'redux';
import * as types from './types';
import {createBasicReducer} from 'store/utils';
import masterView from './MasterView';
import appContext from './AppContext';

const reducer = combineReducers({
    initCompleted: createBasicReducer({type: types.SET_INIT_COMPLETED, def: false}),
    masterView,
    appContext
});

export default reducer;

