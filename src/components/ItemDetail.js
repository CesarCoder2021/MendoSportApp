import ItemCountDetail from "./ItemCountDetail";
import React from "react";
import "./css/itemDetail.css";

function ItemDetail(props) {

  return (
    <div>
      <div>
        <div className="contenedorDetail">
          <div>
            <img
              src={props.item.image} alt = " "
            />
            <h2>{props.item.name}</h2>
          </div>

          <div>
            <div>

              <div>
                <h3>Descripción</h3>
                <div>
                  <p>{props.item.description}</p>
                </div>
              </div>
            </div>

            <div>
              <h3>Precio</h3>
              <p>{props.item.cost}</p>
            
              <div>
                <div>
                    <ItemCountDetail 
                    item={props.item}
                    stock={props.item.stock} 
                    min={props.item.initial} 
                    />
                </div>

            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;
