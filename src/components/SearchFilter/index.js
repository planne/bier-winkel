import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions'

const initialState = {
    abv: 'all',
    ibu: 'all'
};

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChangeAbv = this.handleChangeAbv.bind(this);
        this.handleChangeIbu = this.handleChangeIbu.bind(this);
    }

    handleChangeAbv(e) {
        this.setState({
            abv: e.target.value
        });
    }

    handleChangeIbu(e) {
        this.setState({
            ibu: e.target.value
        });
    }

    getNumberRange(prop, propName) {
        let params = [];
        let numbers = prop.split('_');
        let range = {
            gt: Number(numbers[0]) - 0.1,
            lt: Number(numbers[1])
        }
        if (-0.1 !== range.gt) {
            params.push(propName + '_gt=' + range.gt);
        }
        if (100 !== range.lt) {
            params.push(propName + '_lt=' + range.lt);
        }
        return params;
    }

    getParamQuery() {
        let params = [];
        let abv = this.state.abv;
        let ibu = this.state.ibu;
        let partialParam;

        if ('all' !== abv) {
            partialParam = this.getNumberRange(abv, 'abv');
            params.push.apply(params, partialParam);
        }

        if ('all' !== ibu) {
            partialParam = this.getNumberRange(ibu, 'ibu');
            params.push.apply(params, partialParam);
        }

        return '?' + params.join('&');
    }

    componentDidUpdate() {
        const param = this.getParamQuery();
        this.props.fetchProducts(param);
    }

    render() {
        const { resultCount } = this.props;
        return (
            <div className="filter-wrap">
                <span className="result-count">
                    <p>{resultCount} results</p>
                </span>
                <span>
                    <label htmlFor="select-abv">ABV</label>
                    <select id="select-abv" defaultValue="all"
                        onChange={this.handleChangeAbv}>
                        <option value="all">All</option>
                        <option value="0_5">~ 4.9</option>
                        <option value="5_8">5.0 ~ 7.9</option>
                        <option value="8_12">8.0 ~ 11.9</option>
                        <option value="12_16">12.0 ~ 15.9</option>
                        <option value="16_100">16.0 ~ </option>
                    </select>
                </span>
                <span>
                    <label htmlFor="select-ibu">IBU</label>
                    <select id="select-ibu" defaultValue="all"
                        onChange={this.handleChangeIbu}>
                        <option value="all">All</option>
                        <option value="0_10">~ 9</option>
                        <option value="10_20">10 ~ 19</option>
                        <option value="20_40">20 ~ 39</option>
                        <option value="40_60">40 ~ 59</option>
                        <option value="60_100">60 ~</option>
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

export default connect(mapStateToProps, { fetchProducts })(SearchFilter);