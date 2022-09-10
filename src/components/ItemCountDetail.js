import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./css/itemCountDetail.css";

function ItemCountDetail(props) {

  const [countDetail, setCountDetail] = useState(1);
  const [compra, setCompra] = useState(false)

  useEffect(() => {
    setCountDetail(props.min)
  }, [props.min])

  function disminuir() {
    if (countDetail !== props.min) {
      setCountDetail(countDetail - 1)
    } else {
      alert(`¡No puedes agregar menos de ${props.min} unidad!`);
    }
  }

  function aumentar() {
    if (countDetail !== props.stock) {
      setCountDetail(countDetail + 1)
    } else {
      alert(`¡No puedes agregar más de ${props.stock} unidades!`);
    }
  }

  function onAddDetail() {
    alert(`¡Se agregaron al carrito ${countDetail} unidades!`);
    setCompra(true);
  }

  return (
    compra == false ?
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
          Ir al carrito
        </button>
      </Link>
  );
}

export default ItemCountDetail;
