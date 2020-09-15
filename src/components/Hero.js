import React from "react";

import NovedadesCarousel from "../components/NovedadesCarousel";

const Hero = (props) => (
  <div className="hero">
    <div className="image-bg"></div>
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <NovedadesCarousel />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
