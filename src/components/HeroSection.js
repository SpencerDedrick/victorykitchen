import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <img src={require("../Assets/VKWhite.png")} alt=""></img>
      <p>
        “The King will reply, ‘Truly I tell you, whatever you did for one of the
        least of these brothers and sisters of mine, you did for me.’ -Matthew
        25:40
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="about"
        >
          Learn More
        </Button>
        <Button
          className="btns"
          buttonstyle="btn--Primary"
          buttonSize="btn--large"
          path="support"
        >
          Get Involved
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
