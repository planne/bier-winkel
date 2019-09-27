import React from 'react';
import ProductList from './components/ProductList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <ProductList />
                </div>
            </div>
        )
    }
}

export default App;