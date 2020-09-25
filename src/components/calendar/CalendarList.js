import React, { Component } from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import moment from 'moment';
import axios from 'axios';
import CalendarItem from './CalendarItem';

class CalendarList extends Component {
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
    this.setState({
      isLoading: true
    });

    const apiUrl = `https://atriv.herokuapp.com/vencimientos?_sort=fecha:ASC&fecha_gte=${this.state.today}`;
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
        {this.state.isLoading && <Loading />}
        {this.state.error && (
          <Error
            errorStatus={this.state.errorStatus}
            errorMessage={this.state.errorMessage}
          />
        )}
        <>
          <div className='row calendar min'>
            <CalendarItem events={this.state.events} />
          </div>
        </>
      </>
    );
  }
}

export default CalendarList;
