import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fff",
      margin: "0 0 0 10px",
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
});

export default useStyles;
