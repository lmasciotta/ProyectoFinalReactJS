import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards.js';
import './style.css';
import Productos from '../Data/Productos.js';

const Tablets = ({ greeting }) => {
  const [productosTablets, setProductosTablets] = useState([]); // Cambia el nombre de la variable de estado
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Filtra los productos para obtener solo las tablets
        const tablets = Productos.tablets; // Accede a 'Productos.tablets'
        setProductosTablets(tablets); // Cambia el nombre de la variable de estado
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-alert">Cargando...</div>
        </div>
      ) : (
        <div className="Contenedor">
          {productosTablets.map((op) => (
            <Cards
              key={op.id}
              modelo={op.modelo}
              color={op.color}
              precio={op.precio}
              detalle={op.detalle}
              id={op.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tablets;
