import React from "react";
import ItemCount from "./ItemCount";
import "../components/css/item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (

    <div className="card">
      <div>
        <div className="foto">
            <img src={process.env.PUBLIC_URL + props.image} alt=""/>
            <Link to={`/item/${props.id}`}>Detalle ... </Link>
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