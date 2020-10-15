import React from "react";
import "./Home.css";
import { Button } from "./Button";

function Home1() {
  return (
    <div className="home1-container">
      <div className="home1-vision">
        <p id="bold">
          Our Mission is to tackle the issue of poverty by meeting the most
          basic and fundamental necessity of human life, FOOD.
        </p>
        <p>
          We do this by collaborating with established organizations within the
          Katy area, and beyond, to encourage and promote sustainable solutions
          intended to break the cycle of chronic or situational poverty.
        </p>
        <Button
          className="btns"
          buttonStyle="btn--outline-black"
          buttonSize="btn--large"
          path="/ourwork"
        >
          What We Do
        </Button>
      </div>
    </div>
  );
}

export default Home1;
