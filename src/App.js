import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer.js';
import NavBar from './components/NavBar.js';
import Carrousell from "./components/Carrousell.js";
import './components/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Carrousell />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
