import React, { useContext } from 'react';
import './css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
const cartContext = useContext(CartContext);
let cantidad = cartContext.cantidad;

  return (
    <div className="cart-widget">
      <Link to="/cart" className='cart-link'>
        <div className="cart">
            <FontAwesomeIcon icon={faCartPlus} />
        </div>
        {cantidad !== 0 &&
        <div className="qty-display">{cantidad}</div>}
      </Link>

    </div>
  );
};

export default CartWidget;
