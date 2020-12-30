import React from "react";

import NovedadesCarousel from "../components/NovedadesCarousel";
import Banners from "../components/home/Banners";

const Hero = (props) => (
  <div className="hero">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="content">
            <div className="image-bg"></div>
            <NovedadesCarousel />
          </div>
        </div>
        <div className="col-md-4">
          <Banners />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
