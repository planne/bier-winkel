import React from 'react';
import { connect } from 'react-redux';

class SearchFilter extends React.Component {
    render() {
        const { resultCount } = this.props;
        return (
            <div className="filter-wrap">
                <span className="result-count">
                    <p>{resultCount} results</p>
                </span>
                <span>
                    <label htmlFor="select-abv">ABV</label>
                    <select id="select-abv">
                        <option value="all">All</option>
                        <option value="lt_5">~ 4.9</option>
                        <option value="lt_8">5.0 ~ 7.9</option>
                        <option value="lt_12">8.0 ~ 11.9</option>
                        <option value="lt_16">12.0 ~ 15.9</option>
                        <option value="ge_16">16.0 ~ </option>
                    </select>
                </span>
                <span>
                    <label htmlFor="select-ibu">IBU</label>
                    <select id="select-ibu">
                        <option value="all">All</option>
                        <option value="lt_10">~ 9</option>
                        <option value="lt_20">10 ~ 19</option>
                        <option value="lt_40">20 ~ 39</option>
                        <option value="lt_60">40 ~ 59</option>
                        <option value="ge_60">60 ~</option>
                    </select>
                </span>
                <span></span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        resultCount: state.products.length
    }
}

export default connect(mapStateToProps)(SearchFilter);