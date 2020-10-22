import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import { Button } from "../Button";

import Counter from "../Counter";
import Panel from "../Panel";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div className="home">
      <HeroSection class="hero-home">
        <video
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          className="hero-video"
        />
        <Fade top>
          <img
            src={require("../../Assets/VKWhite.png")}
            alt=""
            className="hero-logo"
          ></img>
        </Fade>

        <p className="hero-text hero-text-home">
          “The King will reply, ‘Truly I tell you, whatever you did for one of
          the least of the se brothers and sisters of mine, you did for me."
          <br></br>
          <span className=" verse">-Matthew 25:40</span>
        </p>

        <div className="hero-buttons">
          <Button
            className="btn"
            buttonStyle="btn-outline"
            buttonSize="btn-large"
            path="story"
            type="link"
          >
            Learn More
          </Button>
          <Button
            buttonstyle="btn-Primary"
            buttonSize="btn-large"
            path="support"
            type="link"
          >
            Get Involved
          </Button>
        </div>
      </HeroSection>

      <Panel class="white-panel">
        <p className="panel-text-small panel-text-em">
          Our Mission is to help people overcome chronic or situational poverty
          by building lasting relationships and providing the most basic
          necessity of human life, food.
        </p>

        <Button
          type="link"
          buttonStyle="btn-outline-black"
          buttonSize="btn-large"
          path="story"
        >
          Our Story
        </Button>
      </Panel>

      <Panel class="panel-image">
        <Counter number={3500} label="Meals Served" />
        <Counter number={1200} label="Friends Blessed" />
        <Button
          type="link"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          path="ourwork"
        >
          See Our Work
        </Button>
      </Panel>
      <Panel class="panel-black">
        <i class="far fa-heart panel-icon"></i>
        <i class="fas fa-church panel-icon"></i>
        <i class="fas fa-cross panel-icon"></i>
        <p className="panel-text-small panel-text-white">
          Our Vision is to help people find victory in their lives.
        </p>

        <p className="panel-text-small ">
          We do this by helping individuals meet their most basic needs while
          simultaneously collaborating with established organizations within the
          Katy area, and beyond. Through our work, we hope to encourage and
          promote holistic and sustainable solutions with the intent to break
          the cycle of chronic or situational poverty.
        </p>
      </Panel>
      <Panel class="panel-image-red">
        <h1 class="panel-header-white ">
          <span className="panel-underline-white">
            Your Donations Make A Difference
          </span>
        </h1>
        <Button
          type="anchor"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          path="https://www.paypal.com/paypalme/victorykitchen"
        >
          Donate Now
        </Button>
      </Panel>
    </div>
  );
}

export default Home;
