import React, { Component } from "react";
import Headline from "../components/Headline";
import VideoItem from "../components/VideoItem";

import videos from "../data/videos.json";

class Tutoriales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  render() {
    return (
      <>
        <Headline title="Servicios" pathGoBack="/servicios" />
        <div className="tutoriales">
          <div className="container">
            <h4>Tutoriales</h4>
            <div className="row">
              {videos.data.map((video) => {
                return (
                  <div key={video.id} className="col-md-4">
                    <VideoItem video={video} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tutoriales;
