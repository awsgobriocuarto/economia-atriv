import React from "react";

import ButtonBack from "./ButtonBack";

const Headline = (props) => {
  const { title } = props;

  return (
    <div className="headline">
      <div className="container">
        <h3>{title ? title : "Atriv"}</h3>
        <ButtonBack />
      </div>
    </div>
  );
};

export default Headline;
