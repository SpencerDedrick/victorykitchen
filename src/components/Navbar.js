import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
/* import { Button } from "./Button"; */
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownWork, setDropdownWork] = useState(false);
  const [dropdownSupport, setDropdownSupport] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = (event) => {
    if (event.target.classList.contains("nav-item-about")) {
      if (window.innerWidth < 960) {
        setDropdownAbout(false);
      } else {
        setDropdownAbout(true);
      }
    }
    if (event.target.classList.contains("nav-item-work")) {
      if (window.innerWidth < 960) {
        setDropdownWork(false);
      } else {
        setDropdownWork(true);
      }
    }
    if (event.target.classList.contains("nav-item-support")) {
      if (window.innerWidth < 960) {
        setDropdownSupport(false);
      } else {
        setDropdownSupport(true);
      }
    }
  };

  const onMouseLeave = (event) => {
    /* if (event.target.classList.contains("nav-item")) {
      if (window.innerWidth < 960) {
        setDropdownAbout(false);
      } else {
        setDropdownAbout(false);
      }
    } */
    if (window.innerWidth < 960) {
      setDropdownAbout(false);
      setDropdownWork(false);
      setDropdownSupport(false);
    } else {
      setDropdownAbout(false);
      setDropdownWork(false);
      setDropdownSupport(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={require("../Assets/VKLogoWhite.png")}
              alt="Victory Kitchen"
            ></img>
          </NavLink>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact={true}
                activeClassName="activePage"
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to="/story"
                activeClassName="activePage"
                className="nav-links nav-item-about"
                onClick={closeMobileMenu}
              >
                About <i class="fas fa-sort-down"></i>
              </NavLink>
              {dropdownAbout && <Dropdown menu="about" />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to="/gallery"
                activeClassName="activePage"
                className="nav-links nav-item-work"
                onClick={closeMobileMenu}
              >
                Our Work <i class="fas fa-sort-down"></i>
              </NavLink>
              {dropdownWork && <Dropdown menu="work" />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to="/support"
                activeClassName="activePage"
                className="nav-links nav-item-support"
                onClick={closeMobileMenu}
              >
                Support VK <i class="fas fa-sort-down"></i>
              </NavLink>
              {dropdownSupport && <Dropdown menu="support" />}
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/support"
                activeClassName="activePage"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Donate
              </NavLink>
            </li> */}
          </ul>
          {button && (
            <a
              className="support--btn"
              buttonStyle="btn--Primary"
              buttonSize="btn--large"
              href="https://www.paypal.com/paypalme/victorykitchen?fbclid=IwAR1AFI6dsMfXdj2_v46VJDTMJXS_qBT4Ofvok0Z5dNhzN9boRAO8_sgZ6N4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
