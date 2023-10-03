import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";


const NavBar = ({ children }) => {
  return (
    <nav className="Nav">
      <h2 className="titulo">Celc@m</h2>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li className="boton">
        <Link className="link" to="/smartphones">Celulares</Link>
          </li>
        <li className="boton"> 
        <Link className="link" to="/tablets">Tablets</Link>
        </li>
        <li className="boton">
        <Link className="link" to="/notebooks">Notebooks</Link>
          </li>
      </ul>
      <CartWidget />
      {children} 
    </nav>
  );
};

export default NavBar;
