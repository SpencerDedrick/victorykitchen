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
          <h1 className="hero__text--header hero__text--light hero__text--underline--primary--thick">
            Volunteer
          </h1>
        </Fade>
        <Fade left>
          <p className="hero__text hero__text--large hero__text--light">
            See below for our upcoming volunteer opportunities.
          </p>
        </Fade>
        <Fade right>
          <p className="hero__text hero__text--small hero__text--light">
            "In the same way, let your light shine before others, that they may
            see your good deeds and glorify your Father in heaven."
            <p className="hero__text hero__text--small hero__text--light">
              - Matthew 5:16
            </p>
          </p>
        </Fade>
      </HeroSection>
    </div>
  );
}
