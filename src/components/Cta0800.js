import React from "react";

function Cta0800() {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3>Comunicate con nosotros</h3>
              <p>De lunes a viernes de 7.30 a 13.30hs.</p>
              <h4>
                0800 444 5454 <small>(opción 3)</small>
              </h4>
              <a
                href="tel:08004445454"
                className="btn btn-lg btn-outline-light mr-2"
              >
                <i className="fas fa-phone-alt"></i> Llamanos
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/contacto`}
                className="btn btn-lg btn-outline-light"
              >
                <i className="fas fa-envelope"></i> Escribinos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta0800;
