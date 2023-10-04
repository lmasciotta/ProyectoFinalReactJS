import React from 'react';
import "./style.css";
import CardsCount from '../CardsCount/CardsCount';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Cards({ modelo, color, precio, detalle, id, categoria }) {
  const imagenProducto = require(`../../assets/${modelo}.jpg`);

  const handleAddToCart = (cantidad) => {
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      text: `Has agregado ${cantidad} ${modelo}(s) al carrito.`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className='Card card'> 
      <img src={imagenProducto} className="imagen card-img-top" alt={modelo} /> 
      <div className="card-body">
        <h2 className="card-title">{modelo}</h2> 
        <p className="card-text">{color}</p> 
        <p className="card-text">{precio}</p>
        <Link to={`/${categoria}/Details/${id}`}>Ver Detalle</Link>
        <CardsCount inicial={1} stock={10} onAdd={handleAddToCart} />
      </div>
    </div>
  );
}

