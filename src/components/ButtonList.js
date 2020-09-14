import React from "react";
import ButtonItem from "../components/ButtonItem";

export default function ButtonList(props) {
  const items = props.items;
  return (
    <div className="services">
      <div className="container buttons">
        <div className="buttons-list">
          <div className="row">
            <ButtonItem items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
