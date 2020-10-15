import React from "react";
/* import { Switch, Route } from "react-router-dom";
import Volunteer from "./Volunteer"; */
import "./Support.css";
import { Button } from "../Button";

import "../../App.css";

export default function Support() {
  return (
    <>
      <div className="support">
        <div className="support__wrapper">
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
              className="support--btn"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              path="/volunteer"
            >
              Volunteer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
