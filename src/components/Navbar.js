import React from 'react';
import { Link } from 'react-router-dom';

import logoAtriv from '../assets/statics/administracion-tributaria-isologo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Navbar =  () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logoAtriv} alt="atriv"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
             Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deudas-y-pagos" className="nav-link">
             Deudas y Pagos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-link">
             Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deudas-y-pagos" className="nav-link">
             Contacto
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://google.com" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                icon={faFacebook}
                className="mr-1"
              />
              <span className="ml-1 d-sm-none">Facebook</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://google.com" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                icon={faInstagram}
                className="mr-1"
              />
              <span className="ml-1 d-sm-none">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;