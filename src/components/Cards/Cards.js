import React from 'react';
import "./style.css";
import CardsCount from '../CardsCount/CardsCount';

export default function Cards({ modelo, color, precio, detalle}) {
  const imagenProducto = process.env.PUBLIC_URL + `/assets/${modelo}.jpg`
  return (
    <div className='Card'>
      <img src={imagenProducto} alt={modelo} />
      <h2>{modelo}</h2>
      <p>{color}</p>
      <p>{precio}</p>
      <p>{detalle}</p>
      <CardsCount inicial={1} stock={10} onAdd={(cantidad)=> alert("producto agregado")}/>
    </div>
  );
}

