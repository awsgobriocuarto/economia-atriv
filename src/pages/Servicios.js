import React from "react";
import Headline from "../components/Headline";
import ButtonList from "../components/ButtonList";
import CalendarioList from "../components/CalendarioList";

import data from "../data/servicios.json";

function Servicios() {
  return (
    <>
      <Headline title="Servicios" pathGoBack="/" />
      <section>
        <ButtonList items={data.data} />
      </section>
      <section className="calendar">
        <CalendarioList />
      </section>
    </>
  );
}

export default Servicios;
