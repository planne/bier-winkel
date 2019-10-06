import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { removeItem } from '../../actions'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleClickRemove(productId) {
        this.props.removeItem({ id: productId });
    }

    render() {
        const { id, name, price, quantity, imageUrl } = this.props;
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
                <button className="btn-remove-from-cart"
                    onClick={() => this.handleClickRemove(id)}>
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

export default connect(null, { removeItem })(CartItem);