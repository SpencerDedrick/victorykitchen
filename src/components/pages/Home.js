import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Counter from "../Counter";
import Panel from "../Panel";
import Fade from "react-reveal/Fade";
import { Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Home() {
  return (
    <div className="home">
      {/* ===========
      HERO SECTION 
      =============*/}

      <HeroSection class="hero-home">
        <video
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          className="hero__video"
        />
        <Fade top>
          <img
            src={require("../../Assets/img/VKWhite.png")}
            alt=""
            className="hero__logo"
          ></img>
        </Fade>
        <p className="hero__text hero__text--small hero__text--light">
          “The King will reply, ‘Truly I tell you, whatever you did for one of
          the least of these brothers and sisters of mine, you did for me."
          <br></br>
          <span className=" hero__text--small">-Matthew 25:40</span>
        </p>

        <div className="hero__button-container">
          <Button variant="contained" color="primary" size="large">
            Button
          </Button>
          <Button variant="contained" color="info" size="large">
            Button
          </Button>

          <Button variant="outlined" color="primary" size="large">
            Button
          </Button>
        </div>
      </HeroSection>

      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel class="panel panel--light panel--light__arrows">
        <p className="panel__text panel__text--small panel__text--italic panel__text--fade ">
          Our Mission is to help people overcome chronic or situational poverty
          by building lasting relationships and providing the most basic
          necessity of human life, food.
        </p>
        <Button
          type="link"
          buttonStyle="btn--outline-primary"
          buttonSize="btn--large"
          path="story"
        >
          Our Story
        </Button>
      </Panel>

      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel
        class="panel panel--image panel--image-dark"
        style={{
          background: `url(${require("../../Assets/img/photo1.jpg")}) center center/cover no-repeat fixed`,
        }}
      >
        <Counter number={3500} label="Meals Served" />
        <Counter number={1200} label="Friends Blessed" />
        <Button
          type="link"
          buttonStyle="btn--outline-light"
          buttonSize="btn--large"
          path="ourwork"
        >
          See Our Work
        </Button>
      </Panel>

      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel class="panel panel--primary">
        <div class="panel__icon-container">
          <i class="far fa-heart panel__icon panel__icon1 "></i>
          <i class="fas fa-church panel__icon panel__icon2"></i>
          <i class="fas fa-cross panel__icon panel__icon3"></i>
        </div>
        <p className=" panel__text panel__text--large panel__text--light">
          Our Vision is to help people find victory in their lives.
        </p>

        <p className="panel__text panel__text--small panel__text--light  ">
          We do this by helping individuals meet their most basic needs while
          simultaneously collaborating with established organizations within the
          Katy area, and beyond. Through our work, we hope to encourage and
          promote holistic and sustainable solutions with the intent to break
          the cycle of chronic or situational poverty.
        </p>
      </Panel>

      {/* ===========
      CONTENT PANEL 
      =============*/}

      <Panel
        class="panel--image panel--image-primary"
        style={{
          background: `url(${require("../../Assets/Photo21.jpg")}) center center/cover no-repeat fixed`,
        }}
      >
        <h1 class="panel__text panel__text--header panel__text--light">
          <span className="panel-underline-white">
            Your Donations Make A Difference
          </span>
        </h1>
        <Button
          type="anchor"
          buttonStyle="btn--outline-light"
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
