import React from "react";
import Panel from "../Panel";
import "./Story.css";
import { Button } from "../Button";
import HeroSection from "../HeroSection";
import Fade from "react-reveal/Fade";

function Story() {
  return (
    <div className="story">
      <HeroSection class="hero-story">
        <div className="hero-wrapper">
          <Fade top>
            <h1 className="hero-header">
              <span className="hero-underline-red">Victory</span>
            </h1>
          </Fade>
          <Fade left>
            <p className="hero-text-large">
              "A success in a struggle against difficulties or an obstacle"
            </p>
          </Fade>
          <Fade right>
            <p className="hero-text">
              "For the <span className="hero-underline">LORD</span> your God is
              the one who goes with you to fight for you against your enemies to
              give you <span className="hero-underline">VICTORY</span>."
              <p className="verse"> - Deuteronomy 20:4</p>
            </p>
          </Fade>
        </div>
      </HeroSection>

      <Panel class="panel-white">
        <p className=" panel-text">
          <span className="panel-underline-red">Our Mission</span> is to tackle
          the issue of poverty by meeting the most basic and fundamental
          necessity of human life, food.
        </p>
      </Panel>
      <Panel class="panel-image-red">
        <h1 className="panel-header-white   ">
          <span className="">Creating a Story of Victory</span>
        </h1>
        <p className="panel-text-small panel-text-white">
          I want Victory Kitchen to represent more than just a meal but rather a
          bridge to a holistic approach to ending/ decreasing poverty in our
          community. I ask myself; how can I rehabilitate our visitors but also
          rejuvenate our community? How can Victory Kitchen succeed to the point
          it is no longer needed?
          <p className="panel-text panel-text-white">
            The heart of Victory Kitchen is based on Matthew 25:37-40
          </p>
        </p>
        <p className="panel-text-small panel-text-white ">
          My personal mission is to represent the character and love of Jesus to
          those around me. I believe good deeds create good will among those I
          come across and that in turn opens more doors for people to hear the
          good news of Christ than it closes.
        </p>
        <Button
          type="link"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          path="/team"
        >
          Meet Our Team
        </Button>
      </Panel>
      <Panel class="panel-black">
        <h1 className="panel-header border-bottom-white">
          Our Longterm Goals & Objectives
        </h1>
        <ul className=" panel-text-left panel-text-small">
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
