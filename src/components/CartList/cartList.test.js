import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../../../Utils';
import CartList from './index';


const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<CartList store={store} />).childAt(0).dive();
    return wrapper;
};

describe('CartList Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                cart: {
                    items: [],
                    subtotal: 0
                }
            };
            const propsError = checkProps(CartList, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                cart: {
                    items: [
                        {
                            id: 1,
                            title: 'Buzz',
                            desc: 'Buzz description',
                            price: 101,
                            imageUrl: 'https://images.punkapi.com/v2/keg.png',
                            quantity: 2
                        },
                        {
                            id: 2,
                            title: 'Trashy blond',
                            desc: 'Trashy blond description',
                            price: 102,
                            imageUrl: 'https://images.punkapi.com/v2/keg.png',
                            quantity: 3
                        }
                    ],
                    subtotal: 508
                }
            }
            wrapper = setUp(initialState);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'cartListComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a subtotal', () => {
            const subtotal = findByTestAtrr(wrapper, 'componentSubtotal');
            expect(subtotal.length).toBe(1);
        });

    });

});