import React from "react";
import Panel from "../Panel";
import "./Team.css";
import { Button } from "../Button";
function Story() {
  return (
    <div className="team">
      <Panel class="panel-white">
        <h1 class="panel-header">Our Team</h1>
        <p class="panel-text">
          The team at Victory Kitchen is full of individuals that are passionate
          about helping others, and dedicated to multiply God's Kingdom.
        </p>
      </Panel>
      <Panel class="panel-black ">
        <div class="panel-split">
          <div className="panel-split1">
            <p className="panel-text panel-text-white ">
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
