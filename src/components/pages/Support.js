import React from "react";
/* import { Switch, Route } from "react-router-dom";
import Volunteer from "./Volunteer"; */
import "./Support.css";
import { Button } from "../Button";
import HeroSection from "../HeroSection";
import "../../App.css";
import Fade from "react-reveal/Fade";
import Panel from "../Panel";

export default function Support() {
  return (
    <div className="support">
      {/* ===========
      HERO SECTION 
      =============*/}
      <HeroSection class="hero-support">
        <Fade top>
          <h1 className="hero__text--header hero__text--light hero__text--underline--primary--thick">
            Support Our Mission
          </h1>
        </Fade>
        <Fade left>
          <p className="hero__text hero__text--large hero__text--light">
            In these times, it has become more important than ever to look out
            for each other, show kindness to your neighbor and lend a helping
            hand to someone in need.
          </p>
        </Fade>
        <Fade right>
          <p className="hero__text hero__text--small hero__text--light">
            "And do not forget to do good and to share with others, for with
            such sacrifices God is pleased."
            <p className="hero__text hero__text--small hero__text--light">
              {" "}
              - Hebrews 13:16
            </p>
          </p>
        </Fade>
      </HeroSection>
      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel class="panel--dark">
        <p className="panel__text panel__text--small panel__text--light">
          Victory Kitchen is collecting funds to provide hot meals for the
          homeless community within Houston, Katy and the surrounding areas. All
          contributions will go towards providing warm, nutritious meals to our
          street friends.
        </p>
        <p className="panel__text panel__text--small panel__text--light">
          We are also collecting bibles and toiletry supplies to give out during
          our street ministries.
        </p>
      </Panel>
      {/* ===========
      CONTENT PANEL 
      =============*/}
      <Panel
        class="panel--image panel--image-light"
        style={{
          background: `url(${require("../../Assets/photo4.jpg")}) center center/cover no-repeat fixed`,
        }}
      >
        <p className="panel__text panel__text--small panel__text--dark">
          Currently there are three ways to support the work Victory Kitchen
          does. Without your generosity this would not be possible. Thank you
          for your support.
        </p>

        <div className="panel__buttons">
          <Button
            className="btn"
            buttonStyle="btn--outline-dark"
            buttonSize="btn--small"
            path="https://www.paypal.com/paypalme/victorykitchen?fbclid=IwAR1AFI6dsMfXdj2_v46VJDTMJXS_qBT4Ofvok0Z5dNhzN9boRAO8_sgZ6N4"
            type="anchor"
          >
            Donate
          </Button>
          <Button
            className="btn"
            buttonStyle="btn--outline-primary"
            buttonSize="btn--small"
            path="https://www.ofnoreputation.com/products/victory-kitchen?fbclid=IwAR29PVGPLnj4s4h5X3b6-KjTllNNCnjua9mETPJC4xLYVlE8jHsAzJziSYI"
            type="anchor"
          >
            Shop
          </Button>
          <Button
            className="btn"
            buttonStyle="btn--dark"
            buttonSize="btn--small"
            path="/volunteer"
            type="anchor"
          >
            Volunteer
          </Button>
        </div>
      </Panel>

      {/* <div className="support__wrapper">
          SUPPORT OUR MISSION
          <p>
            In these times, it has become more important than ever to look out
            for each other, show kindness to your neighbor and lend a helping
            hand to someone in need. Victory Kitchen is collecting funds to
            provide hot meals for the homeless community within Houston, Katy
            and the surrounding areas. All contributions will go towards
            providing warm, nutritious meals to our street friends. We are also
            collecting bibles and toiletry supplies to give out during our
            street ministries. Currently there are three ways to support the
            work Victory Kitchen does. You can volunteer at a Victory Kitchen
            event, purchase an official Victory Kitchen Shirt, or donate
            directly via paypal. Without your generosity this would not be
            possible. Thank you for your support. God bless.
          </p>
          <div className="support-btns">
            <a
              className="support--btn"
              buttonSize="btn--large"
              href="https://www.paypal.com/paypalme/victorykitchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
            <a
              className="support--btn"
              href="https://www.ofnoreputation.com/collections/causes/products/victory-kitchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
            <Button
              type="link"
              className="support--btn"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              path="/volunteer"
            >
              Volunteer
            </Button>
          </div>
        </div> */}
    </div>
  );
}
