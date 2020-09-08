import React from "react";
import Headline from "../components/Headline";
import ServiciosList from "../components/ServiciosList";
import CalendarioList from "../components/CalendarioList";

function Servicios() {
  return (
    <>
      <Headline title="Servicios" pathGoBack="/" />
      <ServiciosList />
      <CalendarioList />
    </>
  );
}

export default Servicios;
