import React, { useContext } from 'react';
import './style.css';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { carrito, precioTotal, vaciarCarrito  } = useContext(CartContext);
    
    const handleVaciar = () =>{
        vaciarCarrito();
    }


    return (
        <div className='container'>
            <h1>Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                    <h2>{prod.modelo}</h2>
                    <p>Precio unidad: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    </div>
                ))
            }

            { 
            
            carrito.length > 0 ?
            <>
            <h2>Precio Total: ${precioTotal()} </h2>
            <button onClick={handleVaciar}>Vaciar Carrito</button>
            <Link to="/checkout" className="btn btn-primary">Finalizar compra</Link>
            </>:
            <h2>El carrito está vacío :(</h2>
            }
        </div>
    )
}

export default Cart;
