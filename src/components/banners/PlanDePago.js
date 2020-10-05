import React from 'react';

export default function PlanDePago() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <h3>Gestioná tu plan de pago ahora</h3>
          <p className='lead mb-4'>
            Podés gestionar tu plan de pago por teléfono al <b>0800 444 5454</b>{' '}
            opción 3, o escribirnos a través de <b>Whatsapp</b>
          </p>
          <div className='buttons'>
            <a href='tel:08004445454' className='btn btn-primary'>
              <i className='fas fa-phone-alt'></i> Llamar al 0800 444 5454
            </a>
            <a href='https://wa.me/+5493584834396' className='btn btn-success'>
              <i className='fab fa-whatsapp'></i> +54 9 358 483 4396
            </a>
            <a href='https://wa.me/+5493585148212' className='btn btn-success'>
              <i className='fab fa-whatsapp'></i> +54 9 358 514 8212
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
