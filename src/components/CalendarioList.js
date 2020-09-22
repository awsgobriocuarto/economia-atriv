import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CalendarioItem from './CalendarioItem';
import Loading from '../components/Loading';
import Error from '../components/Error';

import axios from 'axios';

class CalendarioList extends Component {
  state = {
    events: [],
    total: 0,
    isLoading: false,
    error: false,
    errorStatus: null,
    errorMessage: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const apiUrl = 'http://localhost:1337/vencimientos';
    axios
      .get(apiUrl, {
        params: {
          //_limit: 4
        }
      })
      .then((res) => {
        const newList = res.data.sort((a, b) => {
          if (a.fecha > b.fecha) {
            return 1;
          }
          if (a.fecha < b.fecha) {
            return -1;
          }
          return 0;
        });
        console.log(newList);
        this.setState({
          isLoading: false,
          events: newList,
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
        <div className='calendar'>
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
