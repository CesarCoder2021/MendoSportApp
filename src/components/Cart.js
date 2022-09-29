import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../components/css/cart.css";

const Cart = () => {

    const test = useContext(CartContext);
    const [open, setOpen] = useState(true);
    let subtotal = test.subtotal;
    const navigate = useNavigate();

    useEffect(() => {
      if (open === false) {
        navigate ("/");
      }      
    }, [open]
    );

    return (
    <>
        <div className="carrito">
            <Link to='/'>
                <button
                    className="carrito__botonPanel"
                    type="button"
                    onClick={() => setOpen(false)}
                >Cerrar Panel</button>
            </Link>

        <div className="compraYTotal">
          <ul className="carrito_linea">
            {test.cartList.length === 0 &&
              <p className="carritoVacio">El carrito está vacío.</p>}

            {test.cartList.map((item) => (
              <li className="itemCarrito" key={item.id}>
                <div>
                  <img width={100}
                    src={item.image} alt= ""
                  />
                </div>
  
              <div className="itemCarrito__datos">
                <div className="nameDesc">
                    <h3>
                      <p>{item.name}</p>
                    </h3>
                    <p>{item.description}</p>
                </div>
                <p>${item.cost}</p>
                <div className="qtyQuitar">
                  <p className="cantidad">Cantidad {item.quantity}</p>
                  <div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="botonQuitar"
                      onClick={() => {
                        test.removeItem(item.id)
                      }}
                    >
                      Quitar Producto
                    </button>
                  </div>
                </div>
              </div>
            </li>
            
              ))}
          </ul>

          <div className="resumenCompra">
            <div>
              <p className="tituloResumen">Subtotal de la Compra</p>
              <p className="importe"> Importe acumulado: $ {subtotal}</p>
            </div>
            <p className="noIncluye">*** No incluye costos de envío. ***</p>
            <div className="delBoton">
              {test.cartList.length === 0 ?
              <Link to='/list'>
                <button className="botonFinal">
                Empezar la compra
                </button></Link>
              :
              <Link to='/checkout'>
                <button className="botonFinal">
                Finalizar compra
                </button>
              </Link>
              }
            </div>
          </div>

        </div>

            {test.cartList.length > 0 &&
            <div className="limpiarSeguir">
              <button
                type="button"
                className="botonLimpiar"
                  onClick={() => test.clearCart()}
              >
                Limpiar carrito
              </button>

              <Link to='/list'>
                <button
                  type="button"
                  className="botonSeguirCompra"
                  onClick={() => setOpen(false)}
                >
                  Continuar comprando
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </div>
            }
        </div>
        </>
    )
}

export default Cart;
