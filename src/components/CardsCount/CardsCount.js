import "./style.css"
import React, { useState } from 'react';

const CardsCount = ({ stock, inicial, onAdd, onCancel }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incremento = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  const decremento = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="button" onClick={decremento}>-</button>
        <p className="Number">{cantidad}</p>
        <button className="button" onClick={incremento}>+</button>
      </div>
      <div className="ButtonContainer"> 
        <button className="button" onClick={() => onAdd(cantidad)} disabled={!stock}>
          Agregar al carrito
        </button>
        <button className="button cancel-button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default CardsCount;