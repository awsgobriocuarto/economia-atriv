import React, { Component } from 'react';
import Headline from '../components/Headline';
import LegislacionNav from '../components/legislations/LegislacionNav';
import LegislacionFileList from '../components/legislations/LegislacionFileList';
import Loading from '../components/Loading';
import Error from '../components/Error';

// import legislations from "../data/legilations.json";
import axios from 'axios';

class Legislacion extends Component {
  state = {
    legislations: [],
    isLoading: false,
    error: false,
    errorStatus: null,
    errorMessage: null
  };

  componentDidMount() {
    // const apiUrl = "http://localhost:1337/legislaciones";
    const apiUrl = 'https://atriv.herokuapp.com/legislaciones';
    this.setState({ isLoading: true });
    axios
      .get(apiUrl)
      .then((res) => {
        this.setState({ isLoading: false, legislations: res.data });
        //console.log(res.data);
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: true,
          errorStatus: err.response.status,
          errorMessage: err.message
        });
        //console.log(err);
      });
  }

  render() {
    return (
      <>
        <Headline title='Servicios' pathGoBack='/consultas' />
        {this.state.isLoading && <Loading />}
        {this.state.error && (
          <Error
            errorStatus={this.state.errorStatus}
            errorMessage={this.state.errorMessage}
          />
        )}
        {!this.state.isLoading && !this.state.error && (
          <section className='legislacion'>
            <div className='container'>
              <h4>Legislacion</h4>
              <div className='row'>
                <div className='col-sm-3'>
                  <LegislacionNav legislations={this.state.legislations} />
                </div>
                <div className='col-sm-9'>
                  <LegislacionFileList legislations={this.state.legislations} />
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default Legislacion;
