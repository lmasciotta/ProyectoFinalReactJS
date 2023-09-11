import React from 'react';
import "./style.css";

export default function Cards({ modelo, color, precio, detalle}) {
  return (
    <div className='Card'>
      <h2>{modelo}</h2>
      <p>{color}</p>
      <p>{precio}</p>
      <p>{detalle}</p>
      <button>
        Agregar al carrito
      </button>
    </div>
  );
}
