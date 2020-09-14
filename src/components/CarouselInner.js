import React from "react";

function CarouselInner(props) {
  const items = props.items;
  return (
    <>
      <div className="carousel-inner">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className={
                item.id === 1 ? "carousel-item active" : "carousel-item"
              }
            >
              <div className="carousel-caption">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a
                  href={`${process.env.PUBLIC_URL}/novedades/${item.slug}`}
                  className="btn btn-outline-light"
                >
                  ver más
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CarouselInner;
