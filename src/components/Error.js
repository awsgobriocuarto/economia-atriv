import React from "react";

export default function Error(props) {
  return (
    <div className="text-center py-5">
      <span className="lead bg-light text-danger">{props.error}</span>
    </div>
  );
}
