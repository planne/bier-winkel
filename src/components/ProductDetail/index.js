import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { displayOverlayDetail, addToCart } from '../../actions'

const initialState = {
    product: {},
    quantity: 0
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
        let item = this.state.product;
        item.quantity = this.state.product.quantity;
        item.total = item.quantity * item.price;
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

    getProductDetail() {
        const targetId = this.props.detail.productId;
        let product = this.props.products.filter(item =>
            item.id === targetId
        )[0];
        product = {
            ...product,
            quantity: 1,
            price: product.id + 100,
            imageUrl: product.image_url
        };
        return product;
    }

    componentDidMount() {
        this.setState({
            product: this.getProductDetail()
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
                    <button className="btn-close-overlay"
                        onClick={this.handleClickClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="detail-content-header">
                        <h2>{product.name}</h2>
                    </div>
                    <div className="price-quantity-wrap">
                        <label htmlFor="price">PRICE:&nbsp;</label>
                        <p className="text-price" id="price">{product.price}</p>
                        <label htmlFor="selectQuantity">QTY:&nbsp;</label>
                        <div className="quantity">
                            <select id="selectQuantity"
                                onChange={this.handleChangeQuantity}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="btn-add"
                        onClick={this.handleClickAdd}>
                        <h3>ADD TO CART</h3>
                    </div>
                    <div className="description">{product.description}</div>
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