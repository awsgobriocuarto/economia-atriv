import React from 'react';
import CalendarList from '../components/calendar/CalendarList';
import Headline from '../components/Headline';

export default function Calendar() {
  return (
    <>
      <Headline title='Servicios' pathGoBack='/servicios' />
      <section className='legislacion'>
        <div className='container'>
          <h4>Calendario de Vencimientos</h4>
          <CalendarList />
        </div>
      </section>
    </>
  );
}
