import React, { Component } from "react";
import NovedadesItem from "./NovedadesItem";

class Novedades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet 1.",
          summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          slug: "titulo-novedad-1",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet 2.",
          summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          slug: "titulo-novedad-2",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet 3.",
          summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          slug: "titulo-novedad-3",
        },
      ],
    };
  }
  render() {
    const { items } = this.state;

    return (
      <div className="novedades">
        <div className="card card-home">
          <div className="card-header">Novedades</div>
          <div className="card-body">
            <NovedadesItem items={items} />
          </div>
        </div>
      </div>
    );
  }
}

export default Novedades;
