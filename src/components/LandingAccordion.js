import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item>
              <img
                src={require("../Assets/img/photo1.jpg")}
                width="80%"
                className={classes.accordionImage}
              ></img>
            </Grid>
            <Grid item>
              <Typography>
                Our Mission is to help people overcome chronic or situational
                poverty by building lasting relationships and providing the most
                basic necessity of human life, food. My personal mission is to
                represent the character and love of Jesus to those around me. I
                believe good deeds create good will among those I come across
                and that in turn opens more doors for people to hear the good
                news of Christ than it closes.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.tabButton}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Vision</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item>
              <img
                src={require("../Assets/img/photo2.jpg")}
                width="80%"
                className={classes.accordionImage}
              ></img>
            </Grid>
            <Grid item>
              <Typography>
                Our Vision is to help people find victory in their lives. We do
                this by helping individuals meet their most basic needs while
                simultaneously collaborating with established organizations
                within the Katy area, and beyond. Through our work, we hope to
                encourage and promote holistic and sustainable solutions with
                the intent to break the cycle of chronic or situational
                poverty."
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.tabButton}
              >
                Get Involved
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
