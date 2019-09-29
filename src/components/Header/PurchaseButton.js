import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const PurchaseButton = props => (
    <button className="btn-shopping-cart">
    <FontAwesomeIcon icon={faShoppingCart} /></button>
);
export default PurchaseButton;