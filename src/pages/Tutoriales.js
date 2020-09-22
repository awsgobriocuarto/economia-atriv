import axios from 'axios';
import React, { Component } from 'react';
import Headline from '../components/Headline';
import Loading from '../components/Loading';
import Error from '../components/Error';

// import videos from '../data/videos.json';

class Tutoriales extends Component {
  state = {
    videos: [],
    isLoading: false,
    error: false,
    errorStatus: null,
    errorMessage: null
  };

  componentDidMount() {
    const apiUrl = 'https://atriv.herokuapp.com/tutoriales';
    this.setState({ isLoading: true });
    axios
      .get(apiUrl)
      .then((res) => {
        this.setState({ isLoading: false, videos: res.data });
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
    const videos = this.state.videos;
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
        <section className='tutoriales'>
          <div className='container'>
            <h4>Tutoriales</h4>
            <div className='row'>
              {videos.map((video) => {
                return (
                  <div key={video.id} className='col-md-4'>
                    <div className='card'>
                      <div className='embed-responsive embed-responsive-16by9'>
                        <iframe
                          title='iframe'
                          className='embed-responsive-item'
                          src={`https://www.youtube.com/embed/${video.video}?rel=0`}
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className='card-body'>
                        <div className='card-title'>{video.titulo}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Tutoriales;
