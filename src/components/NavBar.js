import React from 'react';
import CartWidget from './CartWidget';
import './css/style.css';

const NavBar = ({ background }) => {
  return (
    <header> 
      
      <div className="header-container">

        <div className="logo-container">
        </div>

        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Balones</a>
            </li>
            <li>
              <a href="/">Calzado</a>
            </li>
            <li>
              <a href="/">Accesorios</a>
            </li>
          </ul>
        </nav>

        <CartWidget />

      </div>
    </header>
  );
};

export default NavBar;