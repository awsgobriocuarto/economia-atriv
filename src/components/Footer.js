import React from "react";
import pagos from "../data/pagos.json";
import servicios from "../data/servicios.json";
import consultas from "../data/consultas.json";

const Footer = (props) => (
  <footer>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 d-none d-lg-block">
          <div className="title">Deudas y Pagos</div>
          <ul className="links">
            {pagos.data.map((pago, index) => {
              return (
                <React.Fragment key={index}>
                  {pago.external ? (
                    <li className="links-item">
                      <a
                        href={pago.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pago.title}
                      </a>
                    </li>
                  ) : (
                    <li className="links-item">
                      <a href={process.env.PUBLIC_URL + pago.url}>
                        {pago.title}
                      </a>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3 d-none d-lg-block">
          <div className="title">Servicios</div>
          <ul className="links">
            {servicios.data.map((servicio, index) => {
              return (
                <React.Fragment key={index}>
                  {servicio.external ? (
                    <li className="links-item">
                      <a
                        href={servicio.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {servicio.title}
                      </a>
                    </li>
                  ) : (
                    <li className="links-item">
                      <a href={process.env.PUBLIC_URL + servicio.url}>
                        {servicio.title}
                      </a>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3 d-none d-lg-block">
          <div className="title">Consultas</div>
          <ul className="links">
            {consultas.data.map((consulta, index) => {
              return (
                <React.Fragment key={index}>
                  {consulta.external ? (
                    <li className="links-item">
                      <a
                        href={consulta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {consulta.title}
                      </a>
                    </li>
                  ) : (
                    <li className="links-item">
                      <a href={process.env.PUBLIC_URL + consulta.url}>
                        {consulta.title}
                      </a>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <div className="col-lg-3">
          <div className="title">Secretaría de Economía</div>
          <p>
            Constitución 980. <br />
            Córdoba, Argentina. <br />
            <a href="https://www.riocuarto.gov.ar">
              Municipalidad de Río Cuarto
            </a>
          </p>
          <div className="title">Seguinos</div>
          <a
            className="text-decoration-none mr-3"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-fw fa-facebook mr-1"></i>
            <span>Facebook</span>
          </a>
          {/* <br /> */}
          <a
            className="text-decoration-none "
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-fw fa-instagram mr-1"></i>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
