import { createContext, useEffect, useState } from "react";

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const itemsEnLS = localStorage.getItem("cartItems");
            return itemsEnLS ? JSON.parse(itemsEnLS) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    const itemInCart = (id) => {
        return cartItems.find(i => i.id === id)
    }

    const addItemCart = (item, cantidad) => {
        // id, title, color, stock, img, price, desc, category
        const inCart = itemInCart(item.id);

        if (inCart) {
            setCartItems(
                cartItems.map(p => {
                    if (p.id === item.id) {
                        // console.log({ ...inCart })
                        return { ...inCart, amount: inCart.amount + cantidad, stock: inCart.stock - cantidad };
                    } else {
                        return p;
                    }
                })
            )
        } else {
            setCartItems([...cartItems, { ...item, amount: cantidad }]);
        }
    }

    const removeItemCart = (item, cantidad) => {
        const inCart = itemInCart(item.id);

        // si el item tiene cantidad = 1, lo elimina por completo
        if (inCart.amount === cantidad) {
            setCartItems(cartItems.filter(p => p.id !== item.id))
        }
        // si no, resta la cantidad ingresada
        else {
            setCartItems(
                cartItems.map((p) => {
                    if (p.id === item.id) {
                        // console.log({ ...inCart })
                        return { ...inCart, amount: inCart.amount - cantidad, stock: inCart.stock + cantidad }
                    } else {
                        return p;
                    }
                })
            )
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            itemInCart,
            addItemCart,
            removeItemCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

const CartContext = createContext();
export default CartContext;