import React, { Component } from "react";
import Hero from "../components/Hero";

import deudasPagosIcon from "../assets/statics/deudas-y-pagos.svg";
import serviciosIcon from "../assets/statics/mas-servicios.svg";

import novedades from "../data/novedades.json";
import NovedadesCarousel from "../components/NovedadesCarousel";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <div className="home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <a href="/deudas-y-pagos" className="btn btn-light btn-home">
                  <div className="icon">
                    <img src={deudasPagosIcon} alt="deudas y pagos" />
                  </div>
                  <div className="title">Deudas y Pagos</div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="/servicios" className="btn btn-light btn-home">
                  <div className="icon">
                    <img src={serviciosIcon} alt="deudas y pagos" />
                  </div>
                  <div className="title">Más Servicios</div>
                </a>
              </div>
              <div className="col-md-6">
                <NovedadesCarousel items={novedades.data} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
