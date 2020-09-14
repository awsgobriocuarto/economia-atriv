import React, { Component } from "react";
import Hero from "../components/Hero";
import ConsultsIcon from "../components/Icons/ConsultsIcon";
import LiabilitiesIcon from "../components/Icons/LiabilitiesIcon";
import ServicesIcon from "../components/Icons/ServicesIcon";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <section className="home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <a
                  href={`${process.env.PUBLIC_URL}/deudas-y-pagos`}
                  className="btn btn-light btn-home"
                >
                  <div className="icon">
                    <LiabilitiesIcon />
                  </div>
                  <div className="title">Deudas y Pagos</div>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href={`${process.env.PUBLIC_URL}/servicios`}
                  className="btn btn-light btn-home"
                >
                  <div className="icon">
                    <ServicesIcon />
                  </div>
                  <div className="title">Servicios</div>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href={`${process.env.PUBLIC_URL}/consultas`}
                  className="btn btn-light btn-home"
                >
                  <div className="icon">
                    <ConsultsIcon />
                  </div>
                  <div className="title">Consultas</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
