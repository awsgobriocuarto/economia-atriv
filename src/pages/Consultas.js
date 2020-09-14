import React from "react";
import Headline from "../components/Headline";
import ButtonList from "../components/ButtonList";

import data from "../data/consultas.json";

export default function Consultas() {
  return (
    <>
      <Headline title="Consultas" pathGoBack="/" />
      <section>
        <ButtonList items={data.data} />
      </section>
    </>
  );
}
