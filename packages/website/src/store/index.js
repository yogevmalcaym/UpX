import {
    applyMiddleware,
    combineReducers,
    createStore,
    compose
} from 'redux';

import app from './App';
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    app
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));