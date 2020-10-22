import React from "react";
import "../App.css";
import "./HeroSectionMobile.css";
/* import { Button } from "./Button";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade"; */

function HeroSection(props) {
  return (
    <div className={`hero-container hero-section ${props.class}`}>
      <div className="hero-wrapper">{props.children}</div>
    </div>
  );
}

export default HeroSection;
