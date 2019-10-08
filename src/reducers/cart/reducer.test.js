import { types } from '../../actions/types';
import cartReducer from './reducer';

describe('Cart Reducer', () => {

    const product = { "id": 177, "name": "Dog D", "tagline": "Anniversary Imperial Stout.", "price": 277, "quantity": 2 };

    it('Should return default state', () => {
        const newState = cartReducer(undefined, { items: [], subtotal: 0 });
        expect(newState).toEqual({ items: [], subtotal: 0 });
    });

    it('Should return new state if receiving type', () => {
        const cart = { items: [], subtotal: 0 };
        const newState = cartReducer(undefined, {
            type: types.UPDATE_PRODUCT_ID,
            payload: cart
        });
        expect(newState).toEqual(cart);
    });

    it('Should push object to items array when an item is added', () => {
        const newState = cartReducer(undefined, {
            type: types.ADD_TO_CART,
            payload: product
        });
        expect(newState.items.length).toEqual(1);
    });

    it('Should calculate and update subtotal when an item is added', () => {
        const cart = {
            items: [ product ],
            subtotal: product.price * product.quantity
        };
        const newState = cartReducer(undefined, {
            type: types.ADD_TO_CART,
            payload: product
        });
        expect(newState.subtotal).toEqual(cart.subtotal);
    });

});