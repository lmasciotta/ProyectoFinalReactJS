import React from 'react';
import { useParams } from 'react-router-dom';
import Productos from '../Data/Productos';
import "./style.css";

export default function Details() {
  const { id } = useParams();
  const categoria = useParams().categoria;

  let productoEncontrado = null;

  if (categoria === 'telefonos' && Productos.telefonos) {
    productoEncontrado = Productos.telefonos.find((p) => p.id === parseInt(id, 10));
  } else if (categoria === 'notebooks' && Productos.notebooks) {
    productoEncontrado = Productos.notebooks.find((p) => p.id === parseInt(id, 10));
  } else if (categoria === 'tablets' && Productos.tablets) {
    productoEncontrado = Productos.tablets.find((p) => p.id === parseInt(id, 10));
  }

  if (!productoEncontrado) {
    return <div>Producto no encontrado</div>;
  }

  const { modelo, color, precio, detalle } = productoEncontrado;
  const imagenProducto = require(`../../assets/${modelo}.jpg`);

  return (
    <div className='details'>
      <h2>{modelo}</h2>
      <img src={imagenProducto} alt={modelo} />
      <p>Color: {color}</p>
      <p>Precio: {precio}</p>
      <p>{detalle}</p>
    </div>
  );
}
