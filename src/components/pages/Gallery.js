import React from "react";
import "./Gallery.css";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <h1>SEE VICTORY IN ACTION</h1>
        <iframe
          className="gallery-frame"
          src="https://attackpovertyfriendsofsundown.smugmug.com/frame/slideshow?key=j6dGMG&speed=3&transition=fade&autoStart=1&captions=0&navigation=1&playButton=0&randomize=1&transitionSpeed=1"
          width="800"
          height="600"
          frameborder="no"
          scrolling="no"
          title="vkgallery1"
        ></iframe>
        <h1>HELP US CONTINUE OUR MISSION</h1>
        <a
          className="support--btn gallery--btn"
          buttonStyle="btn--Primary"
          buttonSize="btn--large"
          href="https://www.paypal.com/paypalme/victorykitchen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
      </div>
    );
  }
}

export default Gallery;
