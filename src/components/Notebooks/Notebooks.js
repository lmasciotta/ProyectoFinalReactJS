import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards.js';
import './style.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/config.js';

const Notebooks = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const productosRef = collection(db, "Productos");

    getDocs(productosRef)
      .then((resp) => {
        const allProducts = resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        });

        const notebookProducts = allProducts.filter(product => product.categoria === "notebooks");

        setProductos(notebookProducts);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setIsLoading(false); 
      });

  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-alert custom-bg-coral">Cargando...</div>
        </div>
      ) : (
        <div className="Contenedor">
          {productos.map((op) => (
            <Cards
              key={op.id}
              modelo={op.modelo}
              color={op.color}
              precio={op.precio}
              detalle={op.detalle}
              id={op.id}
              categoria="notebooks" 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Notebooks;

