import React from "react";
import "./Panel.css";

function Panel(props) {
  return (
    <div className={`panel ${props.class}`}>
      <div className={props.fade}></div>
      <div className="panel-container">{props.children}</div>
    </div>
  );
}

export default Panel;
