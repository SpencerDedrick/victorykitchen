import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const variants = []

function Buttons({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className=>{children}</Button>
    </div>
  );
}

export default Buttons;
