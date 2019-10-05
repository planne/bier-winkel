import { types } from './../../actions/types';

const initialState = { productId: 0 };

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_PRODUCT_ID:
            return {
                productId: action.payload
            }
        default:
            return state;
    }
};
