import React, { Component } from 'react';
import Headline from '../components/Headline';
import ButtonBack from '../components/ButtonBack';

class Tutoriales extends Component {
  render () {
    return (
      <>
        <Headline title="Servicios" icon="" />
        <ButtonBack />
        <div className="tutoriales">
          <div className="container">
            <h5>Tutoriales</h5>
          </div>
        </div>
      </>
    )
  }
}

export default Tutoriales;