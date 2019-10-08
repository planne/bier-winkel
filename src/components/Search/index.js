import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { setParamSearchName, fetchProducts } from '../../actions';

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
        const query = 'beer_name=' + text;
        this.props.setParamSearchName(text);
        this.props.fetchProducts('?' + query);
    }

    render() {
        const { name } = this.state;
        return (
            <div className="search-wrap">
                <label htmlFor="searchInput">searchInput</label>
                <input type="text" id="searchInput" value={name}
                    autoComplete="none"
                    onChange={this.handleChangeInput} />
                <button className="btn-search"
                    aria-label="search"
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

export default connect(mapStateToProps, { setParamSearchName, fetchProducts })(Search);