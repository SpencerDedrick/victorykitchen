import { cardTitle, title } from "../../kit";
import imagesStyle from "../../../Styles/imageStyles";
import { primaryColor, lightColor, darkColor } from "../../kit";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    backgroundColor: lightColor,
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: primaryColor,
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle: {
    color: primaryColor,
  },
  smallTitle: {
    color: primaryColor,
  },
  description: {
    color: darkColor,
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  margin5: {
    margin: "5px",
  },
};

export default teamStyle;
