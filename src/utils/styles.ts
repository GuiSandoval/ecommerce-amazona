import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fff",
      margin: "0 0 0 10px",
    },
  },
  brand: {
    fontWeight: "bold",
    fonSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    margin: "10px 0 0 0",
    textAlign: "center",
  },
  section: {
    margin: "10px 0",
  },
});

export default useStyles;
