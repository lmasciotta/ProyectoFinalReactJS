import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';
import Swal from 'sweetalert2'; 
import { CartContext } from '../Context/CartContext';
import CardsCount from '../CardsCount/CardsCount';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/config.js';

export default function Details() {
  const { id, categoria } = useParams();
  const navigate = useNavigate();
  const [productoEncontrado, setProductoEncontrado] = useState(null);
  const { carrito, setCarrito } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Productos", id);
        const resp = await getDoc(docRef);
        if (resp.exists()) {
          setProductoEncontrado({ ...resp.data(), id: resp.id });
        } else {
          setProductoEncontrado(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setProductoEncontrado(null);
      }
    };

    fetchData();
  }, [id, categoria]);

  const handleAddToCart = (cantidad) => {
    if (!productoEncontrado) {
      return;
    }
    const itemAgregado = { ...productoEncontrado, cantidad };
    const nuevoCarrito = [...carrito];

    const productoExistente = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);


    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500, 
    });
  };

  const handleCancel = () => {
    navigate(`/${categoria}`);
  };

  if (!productoEncontrado) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='details'>
      <h2>{productoEncontrado.modelo}</h2>
      <img src={productoEncontrado.imagen} alt={productoEncontrado.modelo} />
      <p>Color: {productoEncontrado.color}</p>
      <p>Precio: {productoEncontrado.precio}</p>
      <p>{productoEncontrado.detalle}</p>
      <CardsCount inicial={1} stock={10} onAdd={handleAddToCart} onCancel={handleCancel} />
    </div>
  );
}
