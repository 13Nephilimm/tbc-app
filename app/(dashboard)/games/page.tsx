"use client";

import Layout from "../../../components/Layout/Layout";
import ProductsGrid from "../../../components/ProductsGrid/ProductsGrid";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-products");
        const { data: nestedProducts } = await response.json();
        setProducts(nestedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <ProductsGrid products={products} />
    </Layout>
  );
}
