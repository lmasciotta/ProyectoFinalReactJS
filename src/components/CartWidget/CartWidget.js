import { useContext } from 'react';
import cart from '../../assets/cart.png'
import "./style.css"
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

    return(
      <div>
        <Link className="link" to="/carrito">
          <img className="cart" src={cart} alt="cart"></img>
        </Link>
        <span className="number">{ cantidadEnCarrito()}</span> 
      </div>
    )
}

export default CartWidget;