import React from 'react';
import Productos from './ruta/del/archivo/Productos'; // Asegúrate de proporcionar la ruta correcta

function ProductList() {
  // Función para extraer el ID de los productos
  const extractProductIds = (category) => {
    const products = Productos[category]; // Obtén la lista de productos de la categoría

    if (products) {
      const productIds = products.map((product) => product.id); // Extrae los IDs
      return productIds;
    } else {
      return [];
    }
  };

  // Ejemplo de cómo obtener los IDs de productos de la categoría 'telefonos'
  const telefonosIds = extractProductIds('telefonos');

  // Ejemplo de cómo obtener los IDs de productos de la categoría 'notebooks'
  const notebooksIds = extractProductIds('notebooks');

  // Ejemplo de cómo obtener los IDs de productos de la categoría 'tablets'
  const tabletsIds = extractProductIds('tablets');

  return (
    <div>
      <h2>IDs de productos de la categoría 'telefonos':</h2>
      <ul>
        {telefonosIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>

      <h2>IDs de productos de la categoría 'notebooks':</h2>
      <ul>
        {notebooksIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>

      <h2>IDs de productos de la categoría 'tablets':</h2>
      <ul>
        {tabletsIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
