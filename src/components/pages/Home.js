import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Home1 from "../Home1";
import Home2 from "../Home2";
import Counter from "../Counter";
import SimpleSlider from "../Slider";

function Home() {
  return (
    <>
      <HeroSection />
      <Home1
        class="home1-vision"
        ptext1="Our Mission is to tackle the issue of poverty by meeting the most
          basic and fundamental necessity of human life, FOOD."
        ptext2="We do this by collaborating with established organizations within the
          Katy area, and beyond, to encourage and promote sustainable solutions
          intended to break the cycle of chronic or situational poverty."
        buttonText=" What We Do"
        buttonRoute="/ourwork"
      />
      <Counter />
      <SimpleSlider />
      <div>
        <Home2 />
      </div>
    </>
  );
}

export default Home;
