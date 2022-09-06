import {useState, useEffect} from "react";
import desafio from "../utils/promesa.js";
import productos from "../utils/productos.js";
import ItemList from "./ItemList.js";
import "./css/itemListContainer.css"
import { useParams } from "react-router-dom";

function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const { id } = useParams ();

  useEffect(() => {
    if (id) {
      desafio(productos.filter (item => item.categoryId == id))
        .then(result => setProducts(result))
        .catch(err => console.log(err))      
    } else {
      desafio(productos)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }
  }, [id])

  return (
    <div>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
