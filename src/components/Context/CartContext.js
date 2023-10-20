import { createContext, useEffect, useState } from "react";


export const CartContext = createContext ();

const carritoInicial = JSON.parse(localStorage.getItem("Carrito")) || [];


export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial)

    const cantidadEnCarrito = () => {
      return carrito.reduce ((acc, prod) => acc + prod.cantidad, 0);
    }
  
    const precioTotal = () => {
      return carrito.reduce ((acc,prod) => acc + prod.precio * prod.cantidad, 0);
    }
  
    const vaciarCarrito =() => {
      setCarrito([])
    }


  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])


    return (
    <CartContext.Provider value={{carrito, setCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
     {children}
    </CartContext.Provider>
    )
}