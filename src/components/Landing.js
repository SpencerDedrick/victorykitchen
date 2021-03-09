import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    maxWidth: "700px",
  },
  goDown: {
    fontSize: "7rem",
  },
  landingText: {
    maxWidth: "62ch",
    width: "80%",
  },
}));

export default function Home2() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  });

  return (
    <div className={classes.container}>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.container}>
          <img
            src={require("../Assets/img/VKWhite.png")}
            alt=""
            className={classes.logo}
          ></img>
          <Typography
            color="secondary"
            variant="h5"
            className={classes.landingText}
          >
            “The King will reply, ‘Truly I tell you, whatever you did for one of
            the least of these brothers and sisters of mine, you did for me."
          </Typography>
          <Typography
            color="secondary"
            variant="h5"
            className={classes.landingText}
            align="center"
          >
            -Matthew 25:40
          </Typography>
          <Link to="tabsPanel" smooth={true} duration={1000}>
            <IconButton size="small" styles="width: auto">
              <ExpandMoreIcon
                color="primary"
                className={classes.goDown}
              ></ExpandMoreIcon>
            </IconButton>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}
