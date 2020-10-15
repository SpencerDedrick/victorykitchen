import React from "react";
/* import { Link } from "react-router-dom"; */
import "./Slide.css";

function CardItem(props) {
  return (
    <div className="slide">
      <div className="slide__wrapper">
        <figure className="slide__img__wrapper" data-category="label">
          <img className="slide__img" alt="" src={props.src} />
        </figure>
        <div className="slide__info">
          <h5 className="slide__text">{props.text}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
