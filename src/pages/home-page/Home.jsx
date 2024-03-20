import React from "react";
import "./home.css";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";

const Home = () => {
  return (
    <Layout>
      <SearchBar />
      <ProductsGrid />
    </Layout>
  );
};

export default Home;
