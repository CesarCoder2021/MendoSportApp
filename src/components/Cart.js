import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
// import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import "../components/css/cart.css";

const Cart = () => {

    const test = useContext(CartContext);
    console.log (test);
    const [open, setOpen] = useState(true);

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

          <ul className="carrito_linea">
            {test.cartList.length === 0 &&
              <p className="carritoVacio">El carrito está vacío.</p>}

            {test.cartList.map((item) => (
              <li className="itemCarrito" key={item.id}>
                <div>
                  <img
                    src={item.image}
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
                  {/* <ItemCount stock={item.stock} min={item.min}/> */}
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

          {test.cartList.length > 0 &&
                        <div className="limpiarSeguir">
                            <button
                              type="button"
                              className="botonLimpiar"
                              onClick={() => test.clearCart()}
                            >
                              Limpiar carrito
                            </button>

                            <Link to='/'>
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
