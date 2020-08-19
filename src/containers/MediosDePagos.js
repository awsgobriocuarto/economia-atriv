import React, { Component } from "react";
import Headline from "../components/Headline";

import googleMap from "../assets/statics/google-map.png";

class MediosDePago extends Component {
  render() {
    return (
      <>
        <Headline title="Servicios" icon="" />
        <div className="medios-pagos">
          <div className="container">
            <h4>Medios De Pago</h4>
            <h5>Pagá Online a través de "Pagos 360"</h5>
            <h6>Servicios Adheridos</h6>
            <div className="row medios-pagos-group">
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
            </div>
            <div className="row medios-pagos-cta">
              <div className="col-md-6">
                <div className="btn btn-lg btn-cta">Ir a Pagos Online</div>
              </div>
              <div className="col-md-6 help">
                <a href="/">¿Cómo puedo pagar Online?</a>
              </div>
            </div>
            <h5>Pagos Presenciales</h5>
            <h6>Bancos Adheridos</h6>
            <div className="row medios-pagos-group">
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
            </div>
            <h6>Ventanillas de Cobro</h6>
            <div className="row medios-pagos-group">
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
            </div>
            <h6>Dependencias Municipales</h6>
            <div className="row medios-pagos-group">
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
              <div className="col-6 col-md-2">
                <div className="logo">medio de pago</div>
              </div>
            </div>
            <h5>Ubicación</h5>
            <img src={googleMap} alt="google map" className="img-fluid" />
          </div>
        </div>
      </>
    );
  }
}

export default MediosDePago;
