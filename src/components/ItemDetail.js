// import React, {useState} from 'react'
import ItemCount from "./ItemCount";

function ItemDetail(props) {

  return (
    <div>
      <div>
        {/* Image */}
        <div>
          <div>
            <img
              src={props.item.image}
            />
          </div>

          {/* Description and Price */}
          <div>
            <div>
              <h1>{props.item.name}</h1>
            </div>
            <div>

              {/* Description and details */}
              <div>
                <h3>Description</h3>
                <div>
                  <p>{props.item.description}</p>
                </div>
              </div>
            </div>

            {/* Price and Add-to-Cart Button */}
            <div>
              <h2>Product information</h2>
              <p>{props.item.cost}</p>
              <div>
                <ItemCount stock={props.item.stock} min={props.item.min}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;
