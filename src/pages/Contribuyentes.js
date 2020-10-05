import React from 'react';
import Headline from '../components/Headline';

export default function Contribuyentes() {
  return (
    <>
      <Headline title='Servicios' pathGoBack='/servicios' />
      <section className='contribucion'>
        <div className='container'>
          <h4>Servicios por Contribución</h4>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>
                  Comercio e Industria
                  <div className='icon'>
                    <div className='fas fa-fw fa-lg fa-industry'></div>
                  </div>
                </div>
                <ul class='list-group list-group-flush'>
                  <li class='list-group-item'>
                    <a
                      href='https://auth.afip.gov.ar/contribuyente/?'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Presentación de DDJJ
                    </a>
                  </li>
                  <li class='list-group-item'>
                    <a
                      href='https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.hcising'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Constancia de Inscripción
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>
                  Inmobiliario
                  <div className='icon'>
                    <div className='fas fa-fw fa-lg fa-home'></div>
                  </div>
                </div>
                <ul class='list-group list-group-flush'>
                  <li class='list-group-item'>
                    <a
                      href='https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.hconsiing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Revalúo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
