import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

const initialState = {
    name: ''
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
    }

    handleChangeInput(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleClickSearch() {
        const text = this.state.name.replace(/\s/g, '_');
        this.props.fetchProducts('?beer_name=' + text);
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <input type="text" value={name} placeholder="Search beer name"
                    onChange={this.handleChangeInput} />
                <button
                    onClick={this.handleClickSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        );
    }
}

Search.propTypes = {
    name: PropTypes.string
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { fetchProducts })(Search);