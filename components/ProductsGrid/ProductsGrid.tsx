import React, { useEffect, useReducer, useState } from "react";
import "./ProductsGrid.css";
import { MdSearch } from "react-icons/md";
import Card from "../Card/Card";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Cart from "../Cart/Cart";
import { useLocalStorage } from "../../hooks";

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

  // ADD TO CART
  interface SelectedProduct {
    id: number;
    product: Product;
    count: number;
  }

  const initialState: SelectedProduct[] = [];

  type Action =
    | { type: "INCREMENT"; payload: number }
    | { type: "DECREMENT"; payload: number }
    | { type: "RESET" }
    | { type: "UPDATE"; payload: SelectedProduct[] };

  function reducer(
    state: SelectedProduct[],
    action: Action
  ): SelectedProduct[] {
    switch (action.type) {
      case "INCREMENT": {
        const selectedProductIdx = state.findIndex(
          (p) => p.id === action.payload
        );
        if (selectedProductIdx === -1) {
          return [
            ...state,
            {
              id: action.payload,
              product: products.find((p) => p.id === action.payload)!,
              count: 1,
            },
          ];
        }
        const clone = [...state];
        const selectedProduct = clone[selectedProductIdx];
        const updatedSelectedProduct = {
          ...selectedProduct,
          count: selectedProduct.count + 1,
        };
        clone[selectedProductIdx] = updatedSelectedProduct;
        return clone;
      }
      case "DECREMENT": {
        const selectedProductIdx = state.findIndex(
          (p) => p.id === action.payload
        );
        if (selectedProductIdx === -1) {
          return state;
        }
        const clone = [...state];
        const selectedProduct = clone[selectedProductIdx];
        if (selectedProduct.count === 1) {
          clone.splice(selectedProductIdx, 1);
        } else {
          const updatedSelectedProduct = {
            ...selectedProduct,
            count: selectedProduct.count - 1,
          };
          clone[selectedProductIdx] = updatedSelectedProduct;
        }
        return clone;
      }
      case "RESET":
        return initialState;
      case "UPDATE":
        return action.payload;
      default:
        return state;
    }
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [value, setCachedValue] = useLocalStorage(
    "selectedProducts",
    initialState
  );
  const [selectedProducts, dispatch] = useReducer<
    React.Reducer<SelectedProduct[], Action>
  >(reducer, value);

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);

  const handleClick = (product: Product) => {
    dispatch({ type: "INCREMENT", payload: product.id });
  };

  const selectedNumber = selectedProducts.reduce(
    (acc: number, curr: SelectedProduct) => {
      return acc + curr.count;
    },
    0
  );

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
        <Cart selectedNumber={selectedNumber} isClient={isClient} />
        <button className="secondary-btn sort-btn" onClick={toggleSort}>
          {t("sort")}
        </button>
      </div>
      <div className="products-grid">
        {sortedProducts.map((product) => {
          return (
            <div key={product.id}>
              <Card
                product={product}
                btnText={t("addToCart")}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsGrid;
