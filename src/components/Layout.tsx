import type { NextPage } from "next";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

interface IPropsLayout {
  children: React.ReactNode;
}

const Layout: NextPage<IPropsLayout> = ({ children }) => (
  <div>
    <Head>
      <title>Next Amazona</title>
    </Head>
    <AppBar position="static">
      <Toolbar>
        <Typography>Amazona</Typography>
      </Toolbar>
    </AppBar>
    <Container>{children ?? ""}</Container>
    <footer>
      <Typography>All rights reserved. Next Amazona</Typography>
    </footer>
  </div>
);

export default Layout;
