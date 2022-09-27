import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([]);

    let cantidadInicial = 0;
    let cantidad = cartList.reduce (function (acumulador, prodValor){
        return acumulador + prodValor.quantity 
    }, cantidadInicial)

    let subtotalInicial = 0;
    let subtotal = cartList.reduce(function (acumulador, prodValor) {
        return acumulador + (Number(prodValor.cost)*prodValor.quantity)
    }, subtotalInicial)

    const addItem = (props, quantity) => {
        const itemForCart ={
            ...props, quantity
        }
        if (cartList.filter(elemento => elemento.id === props.id).length === 0) {
        setCartList([...cartList, itemForCart])
        } else {
            let temporal = 0;
            temporal = cartList.map((elemento) => {
            if (elemento.id !== props.id) {
                return elemento
            } else {
                return props
            }
            })
            setCartList (temporal)
            alert ("Ya compró este producto. No se sumará a su compra");
        }
    }

    const removeItem = (itemID) => {
        setCartList(cartList.filter(item => item.id !== itemID))
      }

    const clearCart = () => {
        setCartList([])
      }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clearCart, subtotal, cantidad}}>
            {children}
        </CartContext.Provider>
    );

} 

export default CartContextProvider;
