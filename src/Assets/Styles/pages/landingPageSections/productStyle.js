import { darkColor, primaryColor, title } from "../../kit";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: primaryColor,
  },
  description: {
    color: "#999",
    darkColor: darkColor,
  },
};

export default productStyle;
