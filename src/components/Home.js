import React from 'react';
import logo from '../statics/logo-feria.png';

const Home =  (props) => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <img src={logo} alt="" className="img-fluid"/>
      </div>
    </div>
  </div>
)

export default Home;