import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import data from "../../utils/data";

const ProductScreen: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(
    (singleProduct) => singleProduct.slug === slug
  );

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductScreen;
