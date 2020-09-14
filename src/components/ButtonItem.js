import React from "react";

export default function ServiciosItem(props) {
  const items = props.items;
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id} className="col-md-6">
            {item.external ? (
              <a
                href={item.url}
                target="_blank"
                alt={item.title}
                className="item"
                rel="noopener noreferrer"
              >
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="item-body">
                      <div className="item-title">{item.title}</div>
                      <div className="item-summary">{item.summary}</div>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <a href={process.env.PUBLIC_URL + item.url} className="item">
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="item-body">
                      <div className="item-title">{item.title}</div>
                      <div className="item-summary">{item.summary}</div>
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
