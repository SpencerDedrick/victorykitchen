import React from "react";
import "../App.css";
import "./HeroSection.scss";

function HeroSection(props) {
  return (
    <div className={`hero-container hero ${props.class}`}>{props.children}</div>
  );
}

export default HeroSection;
