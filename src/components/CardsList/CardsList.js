import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards.js'
import data from '../Data/productos.json'
import "./style.css"

const CardsList = ({ greeting }) => {
const [productos, setProductos] = useState([])
const [isLoading, setIsLoading] = useState(true) 

useEffect(() => {

    const fetchData = async () => {
    try {
    
        await new Promise((resolve) => setTimeout(resolve, 3000))
        setProductos(data)
        setIsLoading(false)
    } catch (error) {
        console.error('Error al cargar datos', error)
    }
}

    fetchData()
}, [])

return (
    <div>
    <h1>{greeting}</h1>
    {isLoading ? (
        
        <div>Cargando...</div>
    ) : (
        <div className="Contenedor">
        {productos.map((op) => (
            <Cards
            key={op.id}
            modelo={op.modelo}
            color={op.color}
            precio={op.precio}
            detalle={op.detalle}
            />
        ))}
        </div>
    )}
    </div>
)
}

export default CardsList;

