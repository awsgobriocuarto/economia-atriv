import React, { Component } from "react";
import CalendarioItem from "./CalendarioItem";

const events = [
  {
    id: 1,
    tribute: "inmobiliario",
    description: "revalúo",
    date: "2020-08-15",
    url:
      "https://app.riocuarto.gov.ar:8443/OficinaVirtual/servlet/hceduimpmul?Inmo",
  },
  {
    id: 2,
    tribute: "automotor",
    description: "pago",
    date: "2020-08-22",
    url:
      "https://app.riocuarto.gov.ar:8443/OficinaVirtual/servlet/hceduimpmul?Pate",
  },
  {
    id: 3,
    tribute: "comercio e industria",
    description: "actualizacion",
    date: "2020-08-23",
    url: "http://urltributo.com",
  },
  {
    id: 4,
    tribute: "monotributo unificado",
    description: "pago",
    date: "2020-08-27",
    url: "",
  },
];

class CalendarioList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="calendar">
        <div className="container">
          <h5>Calendarios de Vencimientos</h5>
          <div className="row mt-5">
            {}
            <CalendarioItem events={events} />
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarioList;
