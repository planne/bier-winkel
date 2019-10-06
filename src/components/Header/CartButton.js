import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { displayOverlayCart } from '../../actions'

const initialState = {};

class CartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleClickCart = this.handleClickCart.bind(this);
    }

    handleClickCart() {
        this.props.displayOverlayCart(true);
    }

    render() {
        return (
            <button className="btn-shopping-cart"
                aria-label="cart"
                onClick={this.handleClickCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {
        resultCount: state.products.length
    }
}

export default connect(mapStateToProps, { displayOverlayCart })(CartButton);