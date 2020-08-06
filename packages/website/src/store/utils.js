import _ from 'lodash';

export const createBasicReducer = ({type, reset, def}) => (state, action) => {
    switch (action.type) {
        case type:
            return action.value;
        case reset:
            return def;
        default:
            return (state !== undefined) ? state : def;
    }
};

export const createBasicAction = type => ({value} = {value: null}) => ({
    type,
    value
});

export const getState = ({state, STORE_PATH}) => _.get(state, STORE_PATH, {});
