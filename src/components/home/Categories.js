import React from "react";
import { Link } from "react-router-dom";
import ConsultsIcon from "../Icons/ConsultsIcon";
import LiabilitiesIcon from "../Icons/LiabilitiesIcon";
import ServicesIcon from "../Icons/ServicesIcon";

export default function Categories() {
  return (
    <div className="container mb-5">
      <h3 className="mb-4">Realizá tus gestiones online</h3>
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-3">
          <Link
            to={`/deudas-y-pagos`}
            className="btn btn-light btn-home"
            title="deudas y pagos"
          >
            <div className="icon">
              <LiabilitiesIcon />
            </div>
            <div className="title">Deudas y Pagos</div>
          </Link>
        </div>
        <div className="col-md-4 col-lg-3">
          <Link
            to={`/servicios`}
            className="btn btn-light btn-home"
            title="servicios"
          >
            <div className="icon">
              <ServicesIcon />
            </div>
            <div className="title">Servicios</div>
          </Link>
        </div>
        <div className="col-md-4 col-lg-3">
          <Link
            to={`/consultas`}
            className="btn btn-light btn-home"
            title="consultas"
          >
            <div className="icon">
              <ConsultsIcon />
            </div>
            <div className="title">Consultas</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
