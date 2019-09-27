import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

const initialState = {};

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
        this.fetch = this.fetch.bind(this);
    }

    fetch() {
        this.props.fetchProducts();
    }

    componentDidMount() {
        this.fetch();
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                {products.map((product, index) => {
                    const { name, description, image_url } = product;
                    const configCardItem = {
                        title: name,
                        desc: description,
                        imageUrl: image_url
                    };
                    return (<Card key={index} {...configCardItem} />)
                })}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { fetchProducts })(ProductList);