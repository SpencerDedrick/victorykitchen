import React from "react";
import Fade from "react-reveal/Fade";
import "./Volunteer.css";
import HeroSection from "../HeroSection";

import "../../App.css";

export default function Volunteer() {
  return (
    <div className="volunteer">
      <HeroSection class="hero-volunteer">
        <Fade top>
          <h1 className="hero-header hero-underline-red">Volunteer</h1>
        </Fade>
        <Fade left>
          <p className="hero-text-large">
            See below for our upcoming volunteer opportunities.
          </p>
        </Fade>
        <Fade right>
          <p className="hero-text">
            "In the same way, let your light shine before others, that they may
            see your good deeds and glorify your Father in heaven."
            <p className="verse">- Matthew 5:16</p>
          </p>
        </Fade>
      </HeroSection>
    </div>
  );
}
