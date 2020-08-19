import React from "react";
import Headline from "../components/Headline";
import ServiciosList from "../components/ServiciosList";
import CalendarioList from "../components/CalendarioList";
import ButtonBack from "../components/ButtonBack";

function Servicios() {
  return (
    <>
      <Headline title="Servicios" icon="" />
      <ButtonBack />
      <ServiciosList />
      <CalendarioList />
    </>
  );
}

export default Servicios;
