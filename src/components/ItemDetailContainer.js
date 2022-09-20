import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./css/itemDetailConteiner.css";
import { firestoreOneFetch } from "../utils/firebaseConfig.js";

function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams ();

  useEffect(() => {
    firestoreOneFetch(id)
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
