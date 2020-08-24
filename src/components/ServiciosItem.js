import React from "react";
import ServiceIcon from "./ServiceIcon";

export default function ServiciosItem(props) {
  const services = props.services;
  // let anchorRef = React.createRef();
  return (
    <>
      {services.map((service) => {
        return (
          <div key={service.id} className="col-md-6">
            {service.external ? (
              <a
                href={service.url}
                target="_blanck"
                alt={service.title}
                className="item"
              >
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <ServiceIcon icon={service.icon} size="3x" />
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
              <a href={service.url} className="item">
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <ServiceIcon icon={service.icon} size="3x" />
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
