import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

export default function Cards({ modelo, color, precio, detalle, id, categoria }) {
  const imagenProducto = require(`../../assets/${modelo}.jpg`);


  return (
    <div className='Card card'> 
      <img src={imagenProducto} className="imagen card-img-top" alt={modelo} /> 
      <div className="card-body">
        <h2 className="card-title">{modelo}</h2> 
        <p className="card-text">{color}</p> 
        <p className="card-text">{precio}</p>
        <Link to={`/${categoria}/Details/${id}`} className="btn btn-warning" >Ver Detalle</Link>
      </div>
    </div>
  );
}

