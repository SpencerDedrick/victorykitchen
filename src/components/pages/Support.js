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
    <>
      <div className="support">
        <HeroSection class="hero-support">
          <Fade top>
            <h1 className="hero-header">
              <span className="hero-underline-red">
                Help Support Our Mission
              </span>
            </h1>
          </Fade>
          <Fade left>
            <p className="hero-text-large">
              In these times, it has become more important than ever to look out
              for each other, show kindness to your neighbor and lend a helping
              hand to someone in need.
            </p>
          </Fade>
          <Fade right>
            <p className="hero-text">
              "And do not forget to do good and to share with others, for with
              such sacrifices God is pleased."
              <p className="hero-verse"> - Hebrews 13:16</p>
            </p>
          </Fade>
        </HeroSection>
        {/* ===========
      CONTENT PANEL 
      =============*/}
        <Panel class="panel--light">
          <p className="panel__text panel__text--small panel__text--dark">
            Victory Kitchen is collecting funds to provide hot meals for the
            homeless community within Houston, Katy and the surrounding areas.
            All contributions will go towards providing warm, nutritious meals
            to our street friends.
          </p>
          <p className="panel__text panel__text--small panel__text--dark">
            We are also collecting bibles and toiletry supplies to give out
            during our street ministries.
          </p>
        </Panel>
        {/* ===========
      CONTENT PANEL 
      =============*/}
        <Panel class="panel--primary">
          <p className="panel__text panel__text--small panel__text--light">
            Currently there are three ways to support the work Victory Kitchen
            does. Without your generosity this would not be possible. Thank you
            for your support.
          </p>

          <div className="panel__buttons">
            <Button
              className="btn"
              buttonStyle="btn--outline-light"
              buttonSize="btn--medium"
              path="https://www.paypal.com/paypalme/victorykitchen?fbclid=IwAR1AFI6dsMfXdj2_v46VJDTMJXS_qBT4Ofvok0Z5dNhzN9boRAO8_sgZ6N4"
              type="anchor"
            >
              Donate
            </Button>
            <Button
              className="btn"
              buttonStyle="btn--outline-dark"
              buttonSize="btn--medium"
              path="shttps://www.ofnoreputation.com/products/victory-kitchen?fbclid=IwAR29PVGPLnj4s4h5X3b6-KjTllNNCnjua9mETPJC4xLYVlE8jHsAzJziSYI"
              type="anchor"
            >
              Shop
            </Button>
            <Button
              className="btn"
              buttonStyle="btn--light"
              buttonSize="btn--medium"
              path="shttps://www.ofnoreputation.com/products/victory-kitchen?fbclid=IwAR29PVGPLnj4s4h5X3b6-KjTllNNCnjua9mETPJC4xLYVlE8jHsAzJziSYI"
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
    </>
  );
}
