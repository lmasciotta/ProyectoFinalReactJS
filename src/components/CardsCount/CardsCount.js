import "./style.css"
import { useState } from 'react'

const CardsCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)
    
    const incremento = () => {
        if (cantidad < stock){
        setCantidad (cantidad + 1)
        }
    }

    const decremento = ()=>{
        if (cantidad > 1){
        setCantidad (cantidad - 1)
        }
    }

return (
    <div className="Counter">
        <div className="Controls">
            <button className="button" onClick={decremento}>-</button>
            <p className="Number">{cantidad}</p>
            <button className="button" onClick={incremento}>+</button>
        </div>   
        <button className="button" onClick={()=>onAdd(cantidad)} disabled={(!stock)}>
            Agregar al carrito
        </button>
    </div>
)
}

export default CardsCount;