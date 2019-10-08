import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../../../Utils';
import Overlay from './index';


const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Overlay store={store} />).childAt(0).dive();
    return wrapper;
};

describe('Overlay Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                ui: {
                    displayOverlayDetail: false,
                    displayOverlayCart: false,
                    searchName: ''
                }
            };
            const propsError = checkProps(Overlay, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                ui: {
                    overlayDetail: true,
                    overlayCart: false,
                    searchName: ''
                }
            }
            wrapper = setUp(initialState);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'overlayComponent');
            expect(component.length).toBe(1);
        });
    });

    describe('CartList component renders', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                ui: {
                    overlayDetail: false,
                    overlayCart: true,
                    searchName: ''
                }
            }
            wrapper = setUp(initialState);
        });

        it('Should render a cart overlay', () => {
            const cart = findByTestAtrr(wrapper, 'componentCart');
            const detail = findByTestAtrr(wrapper, 'componentProductDetail');
            expect(cart.length).toBe(1);
            expect(detail.length).toBe(0);
        });
    });

    describe('ProductDetail component renders', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                ui: {
                    overlayDetail: true,
                    overlayCart: false,
                    searchName: ''
                }
            }
            wrapper = setUp(initialState);
        });

        it('Should render a detail overlay', () => {
            const cart = findByTestAtrr(wrapper, 'componentCart');
            const detail = findByTestAtrr(wrapper, 'componentProductDetail');
            expect(cart.length).toBe(0);
            expect(detail.length).toBe(1);
        });
    });

});