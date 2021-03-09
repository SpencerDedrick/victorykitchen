import React from "react";
import Panel from "../Panel";
import "./Team.css";
import { Button } from "../Button";
import HeroSection from "../HeroSection";
import Fade from "react-reveal/Fade";
function Story() {
  return (
    <div className="team">
      <HeroSection class="hero-team">
        <Fade top>
          <h1 className="hero-header">
            <span className="hero-underline-red">Our Team</span>
          </h1>
        </Fade>
        <Fade left>
          <p className="hero-text-large">
            The Victory Kitchen team is full of individuals that are passionate
            about helping others, and dedicated to multiplying God's Kingdom.
          </p>
        </Fade>
        <Fade right>
          <p className="hero-text">
            "I appeal to you, brothers and sisters, in the name of our Lord
            Jesus Christ, that all of you agree with one another in what you say
            and that there be no divisions among you, but that you be perfectly
            united in mind and thought. "{" "}
            <p className="hero-verse"> - I Corinthians 1:10</p>
          </p>
        </Fade>
      </HeroSection>

      <Panel class="panel--light ">
        <p className="panel__text panel__text--header panel__text--center panel__text--dark ">
          Phoebe Khan | Founder
        </p>

        <img
          className="panel__photo"
          src={require("../../Assets/img/Photo18.jpeg")}
          alt="founder"
        ></img>

        <p class="panel__text panel__text--small panel__text--dark ">
          My personal mission is to represent the character and love of Jesus to
          those around me. I believe good deeds create good will among those I
          come across and that in turn opens more doors for people to hear the
          good news of Christ than it closes.
        </p>
      </Panel>
      <Panel
        class="panel--image panel--image-primary"
        style={{
          background: `url(${require("../../Assets/img/photo10.jpg")}) center center/cover no-repeat`,
        }}
      >
        <p class="panel__text panel__text--small panel__text--light">
          Interested in joining our team? Volunteer with us to see what Victory
          Kitchen is all about!
        </p>
        <Button
          type="link"
          buttonStyle="btn--outline-light"
          buttonSize="btn-large"
          path="volunteer"
        >
          Volunteer
        </Button>
      </Panel>
    </div>
  );
}

export default Story;
