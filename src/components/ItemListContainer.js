import {useState, useEffect} from "react";
import ItemList from "./ItemList.js";
import "./css/itemListContainer.css"
import { useParams } from "react-router-dom";
import { fireStoreFetch } from "../utils/firebaseConfig.js";

function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const { id } = useParams ();

  useEffect(() => {
    fireStoreFetch(id)
    .then (result => setProducts(result))
  }, [id]);

  return (
    <div>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
