import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
    render() {
        const { name, price, quantity, imageUrl } = this.props;

        return (
            <li className="cart-item">
                <div className="product">
                    <div className="product-image"><img src={imageUrl} alt={name} width="10rem" /></div>
                    <div className="product-content">
                        <h2 className="card-title">{name}</h2>
                        <p className="carde-text text-ellipsis">{price} x {quantity}</p>
                    </div>
                </div>
            </li>
        );
    }
}

CartItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default CartItem;