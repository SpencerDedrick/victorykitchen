import React from "react";
import "./Panel.css";

function Panel(props) {
  return (
    <div className={`panel background-image ${props.class}`}>
      <div className={props.fade}></div>
      {props.children}
    </div>
  );
}

export default Panel;
