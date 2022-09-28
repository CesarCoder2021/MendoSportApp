import {useContext, useEffect, useState} from "react";
import "./css/itemCount.css"
import {Link} from "react-router-dom";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

function ItemCount(props) {
  
  const[count, setCount] = useState(props.min);
  const[compra, setCompra] = useState(false);
  const test = useContext(CartContext);

  useEffect(() => {
    setCount(props.min)
  }, [props.min])

  function disminuir() {
    if(count !== props.min) {
      setCount(count-1)
    } else {

      Swal.fire({
        title: 'CUIDADO!',
        text: (`¡No puedes agregar menos de ${props.min} unidad!`) ,
        icon: "error",
        confirmButtonText: 'OK'
      })
      
    } 
  }

  function aumentar() {
    if(count !== props.stock) {
      setCount(count+1)
    } else {
      Swal.fire({
        title: 'CUIDADO!',
        text: (`¡No puedes agregar más de ${props.stock} unidades!`) ,
        icon: "error",
        confirmButtonText: 'OK'
      })
    }
  }

  function onAdd() {
    Swal.fire({
      title: 'Excelente!',
      text: (`¡Se agregaron al carrito ${count} unidades!`) ,
      icon: "success",
      confirmButtonText: 'OK'
    })
    setCompra(true);
    test.addItem (props.item, count);
  }

  return (
    compra === false ?
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
                onClick={onAdd}
                >Agregar al carrito
            </button>
        </div>
    </>
    :
    <Link to={'/cart'}>
        <button
          className="contador__botonCarrito-ver"
          type="submit"
        >
          Ver en el carrito
        </button>
      </Link>
);
}

export default ItemCount;
