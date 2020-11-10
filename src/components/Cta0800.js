import React from 'react';
import { Link } from 'react-router-dom';

function Cta0800() {
  return (
    <>
      <section className='cta'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <h3>Comunicate con nosotros</h3>
              <p>De lunes a viernes de 7.30 a 15hs.</p>
              <h4>
                0800 444 5454 <small>(opción 3)</small>
              </h4>
              <a
                href='tel:08004445454'
                className='btn btn-lg btn-outline-light mr-2'
              >
                <i className='fas fa-phone-alt'></i> Llamanos
              </a>
              <Link
                to={`/contacto`}
                className='btn btn-lg btn-outline-light'
                title='contacto'
              >
                <i className='fas fa-envelope'></i> Escribinos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta0800;
