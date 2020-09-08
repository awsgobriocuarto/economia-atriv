import React from "react";
import Headline from "../components/Headline";
import PagosList from "../components/PagosList";

function Pagos() {
  return (
    <>
      <Headline title="Deudas y Pagos" pathGoBack="/" />
      <PagosList />
    </>
  );
}

export default Pagos;
