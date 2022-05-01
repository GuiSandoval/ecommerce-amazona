/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import useStyles from "../utils/styles";

interface IPropsLayout {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: NextPage<IPropsLayout> = ({ title, description, children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow} />
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
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
