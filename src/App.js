import React from 'react';
import ItemListContainer from './components/ItemListContainer.js';
import NavBar from './components/NavBar.js';
import './components/style.css';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="MendoSports" />
    </>
  );
}
