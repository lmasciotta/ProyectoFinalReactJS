import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const fecha = new Date();

const Footer = () => {
return (
    <footer className="bg-silver text-white py-2 trapezoid-footer">
    <div className="container-fluid text-center">
        <div className="row">
            <div className="col-md-12 mb-3">
            <h4>Lucas Masciotta | React JS Coderhouse | {fecha.getFullYear()}</h4>
            </div>
        </div>
            <div className="row justify-content-center">
                    <div className="col-md-3 mb-3">
                        <a href="#" className="text-black social-icon mr-4"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="text-black social-icon mr-4"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="text-black social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="text-black social-icon"><FontAwesomeIcon icon={faWhatsapp} /> </a>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;
