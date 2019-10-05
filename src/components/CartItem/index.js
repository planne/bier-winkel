import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class CartItem extends React.Component {
    render() {
        const { name, price, quantity, imageUrl } = this.props;
        const quantityOptions = Array.from(Array(10), (e, i) => {
            return <option key={i + 1} value={i + 1}>{i + 1}</option>
        });

        return (
            <li className="cart-item">
                <span className="cart-item-image">
                    <img src={imageUrl} alt={name} />
                </span>
                <h2 className="cart-item-name">{name}</h2>
                <p className="cart-item-price text-ellipsis">{price}</p>
                <select className="cart-item-quantity" defaultValue={quantity}>
                    {quantityOptions}
                </select>
                <button className="btn-remove-from-cart">
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                </button>
            </li>
        );
    }
}

CartItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default CartItem;