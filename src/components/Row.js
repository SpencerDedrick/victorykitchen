import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./Row.css";
import SlidesData from "../Info";

function Row() {
  return (
    <div className="row">
      <h2>Our Long Term Goals & Objectives</h2>
      <ScrollContainer className="row__posters scroll-container">
        {SlidesData.map((slide) => {
          return <p className="row__poster">{slide.text}</p>;
        })}
      </ScrollContainer>
    </div>
  );
}

export default Row;
