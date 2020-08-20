import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

function LegislacionFileItem(props) {
  const file = props.file;
  return (
    <li>
      {file.filename}
      <a
        href={file.path}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light"
      >
        Descargar{" "}
        <FontAwesomeIcon icon={faFileDownload} size="lg" className="ml-1" />
      </a>
    </li>
  );
}

export default LegislacionFileItem;
