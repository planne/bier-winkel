import { types } from './../../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
