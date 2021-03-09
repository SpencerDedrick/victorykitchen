import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    borderRadius: "20px",
    cursor: "default",
    maxWidth: "40%",
  },
  media: {
    height: 250,
    transition: "0.3s ease-out",
    "&:hover": { transform: "scale(1.05)" },
    cursor: "default",
  },
  cursorDefault: {
    cursor: "default",
  },
  textBox: {
    height: 75,
  },
});

export default function ImageCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.cardImage}
          title="Victory in Action"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.cardTitle}
          </Typography>
          <Typography
            className={classes.textBox}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          {props.cardButtonText}
        </Button>
      </CardActions>
    </Card>
  );
}
