import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";

function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();

  useEffect(() => {
    ItemDetail(productos[2])
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
