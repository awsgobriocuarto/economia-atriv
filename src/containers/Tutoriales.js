import React, { Component } from "react";
import Headline from "../components/Headline";

class Tutoriales extends Component {
  render() {
    return (
      <>
        <Headline title="Servicios" pathGoBack="/servicios" />
        <div className="tutoriales">
          <div className="container">
            <h4>Tutoriales</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Tutoriales;
