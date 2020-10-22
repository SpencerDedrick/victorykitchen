import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn-red", "btn-outline", "btn-outline-black"];

const SIZES = ["btn-medium", "btn-large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return type === "link" ? (
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
    </a>
  );
};
