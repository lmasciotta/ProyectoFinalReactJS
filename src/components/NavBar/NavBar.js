import React from "react";
import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = ({ children }) => {
  return (
    <nav className="Nav">
      <h2 className="titulo">Celc@m</h2>
      <Logo />
      <ul>
        <li className="boton">Celulares</li>
        <li className="boton">Tablets</li>
        <li className="boton">Notebooks</li>
      </ul>
      <CartWidget />
      {children} 
    </nav>
  );
};

export default NavBar;
