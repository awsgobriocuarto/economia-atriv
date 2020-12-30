import React from "react";

import logoAtriv from "../assets/statics/administracion-tributaria-isologo.svg";
import consultas from "../data/consultas.json";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logoAtriv} alt="atriv" />
      </Link>
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
            <Link className="nav-link" to="/">
              Portada
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deudas-y-pagos">
              Deudas y Pagos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/servicios">
              Servicios
            </Link>
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
                        {consulta.title} <i className="fas fa-share"></i>
                      </a>
                    ) : (
                      <Link
                        className="dropdown-item"
                        to={consulta.url}
                        title={consulta.title}
                      >
                        {consulta.title}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to={`/consultas`}
                title="consultas"
              >
                Ver todo
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vencimientos">
              <i className="far fa-calendar-alt"></i>
              <span className="ml-1 d-sm-none">Vencimientos</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">
              <i className="fas fa-envelope"></i>
              <span className="ml-1 d-sm-none">Contacto</span>
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://www.facebook.com/economiarioiv/"
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
              href="https://www.youtube.com/channel/UCBdsSS0fALXiKbRofATXYHQ"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
              <span className="ml-1 d-sm-none">Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
