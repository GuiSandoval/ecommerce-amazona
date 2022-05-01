/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  CardActionArea,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import type { NextPage } from "next";
import NextLink from "next/link";
import Layout from "../components/Layout";
import data from "../utils/data";

const Home: NextPage = () => (
  <Layout>
    <div>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.id}>
            <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </NextLink>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </Layout>
);

export default Home;
