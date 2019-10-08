import { types } from '../../actions/types';
import productsReducer from './reducer';

describe('Products Reducer', () => {

    it('Should return default state', () => {
        const newState = productsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const products = [{"id":177,"name":"Dog D","tagline":"Anniversary Imperial Stout."}];
        const newState = productsReducer(undefined, {
            type: types.GET_PRODUCTS,
            payload: products
        });
        expect(newState).toEqual(products);
    });

});