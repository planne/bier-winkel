import { combineReducers } from 'redux';
import products from './products/reducer';
import detail from './detail/reducer';
import cart from './cart/reducer';
import ui from './ui/reducer';

export default combineReducers({
    products,
    detail,
    cart,
    ui
});