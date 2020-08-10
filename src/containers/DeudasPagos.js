import React from 'react';
import Headline from '../components/Headline';
import DeudasPagosPatentes from '../components/DeudasPagosPatentes';
import DeudasPagosInmobiliario from '../components/DeudaPagosInmobiliario';
import DeudasPagosComercioIndustria from '../components/DeudasPagosComercioIndustria';
import DeudasPagosEmos from '../components/DeudasPagosEmos';
import DeudasPagosViviendasTerrenos from '../components/DeudasPagosViviendasTerrenos';
import DeudasPagosCementerio from '../components/DeudasPagosCementerio';
import ButtonBack from '../components/ButtonBack';

const DeudasPagos =  (props) => (
  <>
  <Headline title="Deudas y Pagos" icon="icon" />
  <ButtonBack />
  <div className="deudas-pagos">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <DeudasPagosPatentes />
        </div>
        <div className="col-md-4">
          <DeudasPagosInmobiliario />
        </div>
        <div className="col-md-4">
          <DeudasPagosComercioIndustria />
        </div>
        <div className="col-md-4">
          <DeudasPagosEmos />
        </div>
        <div className="col-md-4">
          <DeudasPagosViviendasTerrenos />
        </div>
        <div className="col-md-4">
          <DeudasPagosCementerio />
        </div>
      </div>
    </div>
  </div>
  </>
)

export default DeudasPagos;