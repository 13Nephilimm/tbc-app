import React, { useEffect, useState } from "react";
import "./ProductsGrid.css";
import { MdSearch } from "react-icons/md";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import Toast from "../Toast/Toast";

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  releaseYear: number; // Added release year
}

export interface Props {
  products: Product[];
}

const ProductsGrid: React.FC<Props> = ({ products }) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const allProducts: Product[] = products.filter((product) => {
    return search.toLowerCase() === ""
      ? product
      : product.title.toLowerCase().includes(search.toLowerCase());
  });

  const sortedProducts: Product[] = [...allProducts].sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "releaseYear") {
      return a.releaseYear - b.releaseYear;
    } else {
      return 0;
    }
  });

  const handleSort = (criteria: string) => {
    setSortBy(criteria);
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
      <Toast />
      <h1 className="games-heading">
        <b>{t("a")}</b>
        {t("ll")}
        <b>{t("g")}</b>
        {t("ame")}
      </h1>
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
        <h3 className="sort-by">{t("sortBy")}</h3>
        <div className="sorting-btns">
          <button className="sort-btn" onClick={() => handleSort("name")}>
            {t("name")}
          </button>
          <button className="sort-btn" onClick={() => handleSort("price")}>
            {t("price")}
          </button>
          <button
            className="sort-btn"
            onClick={() => handleSort("releaseYear")}
          >
            {t("releaseYear")}
          </button>
        </div>
      </div>
      <div className="products-grid">
        {sortedProducts.map((product) => {
          return (
            <div key={product.id}>
              <Card
                product={product}
                btnText={t("addToCart")}
                imageLink={`/products/${product.id}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsGrid;
