import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

function ButtonBack(props) {
  // let history = useHistory();
  const path = props.path;
  return (
    <div className='button-goBack'>
      <Link
        to={path ? process.env.PUBLIC_URL + path : process.env.PUBLIC_URL + '/'}
        className='btn btn-sm btn-outline-primary'
        title='volver'
      >
        Volver
      </Link>
    </div>
  );
}

export default ButtonBack;
