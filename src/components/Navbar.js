import React from "react";

import logoAtriv from "../assets/statics/administracion-tributaria-isologo.svg";

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={logoAtriv} alt="atriv" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`${process.env.PUBLIC_URL}/deudas-y-pagos`}
              className="nav-link"
            >
              Deudas y Pagos
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`${process.env.PUBLIC_URL}/servicios`}
              className="nav-link"
            >
              Más Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href={`${process.env.PUBLIC_URL}/contacto`} className="nav-link">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://google.com"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
              <span className="ml-1 d-sm-none">Facebook</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://google.com"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
              <span className="ml-1 d-sm-none">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
