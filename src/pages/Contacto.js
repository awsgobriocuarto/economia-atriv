import React, { Component } from 'react';
import Headline from '../components/Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      isSending: false,
      isError: false,
      wasSended: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSending: true
    });

    axios
      .post('https://germansayago.com/mail/atriv/mail.php', this.state)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          this.setState({
            fname: '',
            lname: '',
            email: '',
            message: '',
            isSending: false,
            wasSended: true
          });
        }
        if (res.status === 400) {
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      this.setState({
        wasSended: false
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        isError: false
      });
    }, 2000);
  }

  render() {
    const isSending = this.state.isSending;
    const wasSended = this.state.wasSended;
    const isError = this.state.isError;
    return (
      <>
        <Headline title='Servicios' pathGoBack='/consultas' />
        <section className='contacto'>
          <div className='container'>
            <h4>Contacto</h4>
            <div className='row'>
              <div className='col-md-8'>
                <div className='card form'>
                  <div className='card-body'>
                    <form onSubmit={this.handleSubmit}>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group'>
                            <label htmlFor=''>Nombre *</label>
                            <input
                              type='text'
                              name='fname'
                              className='form-control'
                              value={this.state.fname}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                          <div className='form-group'>
                            <label htmlFor=''>Apellido *</label>
                            <input
                              type='text'
                              name='lname'
                              className='form-control'
                              value={this.state.lname}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                          <div className='form-group'>
                            <label htmlFor=''>Email *</label>
                            <input
                              type='mail'
                              name='email'
                              className='form-control'
                              value={this.state.email}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group'>
                            <label htmlFor=''>Mensaje*</label>
                            <textarea
                              name='message'
                              id=''
                              cols='30'
                              rows='8'
                              className='form-control'
                              value={this.state.message}
                              onChange={this.handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          (*) todos los campos son obligatorios
                        </div>
                        <div className='col-md-6 button'>
                          {isSending && (
                            <span className='mr-3'>Enviando...</span>
                          )}
                          {wasSended && <span className='mr-3'>Enviado!</span>}
                          {isError && (
                            <span className='mr-3'>Erro de env??o!</span>
                          )}
                          <button className='btn btn-primary' type='submit'>
                            <FontAwesomeIcon icon={faPaperPlane} /> enviar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>V??as de contacto</h5>

                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        atriv@riocuarto.gov.ar
                      </li>
                      <li className='list-group-item'>
                        <FontAwesomeIcon icon={faPhoneAlt} /> 0800 444 5454
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contacto;
