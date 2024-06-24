"use client";

import React from "react";
import { toast } from "react-toastify";
import { setCartTotalCookie } from "../../utils/actions";
import { useLocalStorage } from "../../hooks";

const AddToCart = (product: any) => {
  const [_, setCartStorage] = useLocalStorage("cartTotal", "0");

  const addProduct = async () => {
    toast.info("adding...");
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id: product.product.id }),
    });
    const data = await response.json();
    await setCartTotalCookie(data.quantity);
    toast.success("Added to your cart");
    setCartStorage(data.quantity);
  };

  return (
    <button
      onClick={() => {
        addProduct();
      }}
      className="main-btn single-product-btn"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
