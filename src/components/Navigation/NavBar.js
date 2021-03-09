import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll.js";

const navLinks = [
  { title: "home", path: "/" },
  { title: "about us", path: "/about" },
  { title: "our work", path: "/ourwork" },
  { title: "support us", path: "/supportus" },
];

const useStyles = makeStyles({
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
  },
  navbarLogoContainer: {
    justifySelf: "start",
    marginLeft: "20px",
    cursor: "pointer",
  },
  navbarLogo: {
    transition: "0.3s ease-out",
    height: "80px",
    "&:hover": { transform: "scale(1.1)" },
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Container maxWidth="xl" className={classes.navContainer}>
            <Link to="/" className={classes.navbarLogoContainer}>
              <img
                src={require("../../Assets/img/VKLogoWhite.png")}
                alt="Victory Kitchen"
                className={classes.navbarLogo}
              ></img>
            </Link>
            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path }) => (
                  <Link to={path} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title}></ListItemText>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
