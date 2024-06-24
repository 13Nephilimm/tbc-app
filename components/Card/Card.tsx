import React from "react";
import "./Card.css";
import Image from "next/image";
import { Product } from "../ProductsGrid/ProductsGrid";
import { setCartTotalCookie } from "../../utils/actions";
import { useLocalStorage } from "../../hooks";
import Link from "next/link";
import { toast } from "react-toastify";

interface CardProps {
  btnText: string;
  product: Product;
  imageLink: any;
}

const Card: React.FC<CardProps> = ({ btnText, product, imageLink }) => {
  const [_, setCartStorage] = useLocalStorage("cartTotal", "0");

  const addProduct = async () => {
    toast.info("adding...");
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id: product.id }),
    });
    const data = await response.json();
    await setCartTotalCookie(data.quantity);
    toast.success("Added to your cart");
    setCartStorage(data.quantity);
  };

  console.log(imageLink);

  return (
    <>
      <div className="card">
        <Link href={`/products/${product.id}`} className="image-link">
          <div className="featured-image">
            <Image
              src={product.thumbnail}
              alt="featured"
              width={175}
              height={250}
            />
          </div>
        </Link>
        <div className="card-text">
          <Link href={`/products/${product.id}`} className="image-link">
            <h2 className="product-name">{product.title}</h2>
            <p className="product-price">${product.price}</p>
          </Link>
          <button
            className="main-btn btn-buy"
            onClick={() => {
              addProduct();
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
