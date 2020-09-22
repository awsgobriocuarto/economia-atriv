import React from 'react';
import { Link } from 'react-router-dom';

function CarouselInner(props) {
  const items = props.items;
  return (
    <>
      <div className='carousel-inner'>
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className={index === 0 ? 'carousel-item active' : 'carousel-item'}
            >
              <div className='carousel-caption'>
                <h2>{item.title}</h2>
                {item.link && item.url ? (
                  <a
                    href={item.url}
                    className='btn btn-light'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Ir al contenido
                  </a>
                ) : (
                  item.link && (
                    <Link
                      to={`/novedades/${item.slug}`}
                      className='btn btn-light'
                      title={item.title}
                    >
                      Quiero saber más
                    </Link>
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
