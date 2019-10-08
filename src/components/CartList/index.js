import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { resetCart, displayOverlayCart } from '../../actions'

const initialState = {};

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleClickCheckout = this.handleClickCheckout.bind(this);
    }

    handleClickClose() {
        this.props.displayOverlayCart(false);
    }

    handleClickCheckout() {
        alert('Order complete! Back to main.');
        this.props.resetCart();
        this.props.displayOverlayCart(false);
    }

    render() {
        const { cart } = this.props;
        return (
            <div className="overlay-content" data-test="cartListComponent">
                <button className="btn-close-overlay fixed-top-right"
                    onClick={this.handleClickClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className="overlay-content-header">
                    <h2>Cart</h2>
                </div>
                {cart.items.length === 0 ?
                    <div className="cart-empty">
                        <span className="icon-empty-box">
                            <FontAwesomeIcon icon={faBoxOpen} size="6x" />
                        </span>
                        <h3>Your cart is empty!</h3>
                        <div className="btn-keep-shopping"
                            onClick={this.handleClickClose}>
                            <h3>KEEP SHOPPING</h3>
                        </div>
                    </div>
                    :
                    <div className="added-items">
                        <ul className="cart-items" data-test="componentCartItems">
                            {cart.items.map((item, index) => {
                                const { id, name, quantity, image_url } = item;
                                const configCardItem = {
                                    id,
                                    name,
                                    quantity,
                                    price: id + 100,
                                    imageUrl: image_url
                                };
                                return (<CartItem key={id} {...configCardItem} />)
                            })}
                        </ul>
                        <div className="cart-subtotal" data-test="componentSubtotal">
                            <span className="subtotal-text">
                                Subtotal
                            </span>
                            <span className="subtotal-value">
                                {cart.subtotal}
                            </span>
                        </div>
                    </div>
                }
                {cart.items.length === 0 ?
                    null
                    :
                    <div className="btn-checkout"
                        onClick={this.handleClickCheckout}>
                        <h3>CHECK OUT</h3>
                    </div>
                }
            </div>
        );
    }
};

CartList.propTypes = {
    cart: PropTypes.shape({
        items: PropTypes.array.isRequired,
        subtotal: PropTypes.number.isRequired
    })
};

const mapStateToProps = state => {
    return {
        ...state,
        cart: state.cart
    }
};

export default connect(mapStateToProps, { resetCart, displayOverlayCart })(CartList);