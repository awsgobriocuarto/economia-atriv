import React, { Component } from 'react';
import Headline from '../components/Headline';

import Modal from '../components/Modal';

import LogoPagoMisCuentas from '../assets/statics/mdp-pagos-mis-cuentas.png';
import LogoLink from '../assets/statics/mdp-link.png';
import LogoDebin from '../assets/statics/mdp-debin.png';
import LogoInterbanking from '../assets/statics/mdp-interbanking.png';
import LogoVisa from '../assets/statics/mdp-visa.png';
import LogoVisaDebito from '../assets/statics/mdp-visa-debito.png';
import LogoCordobesa from '../assets/statics/mdp-cordobesa.png';
import LogoMastercard from '../assets/statics/mdp-mastercard.png';
import LogoBancor from '../assets/statics/mdp-bancor.png';
import LogoSupervielle from '../assets/statics/mdp-supervielle.png';
import LogoCredicoop from '../assets/statics/mdp-credicoop.png';
import LogoBancoCiudad from '../assets/statics/mdp-banco-ciudad.png';
import LogoCobroExpress from '../assets/statics/mdp-cobro-express.png';
import LogoRapipago from '../assets/statics/mdp-rapipago.png';

class MediosDePago extends Component {
  state = {
    modalIsOpen: false
  };

  handleOpenModal = (e) => {
    this.setState({
      modalIsOpen: true
    });
  };

  handleCloseModal = (e) => {
    this.setState({
      modalIsOpen: false
    });
  };

  render() {
    return (
      <>
        <Headline title='Servicios' pathGoBack='/consultas' />
        <section className='medios-pagos'>
          <div className='container'>
            <h4>Medios De Pago</h4>
            <h5>Pagá Online a través de "Pagos 360"</h5>
            <h6>Servicios Adheridos</h6>
            <div className='row medios-pagos-group'>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoPagoMisCuentas}
                    alt='pago mis cuentas'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img className='img-fluid' src={LogoLink} alt='link' />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img className='img-fluid' src={LogoDebin} alt='debin' />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoInterbanking}
                    alt='interbanking'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img className='img-fluid' src={LogoVisa} alt='visa' />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoVisaDebito}
                    alt='visa debito'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoCordobesa}
                    alt='cordobesa'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoMastercard}
                    alt='mastercard'
                  />
                </div>
              </div>
            </div>
            <div className='row medios-pagos-cta'>
              <div className='col-md-6'>
                <div className='btn btn-lg btn-cta'>Ir a Pagos Online</div>
              </div>
              <div className='col-md-6 help'>
                <button
                  type='button'
                  className='btn btn-link'
                  onClick={this.handleOpenModal}
                >
                  ¿Cómo puedo pagar Online?
                </button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onCloseModal={this.handleCloseModal}
                  title='¿Cómo podés pagar Online?'
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
                  <a href='/contacto' className='btn btn-primary'>
                    Escribinos acá
                  </a>
                </Modal>
              </div>
            </div>
            <h5>Pagos Presenciales</h5>
            <h6>Bancos Adheridos</h6>
            <div className='row medios-pagos-group'>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoBancor}
                    alt='banco de cordoba'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoSupervielle}
                    alt='banco supervielle'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoCredicoop}
                    alt='banco credicoop'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoBancoCiudad}
                    alt='banco ciudad'
                  />
                </div>
              </div>
            </div>
            <h6>Ventanillas de Cobro</h6>
            <div className='row medios-pagos-group'>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoCobroExpress}
                    alt='cobro express'
                  />
                </div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>
                  <img
                    className='img-fluid'
                    src={LogoRapipago}
                    alt='rapipago'
                  />
                </div>
              </div>
            </div>
            <h6>Dependencias Municipales</h6>
            <div className='row medios-pagos-group'>
              <div className='col-6 col-md-2'>
                <div className='logo'>EMOS</div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>EDECOM</div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>SEC. ECONOMÍA</div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>CEMENTERIO</div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>REGISTROS CIVILES</div>
              </div>
              <div className='col-6 col-md-2'>
                <div className='logo'>CGM BANDA NORTE</div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MediosDePago;
