import React from "react";
import "./Card.css";
import Image from "next/image";
import { Product } from "../ProductsGrid/ProductsGrid";
import { setCartTotalCookie } from "../../utils/actions";

interface CardProps {
  btnText: string;
  product: Product;
}

const Card: React.FC<CardProps> = ({ btnText, product }) => {
  const addProduct = async () => {
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id: product.id }),
    });
    const data = await response.json();
    await setCartTotalCookie(data.quantity);
  };

  return (
    <div className="card">
      <div className="featured-image">
        <Image
          src={product.thumbnail}
          alt="featured"
          width={200}
          height={200}
        />
      </div>
      <div className="card-text">
        <h2 className="product-name">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <button
          className="secondary-btn btn-buy"
          onClick={() => {
            addProduct();
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
