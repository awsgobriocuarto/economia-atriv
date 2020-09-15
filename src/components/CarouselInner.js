import React from "react";

function CarouselInner(props) {
  const items = props.items;
  return (
    <>
      <div className="carousel-inner">
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
            >
              <div className="carousel-caption">
                <div className="caption-content">
                  <h3>{item.titulo}</h3>
                  <p>{item.resumen}</p>
                  {item.link && (
                    <a
                      href={`${process.env.PUBLIC_URL}/novedades/${item.slug}`}
                      className="btn btn-outline-light"
                    >
                      ver más
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CarouselInner;
