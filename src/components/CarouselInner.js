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
                <h2>{item.title}</h2>
                {item.link && item.url ? (
                  <a
                    href={item.url}
                    className="btn btn-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir al contenido
                  </a>
                ) : (
                  item.link && (
                    <a
                      href={`${process.env.PUBLIC_URL}/novedades/${item.slug}`}
                      className="btn btn-light"
                    >
                      Quiero saber más
                    </a>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CarouselInner;
