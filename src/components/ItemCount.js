import React, { useState } from "react";
import "./styleItemCount.css";

function ItemCount ({stock = 0, initial = 1, onAdd}) {
    const [count, setCount] = useState (0);

    const aumentar = () => {
        if (count < stock) {
            setCount (count + 1)
        }
    }

    const disminuir = () => {
        if (count > initial) {
            setCount (count - 1)
        }
    }

    return (
        <span className="card">
            <div className="card__contador">
                <button className="card__contador__boton" onClick= { aumentar }>
                    +
                </button>
                <p className="card__contador__display"> { count } </p>
                <button className="card__contador__boton" onClick={ disminuir}>
                    -
                </button>
            </div>
            <button className="card__botonCarrito" onClick={ () => onAdd (count) }>
                Añadir al carrito
            </button>
        </span>
        
    );
};

export default ItemCount;
