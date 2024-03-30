import React from "react";
import "./home.css";
import Layout from "../../components/Layout/Layout";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import products from "../../productsData";

const Home = () => {
  return (
    <Layout>
      <ProductsGrid products={products} />
    </Layout>
  );
};

export default Home;
