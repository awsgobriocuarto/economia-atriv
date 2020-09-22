import React, { Component } from 'react';
import Headline from '../components/Headline';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Novedad from '../components/Novedad';

export default class Novedades extends Component {
  state = {
    novedad: [],
    isLoading: false,
    error: false,
    errorStatus: null,
    errorMessage: null
  };

  componentDidMount() {
    const item = this.props.match.params.slug;
    const apiUrl = `https://atriv.herokuapp.com/novedades/${item}`;
    this.setState({ isLoading: true });
    axios
      .get(apiUrl)
      .then((res) => {
        this.setState({
          isLoading: false,
          novedad: res.data
        });
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.message);
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
        <Headline title='Novedades' />
        {this.state.isLoading && <Loading />}
        {this.state.error && (
          <Error
            errorStatus={this.state.errorStatus}
            errorMessage={this.state.errorMessage}
          />
        )}
        {!this.state.isLoading && !this.state.error && (
          <div className='container'>
            <Novedad novedad={this.state.novedad} />
          </div>
        )}
      </>
    );
  }
}
