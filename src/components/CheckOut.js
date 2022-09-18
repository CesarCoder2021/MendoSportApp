// import ItemCount from "./ItemCount";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "./CartContext";
import "../components/css/checkout.css";

export default function CheckOut() {

  const test = useContext(CartContext);
  let subtotal = test.subtotal;
  const [finCompra, setFinCompra] = useState(false)

  useEffect(() => {
    if(finCompra===true){
      test.clearCart();
    }
  }, [finCompra, test])

  function sendForm(event) {
    event.preventDefault()
    alert('¡Su pedido se ha enviado con éxito!');
    setFinCompra(true)
  }


  return (
    <>
      {!finCompra ?
        <div className="checkFondo">
          {/* Formulario de Contacto */}
          <div>
            <div>
              <div className="notaDePedido">
                <form action="#" method="POST">
                  <div>
                    <div>
                      <div className="notaDePedido__titulo">NOTA DE PEDIDO</div>

                      {/* Ingreso de Datos personales */}

                      <div className="notaDePedido__formData">
                        <div className="notaDePedido__formData-input">
                          <label className="notaDePedido__formData-etiqueta">
                            Nombre
                          </label>
                          <input
                            placeholder="Introduzca aquí su nombre"
                            required
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="notaDePedido__formData-dato"
                          />
                        </div>
                        <div className="notaDePedido__formData-input">
                          <label className="notaDePedido__formData-etiqueta">
                            Apellido
                          </label>
                          <input
                            placeholder="Introduzca aquí su apellido"
                            required
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="notaDePedido__formData-dato"
                          />
                        </div>
                        <div className="notaDePedido__formData-input">
                          <label className="notaDePedido__formData-etiqueta">
                            Email
                          </label>
                          <input
                            placeholder="xxx@xxx.xxx"
                            required
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="notaDePedido__formData-dato"
                          />
                        </div>
                        <div className="notaDePedido__formData-input">
                          <label className="notaDePedido__formData-etiqueta">
                            Teléfono
                          </label>
                          <input
                            placeholder="xxxxxxxx - solo números"
                            pattern="[0-9]"
                            required
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="street-address"
                            className="notaDePedido__formData-dato"
                          />
                        </div>
                      </div>

                      <div>
                          <label className="notaDePedido__detalle">
                            Detalle de productos incluídos en el pedido
                          </label>
                          <ul>
                            {test.cartList.map((item) => (
                              <li key={item.id}
                                >{item.quantity} x {item.name}.
                              </li>
                            ))}
                          </ul>
                      
                            <div>
                              <div className="totalCompra">
                                <p className="totalCompra__titulo">
                                Total de la compra
                                </p>
                                <p className="totalCompra__valor">$ {subtotal}</p>
                              </div>
                              <p className="totalCompra__envioNo">*** No incluye costos de envío. ***</p>
                            </div>

                            <div className="envio">
                              <p className="avisoEnvio">Este pedido será enviado a MENDOSPORT para ser preparado.</p>
                              <div>
                                <button
                                  className="botonEnviarPedido"
                                  onClick={sendForm}
                                  type="submit"
                                >
                                Enviar pedido
                                </button>
                              </div>
                            </div>
                      </div>
                    </div>
                            
                  </div>
                </form>
              </div>            
            </div>
          </div>

          {/* Carrito */}
          <div>
            <div>
              <div>
                <h2 className="pedidoModifico">Podés modificar aquí tu pedido</h2>
                <ul>
                  {test.cartList.map((item) => (
                    <li className="lineaProductoPedido" key={item.id}>
                      <div>
                        <img width={100}
                          src={item.image} alt= ""
                        />
                      </div>

                      <h3 className="lineaProductoPedido__nombre">
                        <a href={item.href}>{item.name}</a>
                      </h3>

                      <p>${item.cost}</p>
                          
                      <div>
                        <p>Cantidad {item.quantity}</p>
                        {/* <ItemCount item={item}></ItemCount> */}
                      </div>
                      
                      <div>
                        <button
                          className="botonQuitarPedido"
                          type="button"
                          onClick={() => {
                            test.removeItem(item.id)
                          }}
                        >
                          Quitar
                        </button>
                      </div>

                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        :
        <>
          <p className="avisoFinal">¡Su pedido se ha enviado con éxito!</p>
          <p className="avisoFinal__bajada">Nos pondremos en contacto con usted para coordinar la entrega y formas de pago. Muchas gracias!</p>
        </>
      }
    </>
  )
}