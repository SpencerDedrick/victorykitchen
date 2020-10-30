import React from "react";
import "./Panel.scss";

function Panel(props) {
  /* let pic = "../Assets/photo1.jpg";
  let image = () => {
    return require("");
  }; */
  return (
    <div
      className={`panel ${props.class}`}
      /*style={{
        background: `url(${image()}) center center/cover no-repeat `,
      }}*/
    >
      <div className={props.fade}></div>
      {props.children}
    </div>
  );
}

export default Panel;
