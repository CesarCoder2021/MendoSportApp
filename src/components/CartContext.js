import { createContext, useState } from "react";
import ItemCountDetail from "./ItemCountDetail";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([]);

    const addItem = (props, quantity) => {
        const itemForCart ={
            ... props, ItemCountDetail
        }
        setCartList([... cartList, itemForCart])
    }

    const removeItem = (itemID) => {
        setCartList(cartList.filter(item => item.id !== itemID))
      }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );

} 

export default CartContextProvider;





