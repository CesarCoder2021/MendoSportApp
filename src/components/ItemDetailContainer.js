import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";
import desafio from "../utils/promesa";
import { useParams } from "react-router-dom";
import "./css/itemDetailConteiner.css";


function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams ();

  useEffect(() => {
    desafio(productos.find (item => item.id === id))
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, [id]);

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div>
        <div></div>
        <p className="cargando">Cargando ... </p>
      </div>
  );
};

export default ItemDetailContainer;
