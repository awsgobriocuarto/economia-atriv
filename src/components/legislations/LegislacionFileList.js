import React from "react";
import LegislacionFileItem from "./LegislacionFileItem";

function LegislacionFilelist(props) {
  const legislations = props.legislations;
  return (
    <div className="tab-content" id="v-pills-tabContent">
      {legislations.map((legislation, index) => {
        return (
          <div
            key={index}
            className={
              index === 0 ? "tab-pane fade show active" : "tab-pane fade"
            }
            id={`v-pills-${index}`}
            role="tabpanel"
            aria-labelledby={`v-pills-${index}-tab`}
          >
            <h6>{legislation.title}</h6>
            {legislation.documents.length === 0 ? (
              <ul>
                <li>No hay documentos</li>
              </ul>
            ) : (
              <ul>
                {legislation.documents.map((file, index) => {
                  return <LegislacionFileItem key={index} file={file} />;
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LegislacionFilelist;
