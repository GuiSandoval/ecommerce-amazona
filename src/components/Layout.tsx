import type { NextPage } from "next";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import useStyles from "../utils/styles";

interface IPropsLayout {
  children: React.ReactNode;
}

const Layout: NextPage<IPropsLayout> = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children ?? ""}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazona</Typography>
      </footer>
    </div>
  );
};

export default Layout;
