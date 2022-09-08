import React from "react";
import Item from "./Item";
import "../components/css/itemList.css"

function ItemList(props) {

  const items = props.items;

  return(
    <div>
      <div className="cabecera">
        <div className="container">
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              cost={item.cost}
              min={item.initial}
              stock={item.stock}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
