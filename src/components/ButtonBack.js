import React from "react";
// import { useHistory } from "react-router-dom";

function ButtonBack(props) {
  // let history = useHistory();
  const path = props.path;
  return (
    <div className="button-goBack">
      <a
        href={
          path ? process.env.PUBLIC_URL + path : process.env.PUBLIC_URL + "/"
        }
        className="btn btn-sm btn-outline-primary"
      >
        Volver
      </a>
    </div>
  );
}

export default ButtonBack;
