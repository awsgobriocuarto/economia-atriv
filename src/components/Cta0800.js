import React from "react";

const googlemap =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.352719204175!2d-64.35033345568377!3d-33.126096962953866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d20011ecc992ab%3A0x637e725167d60bc3!2sSecretar%C3%ADa%20de%20Econom%C3%ADa%20Municipalidad%20de%20R%C3%ADo%20Cuarto!5e0!3m2!1ses!2sar!4v1598302457639!5m2!1ses!2sar";

function Cta0800(props) {
  return (
    <>
      <div className="cta0800">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-1">Comunicate con nosotros al</p>
              <h3>
                <a href="tel:08004445454">0800 444 5454</a>
              </h3>
              <h5>*Opción 3</h5>
              <h6>De lunes a viernes de 9 a 13hs</h6>
              <h6>Constitución 988, Río Cuarto, Córdoba.</h6>
            </div>
            <div className="col-md-6">
              <iframe
                className="googlemaps"
                src={googlemap}
                height="250"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="googlemap"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta0800;
