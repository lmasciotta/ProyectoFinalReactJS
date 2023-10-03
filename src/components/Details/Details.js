import React from 'react';
import { useParams } from 'react-router-dom';
import Productos from '../Data/Productos';
export default function Details() {
  const { id } = useParams();

  let productoEncontrado = null;

  for (const categoria in Productos) {
    const productosCategoria = Productos[categoria];
    const producto = productosCategoria.find((p) => p.id === parseInt(id, 10));

    if (producto) {
      productoEncontrado = producto;
      break;
    }
  }

  if (!productoEncontrado) {
    return <div>Producto no encontrado</div>;
  }

  const { modelo, color, precio, detalle } = productoEncontrado;

  return (
    <div>
      <h2>{modelo}</h2>
      <p>Color: {color}</p>
      <p>Precio: {precio}</p>
      <p>Detalle: {detalle}</p>
    </div>
  );
}
