import React, { Component } from "react";
import Headline from "../components/Headline";
import LegislacionNav from "../components/LegislacionNav";
import LegislacionFileList from "../components/LegislacionFileList";

import legislations from "../data/legilations.json";

console.log(legislations.data);

class Legislacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      legislations: [],
    };
  }

  render() {
    return (
      <>
        <Headline title="Servicios" pathGoBack="/servicios" />
        <div className="legislacion">
          <div className="container">
            <h4>Legislacion</h4>
            <div className="row">
              <div className="col-sm-5">
                <LegislacionNav legislations={legislations.data} />
              </div>
              <div className="col-sm-7">
                <LegislacionFileList legislations={legislations.data} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Legislacion;
