import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayOverlayDetail, updateProductId } from '../../actions'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickProduct = this.handleClickProduct.bind(this);
    }

    handleClickProduct(productId) {
        this.props.updateProductId(productId);
        this.props.displayOverlayDetail(true);
    }

    render() {
        const { id, title, price, imageUrl } = this.props;

        return (
            <li className="cards-item" data-test="cardComponent">
                <div className="card" onClick={() => this.handleClickProduct(id)}>
                    <div className="card-image"><img src={imageUrl} alt={title} width="40rem" /></div>
                    <div className="card-content">
                        <h2 className="card-title" data-test="componentTitle">{title}</h2>
                        <p className="carde-text text-ellipsis" data-test="componentPrice">{price}</p>
                    </div>
                </div>
            </li>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number
}


const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { displayOverlayDetail, updateProductId })(Card);