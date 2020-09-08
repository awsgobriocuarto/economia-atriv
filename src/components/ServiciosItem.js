import React from "react";

export default function ServiciosItem(props) {
  const services = props.services;
  return (
    <>
      {services.map((service) => {
        return (
          <div key={service.id} className="col-md-6">
            {service.external ? (
              <a
                href={service.url}
                target="_blank"
                alt={service.title}
                className="item"
                rel="noopener noreferrer"
              >
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="item-body">
                      <div className="item-title">{service.title}</div>
                      <div className="item-summary">{service.summary}</div>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <a href={process.env.PUBLIC_URL + service.url} className="item">
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="item-body">
                      <div className="item-title">{service.title}</div>
                      <div className="item-summary">{service.summary}</div>
                    </div>
                  </div>
                </div>
              </a>
            )}
          </div>
        );
      })}
    </>
  );
}
