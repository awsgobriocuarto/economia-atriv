import React, { Component } from "react";
import Headline from "../components/Headline";
import ButtonBack from "../components/ButtonBack";

class Contacto extends Component {
  render() {
    return (
      <>
        <Headline title="Servicios" icon="" />
        <ButtonBack />
        <div className="contacto">
          <div className="container">
            <h5>Contacto</h5>
          </div>
        </div>
      </>
    );
  }
}

export default Contacto;
