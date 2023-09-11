import React from "react";
import "./style.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className='Nav'>
            <h2 className="titulo">E-commerce</h2>
            <div>
                <button className="boton">Celulares</button>
                <button className="boton">Tablets</button>
                <button className="boton">Notebooks</button>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;   