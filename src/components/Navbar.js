import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar =  (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
    <div className="container">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <FontAwesomeIcon 
                icon={faHome}
              />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gracias" className="nav-link">Gracias</Link>
          </li>
          <li className="nav-item">
            <Link to="/404" className="nav-link">404</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;