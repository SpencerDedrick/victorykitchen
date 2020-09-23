import React from "react";
import { Button } from "../Button";

import "../../App.css";

export default function Support() {
  return (
    <>
      <div className="support">
        SUPPORT OUR WORK
        <div className="hero-btns">
          <a
            className="support--btn"
            buttonStyle="btn--Primary"
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
            rel="noopener noreferrer"
          >
            Shop
          </a>
          <Button
            className="support--btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="volunteer"
          >
            Volunteer
          </Button>
        </div>
      </div>
    </>
  );
}
