import React from 'react';

import './style.css';

const ItemListContainer = ({ title }) => {
  return (
    <section className="bodyShop">
      <div className="bodyShop-container">
        <article className="bodyShop-container__text-box">
          <h1>{title}</h1>
          <p>
            Es hora que el basquetbol esté en tu piel !!!
          </p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default ItemListContainer;
