import React, { Component } from "react";
import Headline from "../components/Headline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      isSending: false,
      wasSended: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      fname: "",
      lname: "",
      email: "",
      message: "",
      isSending: false,
      wasSended: true,
    });
  }

  render() {
    return (
      <>
        <Headline title="Servicios" pathGoBack="/servicios" />
        <div className="contacto">
          <div className="container">
            <h4>Consultas</h4>
            <div className="row">
              <div className="col-md-8">
                <div className="card form">
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">Nombre *</label>
                            <input
                              type="text"
                              name="fname"
                              className="form-control"
                              value={this.state.fname}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Apellido *</label>
                            <input
                              type="text"
                              name="lname"
                              className="form-control"
                              value={this.state.lname}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Email *</label>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">Mensaje*</label>
                            <textarea
                              name="message"
                              id=""
                              cols="30"
                              rows="8"
                              className="form-control"
                              value={this.state.message}
                              onChange={this.handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          (*) todos los campos son obligatorios
                        </div>
                        <div className="col-md-6 button">
                          {!this.state.wasSended ? (
                            <button className="btn btn-primary" type="submit">
                              <FontAwesomeIcon icon={faPaperPlane} /> enviar
                            </button>
                          ) : (
                            <a href="/contacto" className="btn btn-success">
                              <FontAwesomeIcon icon={faCheck} /> enviado
                            </a>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Vías de contacto</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consectetur inventore, laudantium rerum accusamus sint
                      suscipit in doloribus esse nulla quia?
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        consultas.atriv@riocuarto.gov.ar
                      </li>
                      <li className="list-group-item">
                        <FontAwesomeIcon icon={faPhoneAlt} /> 0800 444 5454
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contacto;
