import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiciosItem(props) {
  const items = props.items;
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id} className='col-md-6'>
            {item.external ? (
              <a
                href={item.url}
                target='_blank'
                alt={item.title}
                className='item'
                rel='noopener noreferrer'
              >
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='item-icon'>
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className='col-md-9'>
                    <div className='item-body'>
                      <div className='item-title'>{item.title}</div>
                      <div className='item-summary'>{item.summary}</div>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <Link to={item.url} className='item' title={item.title}>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='item-icon'>
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className='col-md-9'>
                    <div className='item-body'>
                      <div className='item-title'>{item.title}</div>
                      <div className='item-summary'>{item.summary}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
}
