import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "../../components/Footer/Footer";

// @material-ui/icons

// core components
import GridContainer from "../../components/GridContainer/GridContainer";
import GridItem from "../../components/GridContainer/GridItem";
import Button from "../../components/CustomButtons/Button";
import Parallax from "../../components/Parallax/Parallax";

import styles from "../../Assets/Styles/pages/landingPage";

import DoneSection from "./Sections/ProductSections";

import AboutSection from "./Sections/AboutSection";
import DoingSection from "./Sections/DoingSection";
import GoingSection from "./Sections/GoingSection";
import GetInvolvedSection from "./Sections/GetInvolvedSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter image={require("../../Assets/img/landing2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Victory Starts Here</h1>
              <h3>
                “The King will reply, ‘Truly I tell you, whatever you did for
                one of the least of these brothers and sisters of mine, you did
                for me."
              </h3>
              <h4>-Matthew 25:40</h4>
              <br />
              <Link to="landingAnchor" smooth={true} duration={1000}>
                <Button color="primary">
                  <ExpandMoreIcon></ExpandMoreIcon>
                  Learn More
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div
        className={classNames(classes.main, classes.mainRaised)}
        id="landingAnchor"
      >
        <div className={classes.container}>
          <AboutSection />
          <DoneSection />
          <DoingSection />
          <GoingSection />
          <GetInvolvedSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
