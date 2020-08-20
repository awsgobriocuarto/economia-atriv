import React, { Component } from "react";
import Headline from "../components/Headline";

class Legislacion extends Component {
  render() {
    return (
      <>
        <Headline title="Servicios" pathGoBack="/servicios" />
        <div className="legislacion">
          <div className="container">
            <h4>Legislacion</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Legislacion;
