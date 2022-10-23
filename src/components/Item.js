import React from "react";
import "../components/css/item.css";

function Item(props) {
  return (

    <div className="card">
      <div className="card_contenido">
        <div className="foto">
            <img src={process.env.PUBLIC_URL + props.image} alt=""/>
        </div>
        <div>
          <div>
            <h3>{props.name}</h3>
          </div>
          <p>Quedan solo {props.stock} unidades!</p>
          <p><strong>$ {props.cost}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Item;