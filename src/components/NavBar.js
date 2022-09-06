import React from 'react';
import CartWidget from './CartWidget';
import './css/style.css';
import { Link } from "react-router-dom";

const NavBar = ({ background }) => {
  return (
    <header> 
      
      <div className="header-container">

      <Link to="/"><div className="logo-container"></div></Link>
          
        <nav>
          <ul className="nav-container">
          <Link className='linkNav' to="/category/:1">Balones</Link>
          <Link className='linkNav' to="/category/:2">Calzados</Link>
          <Link className='linkNav' to="/category/:3">Accesorios</Link>
          </ul>
        </nav>

        <CartWidget />

      </div>
    </header>
  );
};

export default NavBar;