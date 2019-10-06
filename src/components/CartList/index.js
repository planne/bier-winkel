import React from 'react';
import CartItem from '../CartItem';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { displayOverlayCart } from '../../actions'

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

    }

    render() {
        const { cart } = this.props;
        return (
            <div className="overlay-content">
                <button className="btn-close-overlay"
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
                        <ul className="cart-items">
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
                        <div className="cart-subtotal">
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

const mapStateToProps = state => {
    return {
        ...state,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { displayOverlayCart })(CartList);