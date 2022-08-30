import React from 'react';
import ItemListContainer from './components/ItemListContainer.js';
import NavBar from './components/NavBar.js';
import './components/css/style.css';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer title="MendoSports" />
    </>
  );
}

export default App;
