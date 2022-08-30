import React, {useState, useEffect} from "react";
import desafio from "../utils/promesa";
import productos from "../utils/productos.js";
import ItemList from "./ItemList";

function ItemListContainer(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    desafio(productos)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  })

  return (
    <div>
      <h1>{props.greetings}</h1>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;