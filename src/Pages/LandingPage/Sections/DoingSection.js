import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons

import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import BathtubIcon from "@material-ui/icons/Bathtub";
// core components
import GridContainer from "../../../components/GridContainer/GridContainer";
import GridItem from "../../../components/GridContainer/GridItem";

import NavPills from "../../../components/NavPills/NavPills";

import styles from "../../../Assets/Styles/pages/landingPageSections/profileStyle";

// Image imports

import suppers3 from "../../../Assets/img/Photo13.jpeg";
import suppers4 from "../../../Assets/img/photo12.jpeg";
import suppers2 from "../../../Assets/img/Photo21.jpg";
import suppers1 from "../../../Assets/img/Photo14.jpeg";
import tacos1 from "../../../Assets/img/photo3.jpg";
import tacos2 from "../../../Assets/img/Photo16.jpeg";
import tacos3 from "../../../Assets/img/about1.jpg";
import bible1 from "../../../Assets/img/photo4.jpg";
import bible2 from "../../../Assets/img/photo6.jpg";
import bible3 from "../../../Assets/img/photo7.jpg";
import bible4 from "../../../Assets/img/photo11.jpg";

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const classes = useStyles();
  /*   const { ...rest } = props; */
  /*   const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  ); */
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What We're Doing</h2>
          <h5 className={classes.description}>
            Victory Kitchen works to empower those affected by chronic
            homelessness. We currently have several different programs that aims
            to achieve this goal. These programs include.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Suppers & Showers",
                  tabIcon: BathtubIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={12}>
                        <p className={classes.description}>
                          Hot meals and an opportunity to shower for our
                          homeless friends.
                        </p>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={suppers1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={suppers2}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={suppers3}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={suppers4}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Prayer & Tacos",
                  tabIcon: FastfoodIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={12}>
                        <p className={classes.description}>
                          Street ministry aimed to build trust in the community.
                        </p>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={tacos1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={tacos2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={tacos3}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Bible Study",
                  tabIcon: ImportContactsIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={12}>
                        <p className={classes.description}>
                          Encouragement and positive motiviation through the
                          Lords Word.
                        </p>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={bible1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={bible2}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={bible3}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={bible4}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
