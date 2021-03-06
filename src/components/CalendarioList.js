import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CalendarioItem from './CalendarioItem';
import Loading from '../components/Loading';
import Error from '../components/Error';

import moment from 'moment';
import axios from 'axios';

class CalendarioList extends Component {
  state = {
    today: moment().format('YYYY-MM-DD'),
    events: [],
    total: 0,
    isLoading: false,
    error: false,
    errorStatus: null,
    errorMessage: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const apiUrl = `https://atriv.herokuapp.com/vencimientos?_sort=fecha:ASC&_limit=4&fecha_gte=${this.state.today}`;
    axios
      .get(apiUrl)
      .then((res) => {
        this.setState({
          isLoading: false,
          events: res.data,
          total: res.data.length
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: true,
          errorStatus: err.response.status,
          errorMessage: err.message
        });
      });
  }

  render() {
    return (
      <>
        <div className='calendar max'>
          <div className='container'>
            <h5>Próximos Vencimientos</h5>
            {this.state.isLoading && <Loading />}
            {this.state.error && (
              <Error
                errorStatus={this.state.errorStatus}
                errorMessage={this.state.errorMessage}
              />
            )}
            <div className='row mt-5'>
              <CalendarioItem events={this.state.events} />
            </div>
            {this.state.total === 4 ? (
              <div className='text-center'>
                <Link
                  className='btn btn-outline-primary mt-3'
                  to='/vencimientos'
                >
                  Ver mas vencimientos
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </>
    );
  }
}

export default CalendarioList;
