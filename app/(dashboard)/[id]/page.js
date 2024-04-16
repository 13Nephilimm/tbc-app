"use client";

import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./single-product.css";

const SingleProductPage = ({ params }) => {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );
        const product = await response.json();
        setSingleProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="single-product-container">
        <h1 className="single-product-title">{singleProduct.title}</h1>;
        <Image
          src={singleProduct.thumbnail}
          alt="product"
          className="single-product-image"
          width={200}
          height={200}
        />
        <p className="single-product-price">Price: {singleProduct.price}$</p>
        <p className="single-product-description">
          {singleProduct.description}
        </p>
      </div>
    </Layout>
  );
};

export default SingleProductPage;
