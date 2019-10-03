import { combineReducers } from 'redux';
import products from './products/reducer';
import cart from './cart/reducer';
import ui from './ui/reducer';

export default combineReducers({
    products,
    cart,
    ui
});