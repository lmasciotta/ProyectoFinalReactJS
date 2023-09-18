import cart from '../../assets/cart.png'
import "./style.css"

const CartWidget = () => {
    return(
      <div>
        <img className='cart' src={cart} alt="cart"></img>
        0
      </div>
    )
}

export default CartWidget;