import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlas } from "@fortawesome/free-solid-svg-icons";

function LegislacionNav(props) {
  const legislations = props.legislations;
  return (
    <div
      className="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      {legislations.map((legislation) => {
        return (
          <a
            key={legislation.id}
            className={`nav-link ${legislation.active}`}
            id="v-pills-home-tab"
            data-toggle="pill"
            href={`#v-pills-${legislation.id}`}
            role="tab"
            aria-controls={`#v-pills-${legislation.id}`}
            aria-selected="true"
          >
            {legislation.title}
            <div className="icon">
              <FontAwesomeIcon icon={faAtlas} size="lg" fixedWidth />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default LegislacionNav;