import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        const { title, desc, imageUrl } = this.props;

        return (
            <div className="card">
                <img src={imageUrl} className="card-image" width="40"/>
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="carde-text">{desc}</p>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default Card;