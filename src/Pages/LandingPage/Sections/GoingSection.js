import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
/* import classNames from "classnames";
import Counter from "../../../components/Counter"; */

// @material-ui/icons

import StarOutlineIcon from "@material-ui/icons/StarOutline";
// core components
import GridContainer from "../../../components/GridContainer/GridContainer";
import GridItem from "../../../components/GridContainer/GridItem";
import InfoArea from "../../../components/InfoArea/InfoArea";

import styles from "../../../Assets/Styles/pages/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Where We're Going</h2>
          <h5 className={classes.description}>
            Victory Kitchen is committed to bringing God's Victory to the Katy
            area. Our longterm goals and objectives are.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Accessible Nutrition"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Provide nutritious meal (lunch/dinner) to individuals and families
              experiencing food insecurity or homelessness
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Safe Practices"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Promote best practice food work (food safety)
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Social Services"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Facilitate access to social services to help with urgent needs
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Raise Awareness"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Raise awareness of hunger, and chronic and situational
              homelessness
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Community Engagement"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Engage volunteers/community in meeting needs and creating
              solutions that can be implanted to decrease/end cycle of poverty
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Financial Stability"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Acquire startup funds through private, corporate, government,
              community, church support
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Permenant Facility"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Establish facility of operation/location that is accessible to
              target population.
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Employment Opportunities"
              icon={StarOutlineIcon}
              iconColor="primary"
              vertical
            />{" "}
            <p className={classes.description}>
              Go from volunteer run nonprofit to providing jobs for those in
              desperate need of employment or considered “un-hireable” elsewhere
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
