import React from 'react';
// import ItemListContainer from './components/ItemListContainer.js';
import NavBar from './components/NavBar.js';
import './components/css/style.css';
import ItemDetailContainer from "./components/ItemDetailContainer.js";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer title="MendoSports" /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
