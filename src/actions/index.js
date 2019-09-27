import { types } from './types';
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    await axios.get('https://api.punkapi.com/v2/beers?abv_gt=6')
    .then(res => {
        dispatch({
            type: types.GET_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err);
    })
};