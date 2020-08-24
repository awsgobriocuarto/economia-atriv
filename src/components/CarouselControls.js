import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function CarouselControls(props) {
  return (
    <>
      <a
        className="carousel-control-prev"
        href="#carouselSlides"
        role="button"
        data-slide="prev"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="carousel-control-prev-icon"
        />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselSlides"
        role="button"
        data-slide="next"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="carousel-control-next-icon"
        />
        <span className="sr-only">Next</span>
      </a>
    </>
  );
}

export default CarouselControls;
