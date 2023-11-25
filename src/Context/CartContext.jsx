import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)
export const CartContextProvider = ({children}) => {


    const [cartList, setCartList,] = useState([])

    const addToCart = (product) => {
        const productIndex = cartList.findIndex(prod => prod.id == product.id)
        if(productIndex == -1)
        {
            setCartList([
                    ...cartList,
                    product
                ])
        } else{
            cartList[productIndex].cant+=product.cant
            setCartList([...cartList])
        }
    }

    const clearCart = () => {
        setCartList([])
    }

    const removeFromCart = (productId) => {
    const updatedCart = cartList.filter((item) => item.id !== productId);
        setCartList(updatedCart);

        
    };

    const totalPrice = () => cartList.reduce((total, productObject) => total = total + (productObject.price * productObject.cant) , 0)
    
    const totalCant =  () => cartList.reduce((total,productObject) => total = total + (productObject.cant), 0)
    
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            totalPrice,
            removeFromCart,
            totalCant,
        }}>{children}</CartContext.Provider>
    )}
