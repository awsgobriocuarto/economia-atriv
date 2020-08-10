import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from "@fortawesome/free-solid-svg-icons"

const DeudasPagosCementerio =  (props) => (
  <div className="card">
    <div className="card-header">
      <div className="card-header-title">Cementerio</div>
      <div className="card-header-icon">
        <FontAwesomeIcon
          icon={faDove}
          size="lg"
        />
      </div>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <a href="/">Actualización y Pagos</a>        
      </li>
    </ul>
  </div>
)

export default DeudasPagosCementerio;