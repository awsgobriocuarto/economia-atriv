import React from "react";
import ButtonIcon from "./ButtonIcon";

function PagosItem(props) {
  const pagos = props.pagos;
  return (
    <>
      {pagos.map((pago) => {
        return (
          <div key={pago.id} className="col-md-6">
            {pago.external ? (
              <a
                href={pago.url}
                target="_blank"
                alt={pago.title}
                className="item"
                rel="noopener noreferrer"
              >
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <ButtonIcon icon={pago.icon} size="3x" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="item-body">
                      <div className="item-title">{pago.title}</div>
                      <div className="item-summary">{pago.summary}</div>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <a href={pago.url} className="item">
                <div className="row">
                  <div className="col-md-3">
                    <div className="item-icon">
                      <ButtonIcon icon={pago.icon} size="3x" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="item-body">
                      <div className="item-title">{pago.title}</div>
                      <div className="item-summary">{pago.summary}</div>
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

export default PagosItem;
