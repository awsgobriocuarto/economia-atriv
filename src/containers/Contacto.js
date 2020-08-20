import React, { Component } from "react";
import Headline from "../components/Headline";

class Contacto extends Component {
  render() {
    return (
      <>
        <Headline title="Servicios" pathGoBack="/servicios" />
        <div className="contacto">
          <div className="container">
            <h4>Contacto</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Contacto;
