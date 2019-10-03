import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { displayOverlayDetail, addToCart } from '../../actions'

const initialState = {
    product: {
        name: 'Punk IPA',
        quantity: 1,
        price: 100,
        imageUrl: 'https://images.punkapi.com/v2/2.png'
    }
}

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    }

    handleClickClose() {
        this.props.displayOverlayDetail(false);
    }

    handleClickAdd() {
        let item = this.props.products[0];
        item.quantity = this.state.product.quantity;
        this.props.addToCart(item);
    }

    handleChangeQuantity(e) {
        this.setState({
            product: {
                ...this.state.product,
                quantity: e.target.value
            }
        });
    }

    render() {
        const { product } = this.state;
        return (
            <div className="overlay-content overlay-detail">
                <div className="detail-image">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="detail-content">
                    <div className="detail-content-header">
                        <h2>{product.name}</h2>
                        <button className="btn-close-overlay"
                            onClick={this.handleClickClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <h3 className="text-price">{product.price} kr</h3>
                    <div className="quantity">
                        <p>QTY: </p>
                        <span>
                            <label htmlFor="selectQuantity">Quantity</label>
                            <select id="selectQuantity"
                                onChange={this.handleChangeQuantity}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </span>
                    </div>
                    <div className="btn-add"
                        onClick={this.handleClickAdd}>
                        <h3>ADD TO CART</h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        ui: state.ui
    }
}

export default connect(mapStateToProps, { displayOverlayDetail, addToCart })(ProductDetail);