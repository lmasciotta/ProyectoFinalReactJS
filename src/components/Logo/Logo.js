import logo from '../../assets/logo.gif'
import "./style.css"

const Logo = () => {
    return(
      <div>
        <img src={logo} alt="logo" className='logo'></img>
      </div>
    )
}

export default Logo;