import React, { Component } from 'react';
import Headline from '../components/Headline';
import ButtonBack from '../components/ButtonBack';

class Legislacion extends Component {
  render () {
    return (
      <>
        <Headline title="Servicios" icon="" />
        <ButtonBack />
        <div className="legislacion">
          <div className="container">
            <h5>Legislacion</h5>
          </div>
        </div>
      </>
    )
  }
}

export default Legislacion;