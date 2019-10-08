import { types } from '../../actions/types';
import detailReducer from './reducer';

describe('Detail Reducer', () => {

    it('Should return default state', () => {
        const newState = detailReducer(undefined, {});
        expect(newState).toEqual({ productId: 0 });
    });

    it('Should return new state if receiving type', () => {
        const product = { productId: 1 }
        const newState = detailReducer(undefined, {
            type: types.UPDATE_PRODUCT_ID,
            payload: 1
        });
        expect(newState).toEqual(product);
    });

});