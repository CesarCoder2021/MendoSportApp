import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([]);

    const addItem = (props, quantity) => {
        const itemForCart ={
            ...props, quantity
        }
        if (cartList.filter(elemento => elemento.id === props.id).length === 0) {
        setCartList([...cartList, itemForCart])
        } else {
            let temporal = cartList.map((elemento) => {
            if (elemento.id !== props.id) {
                return elemento
            } else {
                return props 
            }
            })
            setCartList (temporal)
            alert ("Ya compró este producto");
        }
    }

    const removeItem = (itemID) => {
        setCartList(cartList.filter(item => item.id !== itemID))
      }

    const clearCart = () => {
        setCartList([])
      }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );

} 

export default CartContextProvider;
