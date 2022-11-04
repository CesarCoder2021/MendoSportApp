import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer.js';
import NavBar from './components/NavBar.js';
import Ingreso from "./components/Ingreso.js";
import Footer from "./components/Footer.js";
import CartContextProvider from './components/CartContext.js';
import './components/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart.js';

const App = () => {
  return (
    <CartContextProvider>

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<><Ingreso /></>}></Route>
        <Route path="/list" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      <Footer />

    </ BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
