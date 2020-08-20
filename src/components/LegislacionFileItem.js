import React from "react";

function LegislacionFileItem(props) {
  const file = props.file;
  return <div>- {file.filename}</div>;
}

export default LegislacionFileItem;
