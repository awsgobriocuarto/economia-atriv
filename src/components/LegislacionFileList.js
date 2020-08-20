import React from "react";
import LegislacionFileItem from "./LegislacionFileItem";

function LegislacionFilelist(props) {
  const legislations = props.legislations;
  return (
    <div className="tab-content" id="v-pills-tabContent">
      {legislations.map((legislation) => {
        return (
          <div
            key={legislation.id}
            className={`tab-pane fade ${legislation.show} ${legislation.active}`}
            id={`v-pills-${legislation.id}`}
            role="tabpanel"
            aria-labelledby={`v-pills-${legislation.id}-tab`}
          >
            <h6>{legislation.title}</h6>
            <ul>
              {legislation.files.map((file) => {
                return <LegislacionFileItem key={file.id} file={file} />;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default LegislacionFilelist;
