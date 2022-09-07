import React from "react";
import ItemCount from "./ItemCount";
import "../components/css/item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (

    <div className="card">
      <div className="card_contenido">
        <div className="foto">
            <img src={process.env.PUBLIC_URL + props.image} alt=""/>
            <Link className="detalle" to={`/item/${props.id}`}>Ver detalle ... </Link>
        </div>
        <div>
          <div>
            <h3>{props.name}</h3>
          </div>
          <p>$ {props.cost}</p>
        </div>
      </div>
      <div>
        <ItemCount stock={props.stock} min={props.min}/>
      </div>
    </div>
  );
}

export default Item;