import React from "react";
// import { useHistory } from "react-router-dom";

function ButtonBack(props) {
  // let history = useHistory();
  const path = props.path;
  return (
    <div className="button-goBack">
      <div className="container">
        {/* <button
          type="button"
          onClick={() => history.goBack()}
          className="btn btn-sm btn-outline-primary"
        >
          Volver
        </button> */}
        <a href={path ? path : "/"} className="btn btn-sm btn-outline-primary">
          Volver
        </a>
      </div>
    </div>
  );
}

export default ButtonBack;
