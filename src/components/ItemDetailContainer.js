import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";
import desafio from "../utils/promesa";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams ();

  useEffect(() => {
    desafio(2000, productos.find (item => item.id == id))
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, [id]);

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div>
        <div></div>
        <p>Cargando</p>
      </div>
  );
};

export default ItemDetailContainer;
