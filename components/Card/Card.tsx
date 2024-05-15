import React from "react";
import "./Card.css";
import Image from "next/image";
import { Product } from "../ProductsGrid/ProductsGrid";

interface CardProps {
  btnText: string;
  handleClick: (product: Product) => void;
  product: Product;
}

const Card: React.FC<CardProps> = ({ btnText, handleClick, product }) => {
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
            handleClick(product);
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
