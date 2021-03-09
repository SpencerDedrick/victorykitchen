import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Hidden } from "@material-ui/core";
import Landing from "../Landing";
import TabPanel from "../TabPanel";
import LandingAccordion from "../LandingAccordion";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "200vh",
    backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.4)
      ),url(${require("../../Assets/img/landing1.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tabPanelBox: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

export default function Home2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Landing></Landing>
      <Box className={classes.tabPanelBox} id="tabsPanel">
        <Hidden smDown>
          <TabPanel id="section" />
        </Hidden>
        <Hidden mdUp>
          <LandingAccordion></LandingAccordion>
        </Hidden>
      </Box>
    </div>
  );
}
