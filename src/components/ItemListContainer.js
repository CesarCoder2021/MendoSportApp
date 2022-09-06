import React, {useState, useEffect} from "react";
import desafio from "../utils/promesa";
import productos from "../utils/productos.js";
import ItemList from "./ItemList";
import "./css/itemListContainer.css"
import { useParams } from "react-router-dom";

function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const { id } = useParams ();

  useEffect(() => {
    if (id) {
      desafio(2000, productos.filter (items => items.categoryId === id))
        .then(result => setProducts(result))
        .catch(err => console.log(err))      
    } else {
      desafio(2000, productos)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }
  }, [id])

  return (
    <div>
      <ItemList items={productos} />
    </div>
  );
}

export default ItemListContainer;
