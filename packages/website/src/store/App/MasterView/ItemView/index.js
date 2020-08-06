import {combineReducers} from 'redux';
import * as types from './types';
import {createBasicReducer} from 'store/utils';

const reducer = combineReducers({
    initCompleted: createBasicReducer({
        type: types.SET_INIT_COMPLETED,
        reset: types.RESET,
        def: false
    }),
    itemDetails: createBasicReducer({
        type: types.SET_ITEM_DETAILS,
        reset: types.RESET,
        def: null
    }),
});

export default reducer;
