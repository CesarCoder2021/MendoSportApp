import React from 'react';
import ItemCount from './ItemCount';
import './style.css';

const ItemListContainer = ({ title }) => {

  const onAdd = (qty) => {
      alert ("Usted seleccionó " + qty + " productos")
    }

  return (
    <section className="bodyShop">
      <div className="bodyShop-container">
        <article className="bodyShop-container__text-box">
          <h1>{title}</h1>
          <p>
            Es hora de que el basquetbol esté en tu piel !!!
          </p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </section>
  );
};

export default ItemListContainer;
