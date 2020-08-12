import React from 'react';

const CalendarioList =  (props) => (
  <div className="calendar">
    <div className="container">
      <h5>Calendarios de Vencimientos</h5>
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="card mb-3 text-center">
            <div className="card-body">
              vencimiento 1
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3 text-center">
            <div className="card-body">
              vencimiento 2 
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3 text-center">
            <div className="card-body">
              vencimiento 3
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3 text-center">
            <div className="card-body">
              vencimiento 4
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CalendarioList;