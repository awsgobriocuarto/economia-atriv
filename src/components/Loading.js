import React from "react";
import BarLoader from "react-spinners/BarLoader";

export default function Loading() {
  return (
    <div className="loading">
      <BarLoader width={80} height={8} color={"#86bae3"} />
    </div>
  );
}
