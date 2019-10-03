import { types } from './types';
import axios from 'axios';

export const fetchProducts = (param) => async (dispatch) => {
    await axios.get('https://api.punkapi.com/v2/beers' + param)
        .then(res => {
            res.data.forEach(item => {
                item.price = item.id + 100;
            });
            dispatch({
                type: types.GET_PRODUCTS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
};

export const displayOverlayCart = (visible) => ({
    type: types.DISPLAY_OVERLAY_CART,
    payload: visible
});

export const displayOverlayDetail = (visible) => ({
    type: types.DISPLAY_OVERLAY_DETAIL,
    payload: visible
});

export const addToCart = (productItem) => ({
    type: types.ADD_TO_CART,
    payload: productItem
});

export const removeItem = (productItem) => ({
    type: types.REMOVE_ITEM,
    payload: productItem
});

export const subtractQuantity = (productItem) => ({
    type: types.SUB_QUANTITY,
    payload: productItem
});

export const addQuantity = (productItem) => ({
    type: types.ADD_QUANTITY,
    payload: productItem
});
