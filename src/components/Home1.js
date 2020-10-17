import React from "react";
import "./Home.css";
import { Button } from "./Button";

function Home1(props) {
  return (
    <div className="home1-container">
      <div className={props.class}>
        <p id="bold">{props.ptext1}</p>
        <p>{props.ptext2}</p>
        <Button
          className="btns"
          buttonStyle="btn--outline-black"
          buttonSize="btn--large"
          path={props.buttonRoute}
        >
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
}

export default Home1;
