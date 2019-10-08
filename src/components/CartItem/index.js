import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { updateItemQuantity, removeItem } from '../../actions'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleChangeQuantity(e) {
        const productId = this.props.id;
        const quantity = e.target.value;
        this.props.updateItemQuantity(productId, quantity);
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
            <li className="cart-item" data-test="cartItemComponent">
                <span className="cart-item-image">
                    <img src={imageUrl} alt={name} data-test="componentImage" />
                </span>
                <h2 className="cart-item-name"
                    data-test="componentName">{name}</h2>
                <p className="cart-item-price text-ellipsis"
                    data-test="componentPrice">{price}</p>
                <select className="cart-item-quantity" defaultValue={quantity}
                    onChange={this.handleChangeQuantity}
                    data-test="componentQuantity" >
                    {quantityOptions}
                </select>
                <button className="btn-remove-from-cart"
                    onClick={() => this.handleClickRemove(id)}
                    data-test="componentButton">
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                </button>
            </li>
        );
    }
}

CartItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.string,
    imageUrl: PropTypes.string
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { updateItemQuantity, removeItem })(CartItem);