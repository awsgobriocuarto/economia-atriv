import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from "@fortawesome/free-solid-svg-icons"

const DeudasPagosComercioIndustria =  (props) => (
  <div className="card">
    <div className="card-header">
      <div className="card-header-title">Comercio / Industria</div>
      <div className="card-header-icon">
        <FontAwesomeIcon
          icon={faStore}
          size="lg"
        />
      </div>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <a href="/">Actualización de Deuda y Pagos</a>        
      </li>
      <li className="list-group-item">
        <a href="/">Presentación / Actualización / Pago</a>
      </li>
      <li className="list-group-item">
        <a href="/">Constancia de Inscripción</a>
      </li>
    </ul>
  </div>
)

export default DeudasPagosComercioIndustria;