import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";

const Cart = () => {

    const test = useContext(CartContext);
    console.log (test);
    const [open, setOpen] = useState(true);
    return (
    <>
        <div>
            <Link to='/'>
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                >SEGUIR COMPRANDO</button>
            </Link>

        <ul>
            {test.cartList.map((item) => (
              <li key={item.id}>
                <div>
                  <img
                    src={item.image}
                  />
                </div>
  
              <div >
                <div>
                    <h3>
                      <p>{item.name}</p>
                    </h3>
                    <p>${item.cost}</p>
                </div>
                <div>
                  <p>Cantidad {item.count}</p>
                  <ItemCount stock={item.stock} min={item.min}/>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        test.removeItem(item.id)
                      }}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            </li>
              ))}
          </ul>
        </div>
    </>
    )   
}

export default Cart;
