"use client";

import React, { useEffect, useState } from "react";
import "./ProductsGrid.css";
import { MdSearch } from "react-icons/md";
import Card from "../Card/Card";

const ProductsGrid = ({ products }) => {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  const allProducts = products.filter((product) => {
    return search.toLowerCase() === ""
      ? product
      : product.name.toLowerCase().includes(search.toLowerCase());
  });

  const sortedProducts = sorted
    ? [...allProducts].sort((a, b) => a.name.localeCompare(b.name))
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
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="secondary-btn sort-btn" onClick={toggleSort}>
          Sort
        </button>
      </div>
      <div className="products-grid">
        {sortedProducts.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              btnText={"Add to Cart"}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsGrid;
