import React from "react";

function CarouselIndicators(props) {
  const items = props.items;
  return (
    <>
      <ol className="carousel-indicators">
        {items.map((item) => {
          return (
            <li
              key={item.id}
              data-target="#carouselSlides"
              data-slide-to={item.id - 1}
              className={item.id === 1 ? "active" : null}
            ></li>
          );
        })}
      </ol>
    </>
  );
}

export default CarouselIndicators;
