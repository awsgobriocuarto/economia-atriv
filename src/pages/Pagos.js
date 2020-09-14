import React from "react";
import Headline from "../components/Headline";
import ButtonList from "../components/ButtonList";

import data from "../data/pagos.json";

function Pagos() {
  return (
    <>
      <Headline title="Deudas y Pagos" pathGoBack="/" />
      <section>
        <ButtonList items={data.data} />
      </section>
    </>
  );
}

export default Pagos;
