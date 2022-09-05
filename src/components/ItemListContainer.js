import React, {useState, useEffect} from "react";
import desafio from "../utils/promesa";
import productos from "../utils/productos.js";
import ItemList from "./ItemList";
import "./css/itemListContainer.css"

function ItemListContainer(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    desafio(productos)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  })

  return (
    <div>
      <ItemList items={productos} />
    </div>
  );
}

export default ItemListContainer;
