import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../../../Utils';
import CartItem from './index';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<CartItem store={store} />).childAt(0).dive();
    return wrapper;
};

describe('CartItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                id: 1,
                name: 'Buzz',
                price: 101,
                quantity: 2,
                imageUrl: 'https://images.punkapi.com/v2/keg.png'
            };
            const propsError = checkProps(CartItem, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const initialState = {}
            wrapper = setUp(initialState);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'cartItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render an image', () => {
            const image = findByTestAtrr(wrapper, 'componentImage');
            expect(image.length).toBe(1);
        });

        it('Should render a name', () => {
            const name = findByTestAtrr(wrapper, 'componentName');
            expect(name.length).toBe(1);
        });

        it('Should render a price', () => {
            const price = findByTestAtrr(wrapper, 'componentPrice');
            expect(price.length).toBe(1);
        });

    });

});