import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItemsAbout, MenuItemsSupport, MenuItemsWork } from "./MenuItems";
import "./Dropdown.css";

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {props.menu === "about"
          ? MenuItemsAbout.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.className}
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })
          : props.menu === "work"
          ? MenuItemsWork.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.className}
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })
          : MenuItemsSupport.map((item, index) => {
              return item.type === "link" ? (
                <li key={index}>
                  <Link
                    className={item.className}
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ) : (
                <li>
                  <a
                    className={item.className}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default Dropdown;
/* type === "link" ? (
  <Link to={path} className="btn-mobile">
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  </Link>
) : (
  <a
    href={path}
    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a> */
