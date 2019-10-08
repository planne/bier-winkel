import { types } from './../../actions/types';

const initialState = { overlayCart: false, overlayDetail: false, searchName: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case types.DISPLAY_OVERLAY_CART:
            return {
                ...state,
                overlayCart: action.payload
            };
        case types.DISPLAY_OVERLAY_DETAIL:
            return {
                ...state,
                overlayDetail: action.payload
            };
        case types.SET_PARAM_SEARCH_NAME:
            return {
                ...state,
                searchName: action.payload
            }
        default:
            return state;
    }
};
