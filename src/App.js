import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {f07a} from "@fortawesome/free-solid-svg-icons"
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
