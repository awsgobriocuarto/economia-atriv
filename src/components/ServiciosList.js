import React from "react";
import ServiciosItem from "../components/ServiciosItem";

import services from "../data/servicios.json";

export default function ServiciosList() {
  return (
    <div className="services">
      <div className="container buttons">
        <div className="buttons-list">
          <div className="row">
            <ServiciosItem services={services.data} />
          </div>
        </div>
      </div>
    </div>
  );
}
