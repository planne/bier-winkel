import React from 'react';
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
            contentComponent = <CartList />;
        }
        
        if (ui.overlayDetail) {
            contentComponent = <ProductDetail />;
        }

        return (
            <div className="overlay">
                {contentComponent}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

export default connect(mapStateToProps)(Overlay);