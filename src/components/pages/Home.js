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
      <Home1 />
      <Counter />
      <SimpleSlider />
      <div>
        <Home2 />
      </div>
    </>
  );
}

export default Home;
