import React, { Component } from 'react';
import Headline from '../components/Headline';
import ButtonBack from '../components/ButtonBack';

class MediosDePago extends Component {
  render () {
    return (
      <>
        <Headline title="Servicios" icon="" />
        <ButtonBack />
        <div className="medios-pago">
          <div className="container">
            <h5>Medios De Pago</h5>
          </div>
        </div>
      </>
    )
  }
}

export default MediosDePago;