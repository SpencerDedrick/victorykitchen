import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";
import Counter from "../../../components/Counter";

// @material-ui/icons
import KitchenIcon from "@material-ui/icons/Kitchen";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
          <h2 className={classes.title}>What We've Done</h2>
          <h5 className={classes.description}>
            We've worked with over 10 local non-profits and churches in the Katy
            area to bring Victory to the lives of those who need it most.
            Together with the help of our partners our goal is to bless 1000
            individuals by 2022. By 2025 we'd like to open a commercial kitchen
            that can both employ and serve the homeless community in Katy Texas.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Meals Served"
              icon={KitchenIcon}
              iconColor="info"
              vertical
            />
            <Counter number={2000} />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Friends Blessed"
              icon={PersonIcon}
              iconColor="success"
              vertical
            />
            <Counter number={600} />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Souls Saved"
              icon={FavoriteIcon}
              iconColor="danger"
              vertical
            />
            <Counter number={80} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
