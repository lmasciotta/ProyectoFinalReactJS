import cart from './assets/cart.png'

const CartWidget = () => {
    return(
      <div>
        <img src={cart} alt="cart"></img>
        <hr></hr>
        0
      </div>
    )
}

export default CartWidget;