import React from "react";
import moment from "moment";

export default function CalendarioItem(props) {
  const events = props.events;
  return (
    <>
      {events.map((event) => {
        return (
          <div key={event.id} className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="calendar-date">
                  {moment(event.date).format("MM/DD")}
                </div>
                <div className="calendar-tribute">{event.tribute}</div>
                <div className="calendar-description">{event.description}</div>
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "btn " +
                    (event.url.length ? "btn-primary" : "btn-primary disabled")
                  }
                  disable={event.url.length > 0}
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
