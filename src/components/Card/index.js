import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        const { title, price, imageUrl } = this.props;

        return (
            <li className="cards-item">
                <div className="card">
                    <div className="card-image"><img src={imageUrl} alt={title} width="40rem" /></div>
                    <div className="card-content">
                        <h2 className="card-title">{title}</h2>
                        <p className="carde-text text-ellipsis">{price}</p>
                    </div>
                </div>
            </li>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default Card;