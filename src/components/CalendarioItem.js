import React from 'react';
import moment from 'moment';

export default function CalendarioItem(props) {
  const events = props.events;
  return (
    <>
      {events.map((event) => {
        return (
          <div key={event.id} className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <div className='calendar-date'>
                  {moment(event.fecha).format('DD/MM')}
                </div>
                <div className='calendar-tribute'>{event.titulo}</div>
                <div className='calendar-description'>
                  {event.descripcion ? event.descripcion : '-'}
                </div>
                <a
                  href={event.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={
                    'btn ' +
                    (event.url.length ? 'btn-primary' : 'btn-primary disabled')
                  }
                  disable={event.url}
                >
                  consultar
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
