import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const STYLES = [
  "btn--light",
  "btn--dark",
  "btn--primary",
  "btn--outline-light",
  "btn--outline-dark",
  "btn--outline-primary",
];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

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
    : STYLES[2];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return type === "link" ? (
    <Link to={path}>
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
