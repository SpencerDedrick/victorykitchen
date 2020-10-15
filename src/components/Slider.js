import React, { Component } from "react";
import Slider from "react-slick";
/* import Slide from "./Slide";
import CardItem from "./CardItem"; */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css";
import "./Slider.css";
import slidesData from "../Info";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrow: false,
      autoplay: true,
      autoplaySpeed: 5000,
      className: "simple__slider",
    };
    return (
      <div className="slider-wrapper">
        <h2>Our Long Term Visions & Goals</h2>
        <div className="slider">
          <Slider {...settings}>
            {slidesData.map((slide) => (
              <div className={`slick-slide slide-${slide.id}`} key={slide.id}>
                <div className="slick-slide-image-wrapper">
                  <img
                    className="slick-slide-image"
                    src={slide.image}
                    alt="cat"
                  />
                  <div className="image-fade"></div>
                </div>
                <label className="slick-slide-label">{slide.label}</label>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
