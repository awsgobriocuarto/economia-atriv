import React from 'react';
import Headline from '../components/Headline';
import ServiciosList from '../components/ServiciosList';
import CalendarioList from '../components/CalendarioList';

function Servicios() {
  return (
    <>
      <Headline title="Servicios" icon="" />
      <ServiciosList />
      <CalendarioList />
    </>
  )
}

export default Servicios;
