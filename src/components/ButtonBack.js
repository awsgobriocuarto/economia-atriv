import React from "react";
import { useHistory } from "react-router-dom";

function ButtonBack(props) {
  let history = useHistory();
  return (
    <div className="button-goBack">
      <div className="container">
        <button
          type="button"
          onClick={() => history.goBack()}
          className="btn btn-sm btn-outline-primary"
        >
          Volver
        </button>
      </div>
    </div>
  );
}

export default ButtonBack;
