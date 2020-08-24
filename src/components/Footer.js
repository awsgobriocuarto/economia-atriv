import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="title">Secretaría de Economía</div>
          <p>
            Municipalidad de Río Cuarto <br />
            Constitución 980 <br />
            Córdoba, Argentina.
          </p>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <div className="title">Deudas y Pagos</div>
          <p>
            Patentes <br />
            Inmobiliario <br />
            Comercio e Industria. <br />
            Emos. <br />
            Planes de Viviendas y Terrenos. <br />
            Cementerio.
          </p>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <div className="title">Servicios</div>
          <p>
            <a href="/legislacion">Legislación</a> <br />
            <a href="/medios-de-pago">Medios de Pagos</a> <br />
            <a href="/contacto">Consultas</a> <br />
            <a href="/tutoriales">Tutoriales</a> <br />
            <a
              href="http://tramites.riocuarto.gov.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía de Trámites
            </a>{" "}
            <br />
            <a
              href="http://cidi.riocuarto.gov.ar/?cidi=5575683555726C625A66587A6172664676544642464D58696A7A733D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cedulón Digital
            </a>{" "}
            <br />
          </p>
        </div>
        <div className="col-md-3">
          <div className="title">Seguinos en nuestras redes</div>
          <p>
            <a
              className="mr-2"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              <span className="ml-1 d-sm-none">Facebook</span>
            </a>
            <a
              className="mr-2"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <span className="ml-1 d-sm-none">Instagram</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
