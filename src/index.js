import React from "react";
import ReactDOM from "react-dom";
import theme from "./APPTHEME";
import { ThemeProvider } from "@material-ui/core";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
