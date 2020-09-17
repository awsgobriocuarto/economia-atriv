import React from "react";
import Headline from "../components/Headline";
import ButtonList from "../components/ButtonList";

import data from "../data/pagos.json";
import PlanDePago from "../components/banners/PlanDePago";

function Pagos() {
  return (
    <>
      <Headline title="Deudas y Pagos" pathGoBack="/" />
      <section>
        <ButtonList items={data.data} />
      </section>
      <section className="banners">
        <PlanDePago />
      </section>
    </>
  );
}

export default Pagos;
