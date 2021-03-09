import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1100px",
    maxHeight: "500px",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("lg")]: {},
  },
  blue: {
    margin: "auto",
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      margin: "auto",
    },
  },
  red: {
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  tabButton: {
    width: "200px",
    margin: "auto",
  },
  tabGrid: {
    width: "100%",
    margin: "auto",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Mission" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Vision" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <Fade in timeout={1500}>
          <Grid
            direction="row"
            id="section"
            container="true"
            spacing={5}
            className={classes.tabGrid}
          >
            <Grid item className={classes.blue}>
              <img
                src={require("../Assets/img/photo1.jpg")}
                width="100%"
                className={classes.tabImage}
                alt="..."
              ></img>
            </Grid>
            <Grid item className={classes.red}>
              <Typography variant="h5">
                Our Mission is to help people overcome chronic or situational
                poverty by building lasting relationships and providing the most
                basic necessity of human life, food. My personal mission is to
                represent the character and love of Jesus to those around me. I
                believe good deeds create good will among those I come across
                and that in turn opens more doors for people to hear the good
                news of Christ than it closes.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.tabButton}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Fade in timeout={1500}>
          <Grid
            direction="row"
            id="section"
            container="true"
            spacing={5}
            className={classes.tabGrid}
          >
            <Grid item className={classes.blue}>
              <img
                src={require("../Assets/img/photo2.jpg")}
                width="100%"
                alt="..."
              ></img>
            </Grid>
            <Grid item className={classes.red}>
              <Typography variant="h6">
                Our Vision is to help people find victory in their lives. We do
                this by helping individuals meet their most basic needs while
                simultaneously collaborating with established organizations
                within the Katy area, and beyond. Through our work, we hope to
                encourage and promote holistic and sustainable solutions with
                the intent to break the cycle of chronic or situational
                poverty."
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.tabButton}
              >
                Get Involved
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </TabPanel>
    </div>
  );
}
