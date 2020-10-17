import React from "react";
import Panel from "../Panel";
import "./Story.css";

function Story() {
  return (
    <div className="story">
      <Panel class="white-panel">
        <h1 className="panel-header border-bottom-red">Victory</h1>
        <p className="panel-text">
          "A success in a struggle against difficulties or an obstacle"
        </p>
      </Panel>
      <Panel class="image-panel panel-story1" fade="panel-fade">
        <h1 className="panel-header border-bottom-white">Our Mission</h1>
        <p className="panel-text">
          To tackle the issue of poverty by meeting the most basic and
          fundamental necessity of human life, food.
        </p>
      </Panel>
      <Panel class="white-panel">
        <h1 className="panel-header border-bottom-red">
          Creating a Story of Victory
        </h1>
        <p className="panel-text-small">
          I want Victory Kitchen to represent more than just a meal but rather a
          bridge to a holistic approach to ending/ decreasing poverty in our
          community. I ask myself; how can I rehabilitate our visitors but also
          rejuvenate our community?How can Victory Kitchen succeed to the point
          it is no longer needed?
          <p className="panel-text header-red">
            The heart of Victory Kitchen is based on Matthew 25:37-40
          </p>
        </p>
        <p className="panel-text-small ">
          My personal mission is to represent the character and love of Jesus to
          those around me. I believe good deeds create good will among those I
          come across and that in turn opens more doors for people to hear the
          good news of Christ than it closes.
        </p>
        <h1 className="panel-header center">
          Your Donations Make A Difference
        </h1>
        <a
          className="panel--btn center"
          href="https://www.paypal.com/paypalme/victorykitchen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Now
        </a>
      </Panel>
      <Panel class="image-panel panel-story2" fade="panel-fade">
        <h1 className="panel-header border-bottom-white">Objectives</h1>
        <p className="panel-text-small">
          1. Provide nutritious meal (lunch/dinner) to individuals and families
          experiencing food insecurity or homelessness 2. Promote best practice
          food work (food safety) 3. Facilitate access to social services to
          help with urgent needs 4. Raise awareness of hunger 5. Engage
          volunteers/community in meeting needs and creating solutions that can
          be implanted to decrease/end cycle of poverty 6. Acquire startup funds
          through private, corporate, government, community, church support 7.
          Establish facility of operation/location that is accessible to target
          population. 8. Go from volunteer run nonprofit to providing jobs for
          those in desperate need of employment or considered “un-hireable”
          elsewhere
        </p>
      </Panel>
    </div>
  );
}

export default Story;
