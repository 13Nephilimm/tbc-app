import React, { useState } from "react";
import "./CartItem.css";
import { getToken, setCartTotalCookie } from "../../utils/actions";
import Image from "next/image";

const CartItem = ({ product, deleteCartItem }: any) => {
  const [quantity, setQuantity] = useState(product.quantity);

  async function changeQuantity(cart_id: number, method: "inc" | "dec") {
    if (method === "inc") {
      setQuantity(quantity + 1);
    }
    if (method === "dec") {
      setQuantity((prevState: any) => {
        if (prevState === 1) {
          deleteCartItem(cart_id);
        }
        return prevState - 1;
      });
    }

    const token: any = await getToken();
    const result = await fetch("api/cart", {
      method: "PATCH",
      body: JSON.stringify({ id: cart_id, method: method }),
      headers: {
        Authorization: `${token.value}`,
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();

    setCartTotalCookie(data.data);
  }

  console.log(product);
  return (
    <div className="checkout-products">
      <Image
        className="cart-image"
        alt="cart-image"
        width={100}
        height={100}
        src={product.thumbnail}
      />{" "}
      <span>{product.title}</span>
      <span>Count: {quantity}</span>
      <button
        className="main-btn increment-button"
        onClick={() => {
          changeQuantity(product.cart_id, "inc");
        }}
      >
        +
      </button>
      <button
        className="main-btn decrement-button"
        onClick={() => {
          changeQuantity(product.cart_id, "dec");
        }}
      >
        -
      </button>
    </div>
  );
};

export default CartItem;
