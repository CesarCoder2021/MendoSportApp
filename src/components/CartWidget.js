import React from 'react';
import './css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <div className="cart">
            <FontAwesomeIcon icon={faCartPlus} />
        </div>
        <div className="qty-display">4</div>
    </div>
  );
};

export default CartWidget;