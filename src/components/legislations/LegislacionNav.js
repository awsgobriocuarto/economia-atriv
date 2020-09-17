import React from "react";

function LegislacionNav(props) {
  const legislations = props.legislations;
  return (
    <div
      className="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      {legislations.map((legislation, index) => {
        return (
          <a
            key={index}
            className={index === 0 ? "nav-link active" : "nav-link"}
            id="v-pills-home-tab"
            data-toggle="pill"
            href={`#v-pills-${index}`}
            role="tab"
            aria-controls={`#v-pills-${index}`}
            aria-selected="true"
          >
            {legislation.title}
            <div className="icon">
              <i className="fas fa-fw fa-lg fa-atlas"></i>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default LegislacionNav;
