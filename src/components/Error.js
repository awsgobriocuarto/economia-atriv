import React from "react";

export default function Error(props) {
  return (
    <div className="text-center py-5 my-5">
      <div className="bg-white">
        <h3 className="text-danger">Error {props.errorStatus}</h3>
      </div>
    </div>
  );
}
