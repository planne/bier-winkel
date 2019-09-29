import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const PurchaseButton = props => (
    <button><FontAwesomeIcon icon={faShoppingBasket} /></button>
);
export default PurchaseButton;