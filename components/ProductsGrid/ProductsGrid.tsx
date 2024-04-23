"use client";

import React, { useEffect, useState } from "react";
import "./ProductsGrid.css";
import { MdSearch } from "react-icons/md";
import Card from "../Card/Card";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProductsGrid = ({ products }) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  const allProducts = products.filter((product) => {
    return search.toLowerCase() === ""
      ? product
      : product.title.toLowerCase().includes(search.toLowerCase());
  });

  const sortedProducts = sorted
    ? [...allProducts].sort((a, b) => a.title.localeCompare(b.name))
    : allProducts;

  const toggleSort = () => {
    setSorted(!sorted);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Search term:", search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <>
      <div className="search-section">
        <div className="search-container">
          <MdSearch size="3.6rem" className="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="secondary-btn sort-btn" onClick={toggleSort}>
          {t("sort")}
        </button>
      </div>
      <div className="products-grid">
        {sortedProducts.map((product) => {
          return (
            <Link href={`/products/${product.id}`} key={product.id}>
              <Card
                image={product.thumbnail}
                name={product.title}
                description={product.description}
                btnText={t("addToCart")}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductsGrid;
