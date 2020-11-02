import React from "react";
import Panel from "../Panel";
import "./Story.css";
import { Button } from "../Button";
import HeroSection from "../HeroSection";
import Fade from "react-reveal/Fade";

function Story() {
  return (
    <div className="story">
      {/* ===========
      HERO SECTION 
      =============*/}
      <HeroSection class="hero-story">
        <Fade top>
          <h1 className="hero__text--header hero__text--light hero__text--underline--primary--thick">
            Victory
          </h1>
        </Fade>
        <Fade left>
          <p className="hero__text hero__text--large hero__text--light">
            "A success in a struggle against difficulties or an obstacle"
          </p>
        </Fade>
        <Fade right>
          <p className="hero__text hero__text--small hero__text--light">
            "For the<span className="hero__text--underline--light"> LORD </span>
            your God is the one who goes with you to fight for you against your
            enemies to give you
            <span className="hero__text--underline--light"> VICTORY </span>."
            <p className="hero__text hero__text--small hero__text--light">
              {" "}
              - Deuteronomy 20:4
            </p>
          </p>
        </Fade>
      </HeroSection>

      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel class="panel panel--light">
        <p className="panel__text panel__text--dark panel__text--large panel__text--center">
          <span className="panel__underline">Our Mission</span>is to tackle the
          issue of poverty by meeting the most basic and fundamental necessity
          of human life, food.
        </p>
      </Panel>
      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel class="panel panel--primary">
        <h1 className="panel__text--header panel__text--light">
          Creating a Story of
          <span className="panel__underline"> Victory</span>
        </h1>
        <p className="panel__text panel__text--small panel__text--light">
          I want Victory Kitchen to represent more than just a meal but rather a
          bridge to a holistic approach to ending/ decreasing poverty in our
          community. I ask myself; how can I rehabilitate our visitors but also
          rejuvenate our community? How can Victory Kitchen succeed to the point
          it is no longer needed?
          <p className="panel__text panel__text--large panel__text--light">
            The heart of Victory Kitchen is based on Matthew 25:37-40
          </p>
        </p>
        <p className="panel__text panel__text--small panel__text--light ">
          My personal mission is to represent the character and love of Jesus to
          those around me. I believe good deeds create good will among those I
          come across and that in turn opens more doors for people to hear the
          good news of Christ than it closes.
        </p>
        <Button
          type="link"
          buttonStyle="btn--outline-light"
          buttonSize="btn-large"
          path="/team"
        >
          Meet Our Team
        </Button>
      </Panel>
      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel
        class="panel--image panel--image-dark"
        style={{
          background: `url(${require("../../Assets/photo7.jpg")}) center center/cover no-repeat fixed`,
        }}
      >
        <h1 className="panel__text--header panel__text--light">
          Our Longterm Goals & Objectives
        </h1>
        <ul className=" panel__text panel__text--small panel__text--light panel__text--left">
          <li>
            1. Provide nutritious meal (lunch/dinner) to individuals and
            families experiencing food insecurity or homelessness
          </li>
          <li>2. Promote best practice food work (food safety)</li>
          <li>
            3. Facilitate access to social services to help with urgent needs
          </li>
          <li>4. Raise awareness of hunger</li>
          <li>
            5. Engage volunteers/community in meeting needs and creating
            solutions that can be implanted to decrease/end cycle of poverty
          </li>
          <li>
            6. Acquire startup funds through private, corporate, government,
            community, church support
          </li>
          <li>
            7. Establish facility of operation/location that is accessible to
            target population.
          </li>
          <li>
            8. Go from volunteer run nonprofit to providing jobs for those in
            desperate need of employment or considered “un-hireable” elsewhere
          </li>
        </ul>
        <p className="panel-text-small"></p>
      </Panel>
    </div>
  );
}

export default Story;
