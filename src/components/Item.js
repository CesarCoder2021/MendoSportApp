import React from "react";
import ItemCount from "./ItemCount";
import "../components/css/item.css"

function Item(props) {
  return (
    <div className="card">
      <div>
        <div className="foto">
            <img src={props.image} alt=""/>
          <img src={props.name} alt="" />
        </div>
        <div>
          <div>
            <h3>{props.name}</h3>
          </div>
          <p>{props.description}</p>
          <p>$ {props.cost}</p>
        </div>
      </div>
      <div>
        <ItemCount stock={props.stock} min={props.initial}/>
      </div>
    </div>
  );
}

export default Item;