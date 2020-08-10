import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons"

const DeudasPagosInmobiliario =  (props) => (
  <div className="card">
    <div className="card-header">
      <div className="card-header-title">Inmobiliario</div>
      <div className="card-header-icon">
        <FontAwesomeIcon
          icon={faHome}
          size="lg"
        />
      </div>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <a href="/">Actualización y Pagos</a>        
      </li>
      <li className="list-group-item">
        <a href="/">Revalúo</a>
      </li>
    </ul>
  </div>
)

export default DeudasPagosInmobiliario;