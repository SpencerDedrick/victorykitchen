import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a02c2c",
    },
    secondary: {
      main: "#fffff7",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
