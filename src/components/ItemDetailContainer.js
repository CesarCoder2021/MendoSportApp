import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";
import desafio from "../utils/promesa";


function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();

  useEffect(() => {
    desafio(productos[0])
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, []);

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div>
        <div></div>
        <p>Cargando</p>
      </div>
  );
};

export default ItemDetailContainer;
