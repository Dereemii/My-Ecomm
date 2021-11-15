import { createContext, useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log('cart', cart);

    // Agrega cierta cantidad de un item al carrito
    const addItem = (item, quantity) => {

        console.log('agregar al carrito')
    };
    //remueve un item del cart usando su id
    const removeItem = (id) => {

    };

    //Vuelve a estado vacío el array, remueve todos los items
    const clearCart = () => {
        setCart([]);
    };

    const updateItemsInCart = (item, num) => {
        console.log('paso')
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                updateItemsInCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}