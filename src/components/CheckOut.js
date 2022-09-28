import {useContext, useState} from "react";
import {CartContext} from "./CartContext";
import "../components/css/checkout.css";
import { serverTimestamp, increment, updateDoc, doc, setDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebaseConfig.js";
import Swal from "sweetalert2";

export default function CheckOut() {

  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  let subtotal = cartContext.subtotal;
  const [finCompra, setFinCompra] = useState(false)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const createOrder = (event) => {
    event.preventDefault()

    if (name && lastName && email && phone) {
      let itemsForDB = cartContext.cartList.map(item => ({
        id: item.id,
        title: item.name,
        price: item.cost,
        quantity: item.quantity
      }))
      let order = {
        buyer: {
          name: name,
          lastName: lastName,
          email: email,
          phone: phone
        },
        date: serverTimestamp(),
        items: itemsForDB,
        total: "$ " + cartContext.subtotal
      }

      const createOrderInFirebase = async () => {
        let newOrderRef = doc(collection(db, 'ordenesMS'))
        await setDoc(newOrderRef, order)
        return newOrderRef
      }

      createOrderInFirebase()
        .then(result => {

          Swal.fire({
            title: 'Compra finalizada!',
            text: 'Su orden fue creada con el siguiente código: \n \n' + result.id,
            icon: "success",
            confirmButtonText: 'OK'
          })

          cartContext.cartList.forEach(async (item) => {
            const itemRef = doc(db, "productosMS", item.id);
            await updateDoc(itemRef, {
              stock: increment(-item.quantity)
            });
          })
          cartContext.clearCart();
        })
        .catch(err => console.log(err))

      setTimeout(() => {
        navigate("/");
      }, "5000")
    } else {

      Swal.fire({
        title: 'Faltan datos',
        text: "Debe completar todos los datos del formulario.",
        icon: "error",
        confirmButtonText: 'OK'
      })
    }

  }

  return (
    <>
      {!finCompra ?
        <div className="checkFondo">

          <div>
            <div>
              <div className="notaDePedido">
                <form action="#" method="POST">
                  <div>
                    <div>
                      <div className="notaDePedido__titulo">NOTA DE PEDIDO</div>

                      <div className="notaDePedido__formData">
                        <div className="notaDePedido__formData-input">
                          <label className="notaDePedido__formData-etiqueta">
                            Nombre
                          </label>
                          <input
                            onChange={(event) => setName(event.target.value)}
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
                            onChange={(event) => setLastName(event.target.value)}
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
                            onChange={(event) => setEmail(event.target.value)}
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
                            onChange={(event) => setPhone(event.target.value)}
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
                            {cartContext.cartList.map((item) => (
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
                                  onClick={createOrder}
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

          <div>
            <div>
              <div>
                <h2 className="pedidoModifico">Podés modificar aquí tu pedido</h2>
                <ul>
                  {cartContext.cartList.map((item) => (
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
                      </div>
                      
                      <div>
                        <button
                          className="botonQuitarPedido"
                          type="button"
                          onClick={() => {
                            cartContext.removeItem(item.id)
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
          <p className="avisoFinal">¡Su orden se ha creado con éxito!</p>
          <p className="avisoFinal__bajada">Nos pondremos en contacto con usted para coordinar la entrega y formas de pago. Muchas gracias!</p>
        </>
      }
    </>
  )
}