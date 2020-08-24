import React from "react";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControls from "./CarouselControls";
import CarouselInner from "./CarouselInner";

function NovedadesCarousel(props) {
  const items = props.items;
  return (
    <>
      <div id="carouselSlides" className="carousel slide" data-ride="carousel">
        <CarouselIndicators items={items} />
        <CarouselInner items={items} />
        <CarouselControls />
      </div>
    </>
  );
}

export default NovedadesCarousel;
