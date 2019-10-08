import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import SearchFilter from './components/SearchFilter';
import Overlay from './components/Overlay';

class App extends React.Component {
    state = {
    }
    render() {
        const { ui } = this.props;
        return (
            <div className="container" data-test="appComponent">
                <Header />
                <SearchFilter />
                <ProductList />
                {ui.overlayCart || ui.overlayDetail ? <Overlay /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

export default connect(mapStateToProps)(App);