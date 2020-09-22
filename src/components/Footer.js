import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Victory newsletter to see how we're bringing God's Victory to
          Katy TX.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/support">Our Story</Link>
            <Link to="/">Meet the Team</Link>
            <Link to="/">Partners</Link>
          </div>
          <div className="footer-link-items">
            <h2>Our Work</h2>
            <Link to="/support">Our Model</Link>
            <Link to="/">Testemonials</Link>
            <Link to="/">Gallery</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Get Involved</h2>
            <a
              href="https://www.paypal.com/paypalme/victorykitchen?fbclid=IwAR1AFI6dsMfXdj2_v46VJDTMJXS_qBT4Ofvok0Z5dNhzN9boRAO8_sgZ6N4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
            <a
              href="https://www.ofnoreputation.com/products/victory-kitchen?fbclid=IwAR29PVGPLnj4s4h5X3b6-KjTllNNCnjua9mETPJC4xLYVlE8jHsAzJziSYI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
            <Link to="/volunteer">Volunteer</Link>
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <p>555-555-5555</p>

            <a href="mailto:victorykitchen_serve@outlook.com" className="email">
              victorykitchen_serve@outlook.com
            </a>
            <a
              href="mailto:vitorykitchen_serve@outlook.com"
              className="email-icon"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/">
              <img src={require("../Assets/VKLogoRed.png")} alt=""></img>
            </Link>
          </div>
          <small className="website-rights">
            Victory Kitchen Katy <i class="far fa-copyright"></i> 2020
          </small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/victorykitchenkaty"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link facebook"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <Link
              to="/"
              target="_blank"
              className="social-icon-link instagram"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              className="social-icon-link youtube"
              aria-label="Facebook"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              className="social-icon-link twitter"
              aria-label="Facebook"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
