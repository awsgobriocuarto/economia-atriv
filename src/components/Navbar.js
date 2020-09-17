import React from "react";

import logoAtriv from "../assets/statics/administracion-tributaria-isologo.svg";
import pagos from "../data/pagos.json";
import servicios from "../data/servicios.json";
import consultas from "../data/consultas.json";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
              Portada
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Deudas y Pagos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {pagos.data.map((pago, index) => {
                return (
                  <React.Fragment key={index}>
                    {pago.external ? (
                      <a
                        className="dropdown-item"
                        href={pago.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pago.title}
                      </a>
                    ) : (
                      <a
                        className="dropdown-item"
                        href={`${process.env.PUBLIC_URL}/${pago.url}`}
                      >
                        {pago.title}
                      </a>
                    )}
                  </React.Fragment>
                );
              })}
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href={`${process.env.PUBLIC_URL}/deudas-y-pagos`}
                alt=""
              >
                Ver todo
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Servicios
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {servicios.data.map((servicio, index) => {
                return (
                  <React.Fragment key={index}>
                    {servicio.external ? (
                      <a
                        className="dropdown-item"
                        href={servicio.url}
                        alt={servicio.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {servicio.title}
                      </a>
                    ) : (
                      <a
                        className="dropdown-item"
                        href={process.env.PUBLIC_URL + servicio.url}
                        alt={servicio.title}
                      >
                        {servicio.title}
                      </a>
                    )}
                  </React.Fragment>
                );
              })}
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href={`${process.env.PUBLIC_URL}/servicios`}
                alt=""
              >
                Ver todo
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Consultas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {consultas.data.map((consulta, index) => {
                return (
                  <React.Fragment key={index}>
                    {consulta.external ? (
                      <a
                        className="dropdown-item"
                        href={consulta.url}
                        alt={consulta.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {consulta.title}
                      </a>
                    ) : (
                      <a
                        className="dropdown-item"
                        href={process.env.PUBLIC_URL + consulta.url}
                        alt={consulta.title}
                      >
                        {consulta.title}
                      </a>
                    )}
                  </React.Fragment>
                );
              })}
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href={`${process.env.PUBLIC_URL}/consultas`}
                alt=""
              >
                Ver todo
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href={`${process.env.PUBLIC_URL}/contacto`} className="nav-link">
              <i className="fas fa-envelope"></i>
              <span className="ml-1 d-sm-none">Contacto</span>
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
