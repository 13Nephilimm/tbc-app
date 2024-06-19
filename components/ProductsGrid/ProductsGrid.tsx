import React, { useEffect, useState } from "react";
import "./ProductsGrid.css";
import { MdSearch } from "react-icons/md";
import Card from "../Card/Card";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Cart from "../Cart/Cart";

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
}

export interface Props {
  products: Product[];
}

const ProductsGrid: React.FC<Props> = ({ products }) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>("");
  const [sorted, setSorted] = useState<boolean>(false);

  const allProducts: Product[] = products.filter((product) => {
    return search.toLowerCase() === ""
      ? product
      : product.title.toLowerCase().includes(search.toLowerCase());
  });

  const sortedProducts: Product[] = sorted
    ? [...allProducts].sort((a, b) => a.title.localeCompare(b.title))
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
        <Cart />
        <button className="secondary-btn sort-btn" onClick={toggleSort}>
          {t("sort")}
        </button>
      </div>
      <div className="products-grid">
        {sortedProducts.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.id}`}>
                <Card product={product} btnText={t("addToCart")} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsGrid;
