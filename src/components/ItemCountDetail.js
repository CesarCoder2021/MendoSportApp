import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { CartContext } from "./CartContext";
import "./css/itemCountDetail.css";
import Item from "./Item";

function ItemCountDetail(item) {

  const [countDetail, setCountDetail] = useState(1);
  const [compra, setCompra] = useState(false)
  const test = useContext(CartContext);

  useEffect(() => {
    setCountDetail(item.min)
  }, [item.min])

  function disminuir() {
    if (countDetail !== item.min) {
      setCountDetail(countDetail - 1)
    } else {
      alert(`¡No puedes agregar menos de ${item.min} unidad!`);
    }
  }

  function aumentar() {
    if (countDetail !== item.stock) {
      setCountDetail(countDetail + 1)
    } else {
      alert(`¡No puedes agregar más de ${item.stock} unidades!`);
    }
  }

  function onAddDetail() {
    alert(`¡Se agregaron al carrito ${countDetail} unidades!`);
    setCompra(true);
    test.addItem (item, countDetail);
  }

  return (
    compra === false ?
      <div>
        <div className="contadorDetail">
          <button className="contadorDetail__boton" 
          onClick={disminuir}>-</button>
          {countDetail}
          <button className="contadorDetail__boton"
          onClick={aumentar}>+</button>
        </div>
        <button
          className="contadorDetail__botonCarrito"  
          type="submit"
          onClick={onAddDetail}
        >
          Agregar al carrito
        </button>
      </div>
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

export default ItemCountDetail;
