import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form'; 
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/config.js';
import './style.css';

const Checkout = () => {
    const [pedidoID, setPedidoId] = useState("");
    const [procesando, setProcesando] = useState(false); 
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm(); 

    const comprar = (data) => {
        setProcesando(true);

        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            setProcesando(false); 
        });
    }

    if (pedidoID) {
        return (
            <div className='container'>
                <h1>Operación realizada con éxito</h1>
                <p>Su número de pedido es: {pedidoID}</p>
                <h2>Muchas gracias por tu compra!</h2>
            </div>
        );
    }

    return (
        <div className="Card">
            <h1 className="main-title">Finalizar Compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="tel" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <button className="enviar" type="submit" disabled={procesando}>
                    {procesando ? "Procesando" : "Comprar"}
                </button>
            </form>
        </div>
    );
};

export default Checkout;
