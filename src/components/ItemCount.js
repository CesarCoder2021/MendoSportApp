import {useState} from "react";
import "./css/itemCount.css"

function ItemCount(props) {
  const[count, setCount] = useState(props.min);

  function disminuir() {
    if(count !== props.min) {
      setCount(count-1)
    } 
  }

  function aumentar() {
    if(count !== props.stock) {
      setCount(count+1)
    } 
  }

  function onAdd() {
    alert(`¡Se agregaron al carrito ${count} unidades!`);
  }

  return (
    <>
        <div className="contador">
            <button className="contador__boton" onClick={disminuir}>-</button>
            <p>{count}</p>
            <button className="contador__boton" onClick={aumentar}>+</button>
        </div>
        <div>
            <button
                className="contador__botonCarrito"
                type="submit"
                onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>
    </>
);
}

export default ItemCount;
