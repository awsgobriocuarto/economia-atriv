import React from "react";

export default function Error(props) {
  return (
    <div className="text-center text-danger py-5">
      <span className="lead">{props.error}</span>
    </div>
  );
}
