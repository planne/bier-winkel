import React from 'react';
import './App.css';
import { Header } from './components/Header';
import ProductList from './components/ProductList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <ProductList />
            </div>
        )
    }
}

export default App;