import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CartList from '../CartList';
import ProductDetail from '../ProductDetail';

const initialState = {}

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
    }

    render() {
        const { ui } = this.props;
        let contentComponent;

        if (ui.overlayCart) {
            contentComponent = <CartList data-test="componentCart" />;
        }

        if (ui.overlayDetail) {
            contentComponent = <ProductDetail data-test="componentProductDetail" />;
        }

        return (
            <div className="overlay"
                data-test="overlayComponent">
                {contentComponent}
            </div>
        );
    }
}

Overlay.propType = {
    ui: PropTypes.shape({
        overlayCart: PropTypes.bool.isRequired,
        overlayDetail: PropTypes.bool.isRequired,
        searchName: PropTypes.string.isRequired
    })
};


const mapStateToProps = state => {
    return {
        ui: state.ui
    }
};

export default connect(mapStateToProps)(Overlay);