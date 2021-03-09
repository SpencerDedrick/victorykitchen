import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
/* import classNames from "classnames";
import Counter from "../../../components/Counter"; */

// @material-ui/icons

// core components
import GridContainer from "../../../components/GridContainer/GridContainer";
import GridItem from "../../../components/GridContainer/GridItem";

import Button from "../../../components/CustomButtons/Button";

import styles from "../../../Assets/Styles/pages/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Get Involved</h2>
          <h5 className={classes.description}>
            There are several different ways to get involved with Victory
            Kitchen. Click below to view our current and upcoming volunteer
            opportunities. Be a part of someone's story of Victory today!
          </h5>
        </GridItem>
        <GridItem>
          <Button color="primary">Learn More</Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
