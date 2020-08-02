import React, { Component } from 'react';
import Logo from '../components/Logo';

class Home extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col md-3">
            <Logo />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;