import React from 'react';

import deudasPagosIcon from '../assets/statics/deudas-y-pagos.svg';
import serviciosIcon from '../assets/statics/mas-servicios.svg';

const Headline =  (props) => {

  const { title, icon } = props;
  
  return(  
    <div className="headline">
      <div className="container">
        <h3>{title ? title : 'Atriv'}</h3>
        <div className="icon">
          <img src={icon ? deudasPagosIcon : serviciosIcon}  alt=""/>
        </div>
      </div>
    </div>
  )

}

export default Headline;