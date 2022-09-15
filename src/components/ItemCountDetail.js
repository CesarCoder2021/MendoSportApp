// import {useContext, useEffect, useState} from "react";
// import {Link} from "react-router-dom";
// import { CartContext } from "./CartContext";
// import "./css/itemCountDetail.css";
// // import Item from "./Item";

// function ItemCountDetail(props) {

//   const [countDetail, setCountDetail] = useState(props.min);
//   const [compra, setCompra] = useState(false)
//   const test = useContext(CartContext);

//   useEffect(() => {
//     setCountDetail(props.min)
//   }, [props.min])

//   function disminuir() {
//     if (countDetail !== props.min) {
//       setCountDetail(countDetail - 1)
//     } else {
//       alert(`¡No puedes agregar menos de ${props.min} unidad!`);
//     }
//   }

//   function aumentar() {
//     if (countDetail !== props.stock) {
//       setCountDetail(countDetail + 1)
//     } else {
//       alert(`¡No puedes agregar más de ${props.stock} unidades!`);
//     }
//   }

//   function onAdd() {
//     alert(`¡Se agregaron al carrito ${countDetail} unidades!`);
//     setCompra(true);
//     test.addItem (props.item, countDetail);
//   }

//   return (
//     compra === false ?
//       <div>
//         <div className="contadorDetail">
//           <button className="contadorDetail__boton" 
//           onClick={disminuir}>-</button>
//           {countDetail}
//           <button className="contadorDetail__boton"
//           onClick={aumentar}>+</button>
//         </div>
//         <button
//           className="contadorDetail__botonCarrito"  
//           type="submit"
//           onClick={onAdd}
//         >
//           Agregar al carrito
//         </button>
//       </div>
//       :
//       <Link to={'/cart'}>
//         <button
//           className="contador__botonCarrito-ver"
//           type="submit"
//         >
//           Ver en el carrito
//         </button>
//       </Link>
//   );
// }

// export default ItemCountDetail;

import {useContext, useEffect, useState} from "react";
import "./css/itemCount.css"
import {Link} from "react-router-dom";
import { CartContext } from "./CartContext";

function ItemCountDetail(props) {
  
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
      alert(`¡No puedes agregar menos de ${props.min} unidad!`);
    } 
  }

  function aumentar() {
    if(count !== props.stock) {
      setCount(count+1)
    } else {
      alert(`¡No puedes agregar más de ${props.stock} unidades!`);
    }
  }

  function onAdd() {
    alert(`¡Se agregaron al carrito ${count} unidades!`)
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

export default ItemCountDetail;