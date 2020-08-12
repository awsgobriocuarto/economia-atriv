import React, { Component } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import NovedadesList from '../components/NovedadesList';

import deudasPagosIcon from '../assets/statics/deudas-y-pagos.svg';
import serviciosIcon from '../assets/statics/mas-servicios.svg';
 
class Home extends Component {
  render () {
    return (
      <>
        <Hero />
        <div className="home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <Link to="/deudas-y-pagos" className="btn btn-light btn-home">
                  <div className="icon">
                    <img src={deudasPagosIcon} alt="deudas y pagos"/>
                  </div>
                  <div className="title">Deudas y Pagos</div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/servicios" className="btn btn-light btn-home">
                  <div className="icon">
                    <img src={serviciosIcon} alt="deudas y pagos"/>
                  </div>
                  <div className="title">Más Servicios</div>
                </Link>
              </div>
              <div className="col-md-6">
                <NovedadesList />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home;