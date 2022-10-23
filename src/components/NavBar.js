import React from 'react';
import './css/style.css';
import { Link } from "react-router-dom";

const NavBar = ({ background }) => {
  return (
    <header> 
      
      <div className="header-container">

      <Link to="/"><div className="logo-container"></div></Link>
          
        <nav>
          <ul className="nav-container">
          <Link className='linkNav' to="/list">Listado Completo</Link>
          <Link className='linkNav' to="/category/2">Materiales</Link>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default NavBar;