import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../../../Utils';
import Card from './index';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Card store={store} />).childAt(0).dive();
    return wrapper;
};

describe('Card Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                id: 1,
                title: 'Buzz',
                desc: 'Buzz description',
                price: 101,
                imageUrl: 'https://images.punkapi.com/v2/keg.png'
            };
            const propsError = checkProps(Card, expectedProps);
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
            const component = findByTestAtrr(wrapper, 'cardComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a price', () => {
            const price = findByTestAtrr(wrapper, 'componentPrice');
            expect(price.length).toBe(1);
        });

    });

});