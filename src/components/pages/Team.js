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

      <Panel class="panel-black ">
        <div class="panel-split">
          <div className="panel-split1">
            <p className="panel-header panel-text-white ">
              Phoebe Khan | Founder
            </p>
          </div>
          <div class="panel-split1 panel-underline-white">
            <img
              className="panel-photo"
              src={require("../../Assets/Photo18.jpeg")}
              alt="founder"
            ></img>
          </div>
          <p class="panel-text-small panel-text-white ">
            My personal mission is to represent the character and love of Jesus
            to those around me. I believe good deeds create good will among
            those I come across and that in turn opens more doors for people to
            hear the good news of Christ than it closes.
          </p>
        </div>
      </Panel>
      <Panel class="panel-image">
        <p class="panel-text panel-text-white">
          Interested in joining our team? Volunteer with us to see what Victory
          Kitchen is all about!
        </p>
        <Button
          type="link"
          buttonStyle="btn-outline"
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
