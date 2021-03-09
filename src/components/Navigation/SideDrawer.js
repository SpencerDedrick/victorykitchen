import React, { useState, Fragment } from "react";

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black",
  },
});

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });

  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.list}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <Link to={path} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" style={{ color: "white" }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </Fragment>
  );
};
export default SideDrawer;
