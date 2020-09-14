import React, { Component } from "react";
import Hero from "../components/Hero";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <div className="home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <a
                  href={`${process.env.PUBLIC_URL}/deudas-y-pagos`}
                  className="btn btn-light btn-home"
                >
                  <div className="icon">
                    <i className="fas fa-4x fa-hand-holding-usd"></i>
                  </div>
                  <div className="title">Deudas y Pagos</div>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href={`${process.env.PUBLIC_URL}/servicios`}
                  className="btn btn-light btn-home"
                >
                  <div className="icon">
                    <i className="fas fa-4x fa-laptop"></i>
                  </div>
                  <div className="title">Servicios</div>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href={`${process.env.PUBLIC_URL}/servicios`}
                  className="btn btn-light btn-home"
                >
                  <div className="icon">
                    <i className="fas fa-4x fa-search"></i>
                  </div>
                  <div className="title">Consultas</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
