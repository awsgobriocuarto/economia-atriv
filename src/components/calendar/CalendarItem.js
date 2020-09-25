import React, { Component } from 'react';
import moment from 'moment';

export default class CalendarItem extends Component {
  state = {
    today: moment().format('YYYY-MM-DD')
  };
  render() {
    const events = this.props.events;
    return (
      <>
        {events.map((event, index) => (
          <div key={index} className='col-md-6 col-lg-4'>
            <div className='card'>
              <div
                className={
                  moment(event.fecha).format('MM') % 2 === 0
                    ? 'calendar-date par'
                    : 'calendar-date'
                }
              >
                <div className='calendar-date-day'>
                  {moment(event.fecha).format('DD')}
                </div>
                <div className='calendar-date-month'>
                  {moment(event.fecha).format('MMMM')}
                </div>
                <div className='calendar-date-year'>
                  {moment(event.fecha).format('YYYY')}
                </div>
              </div>
              <div className='calendar-body'>
                <div className='calendar-tribute'>{event.titulo}</div>
                <div className='calendar-description'>
                  {event.descripcion
                    ? `- ${event.descripcion} -`
                    : '- reavaluo -'}
                </div>
                <div className='calendar-expire'>
                  <div
                    className={
                      Math.abs(
                        moment(event.fecha).format('DDDD') -
                          moment(this.state.today).format('DDDD')
                      ) > '15'
                        ? 'badge badge-primary'
                        : 'badge badge-danger'
                    }
                  >
                    Vence {moment(event.fecha).endOf('day').fromNow()}
                  </div>
                </div>
                <a
                  href={event.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={
                    'btn ' +
                    (event.url.length
                      ? 'btn-outline-primary'
                      : 'btn-outline-primary disabled')
                  }
                  disable={event.url}
                >
                  consultar
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
