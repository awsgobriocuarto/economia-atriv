import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const apiURL =
  "https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=12cokqEPO0B7WZCds_4dV0Uigoe4r-SM7iCIxJuMgeAI&sheet=datos";

function Cta0800() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        setTexts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3>Comunicate con nosotros</h3>
              {texts.map((item, index) => (
                <React.Fragment key={item}>
                  <p>{item.texto}</p>
                </React.Fragment>
              ))}
              <h4>
                0800 444 5454 <small>(opción 3)</small>
              </h4>
              <a
                href="tel:08004445454"
                className="btn btn-lg btn-outline-light mr-2"
              >
                <i className="fas fa-phone-alt"></i> Llamanos
              </a>
              <Link
                to={`/contacto`}
                className="btn btn-lg btn-outline-light"
                title="contacto"
              >
                <i className="fas fa-envelope"></i> Escribinos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta0800;
