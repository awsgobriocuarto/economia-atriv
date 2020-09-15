import React from "react";

function CarouselIndicators(props) {
  const items = props.items;
  return (
    <>
      <ol className="carousel-indicators">
        {items.map((item, index) => {
          return (
            <li
              key={item.id}
              data-target="#carouselSlides"
              data-slide-to={index}
              className={index === 0 ? "active" : null}
            ></li>
          );
        })}
      </ol>
    </>
  );
}

export default CarouselIndicators;
