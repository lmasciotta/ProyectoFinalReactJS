import { useState } from "react"
import "./style.css"
import Cards from "../Cards/Cards"


export default function ListCards() {
    const[productos, setProductos] = useState([{
        modelo: "Samsung S23 Ultra",
        color: "Negro",
        precio: "490000$",
        detalle: "Nuevo sin detalles"
    },
    {
        modelo: "Iphone 14 Pro Max",
        color: "Negro",
        precio: "790000$",
        detalle: "Nuevo sin detalles"
    },
    {
        modelo: "Google Pixel 7 Pro",
        color: "Negro",
        precio: "590000$",
        detalle: "Nuevo sin detalles"
    }
]) 
    return (
        <div className='Contenedor'>
            {productos.map((op)=>{
                return <Cards key={op.id} modelo={op.modelo} color={op.color} precio={op.precio} detalle={op.detalle}/>
            }
            )}
        </div>
    )
}