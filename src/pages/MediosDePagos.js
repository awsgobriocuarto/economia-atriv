import React, { Component } from "react";
import Headline from "../components/Headline";

import googleMap from "../assets/statics/google-map.png";
import Modal from "../components/Modal";

class MediosDePago extends Component {
  state = {
    modalIsOpen: false,
  };

  handleOpenModal = (e) => {
    this.setState({
      modalIsOpen: true,
    });
  };

  handleCloseModal = (e) => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <>
        <Headline title="Servicios" pathGoBack="/servicios" />
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
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={this.handleOpenModal}
                >
                  ¿Cómo puedo pagar Online?
                </button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onCloseModal={this.handleCloseModal}
                  title="¿Cómo podés pagar Online?"
                >
                  <p>
                    <b>Lorem ipsum dolor sit amet.</b> <br />
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam impedit ad, recusandae quod reprehenderit totam
                    molestias voluptatibus voluptates incidunt inventore?
                  </p>
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                  <p>
                    <b>¿Tenés dudas o querés consultarnos algo?</b>
                  </p>
                  <a href="/contacto" className="btn btn-primary">
                    Escribinos acá
                  </a>
                </Modal>
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
