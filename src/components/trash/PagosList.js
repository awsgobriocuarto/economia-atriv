import React from "react";
import PagosItem from "./PagosItem";

import pagos from "../data/pagos.json";

function PagosList() {
  return (
    <>
      <div className="deudas-pagos">
        <div className="container buttons">
          <div className="buttons-list">
            <div className="row">
              <PagosItem pagos={pagos.data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PagosList;
