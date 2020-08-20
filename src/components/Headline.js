import React from "react";

import ButtonBack from "./ButtonBack";

const Headline = (props) => {
  const { title, pathGoBack } = props;

  return (
    <div className="headline">
      <div className="container">
        <h3>{title ? title : "Atriv"}</h3>
        <ButtonBack path={pathGoBack} />
      </div>
    </div>
  );
};

export default Headline;
