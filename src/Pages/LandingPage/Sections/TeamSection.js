import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/GridContainer/GridContainer";
import GridItem from "../../../components/GridContainer/GridItem";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";

import styles from "../../../Assets/Styles/pages/landingPageSections/teamStyles";

import about1 from "../../../Assets/img/about1.jpg";
import about2 from "../../../Assets/img/photo1.jpg";
import about3 from "../../../Assets/img/photo7.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>What We're All About</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={about1} alt="..." className={imageClasses} />
              </GridItem>
              <h2 className={classes.cardTitle}>
                Mission
                <br />
              </h2>
              <CardBody>
                <p className={classes.description}>
                  Our Mission is to help people overcome chronic or situational
                  poverty and find victory in their lives. We do this by
                  building lasting relationships and providing the most basic
                  necessity of human life, food.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={about2} alt="..." className={imageClasses} />
              </GridItem>
              <h2 className={classes.cardTitle}>
                Vision
                <br />
              </h2>
              <CardBody>
                <p className={classes.description}>
                  Our Vision is see God's victory in the Katy, TX area. We do
                  this by helping individuals meet their most basic needs while
                  simultaneously collaborating with established organizations
                  within the Katy area, and beyond.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={about3} alt="..." className={imageClasses} />
              </GridItem>
              <h2 className={classes.cardTitle}>
                Victory
                <br />
              </h2>
              <CardBody>
                <p className={classes.description}>
                  "For the LORD your God is the one who goes with you to fight
                  for you against your enemies to give you VICTORY ."
                </p>
                <br />
                <p>-Deuteronomy 20:4</p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
