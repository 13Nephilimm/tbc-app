import React from "react";
import "./loading.css";
import Layout from "../../components/Layout/Layout";

const loading = () => {
  return (
    <Layout>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </Layout>
  );
};

export default loading;
