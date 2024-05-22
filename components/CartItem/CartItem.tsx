import React, { useState } from "react";
import "./CartItem.css";
import { getToken, setCartTotalCookie } from "../../utils/actions";

const CartItem = ({ product, deleteCartItem }: any) => {
  const [quantity, setQuantity] = useState(product.quantity);

  async function changeQuantity(id: number, method: "inc" | "dec") {
    if (method === "inc") {
      setQuantity(quantity + 1);
    }
    if (method === "dec") {
      setQuantity((prevState: any) => {
        if (prevState === 1) {
          deleteCartItem(id);
        }
        return prevState - 1;
      });
    }

    const token: any = await getToken();
    const result = await fetch("api/cart", {
      method: "PATCH",
      body: JSON.stringify({ id: id, method: method }),
      headers: {
        Authorization: `${token.value}`,
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();

    setCartTotalCookie(data.data);
  }

  return (
    <div className="checkout-products">
      <span>ID: {product.id}</span> <span>Count: {quantity}</span>
      <button
        className="secondary-btn increment-button"
        onClick={() => {
          changeQuantity(product.id, "inc");
        }}
      >
        +
      </button>
      <button
        className="secondary-btn decrement-button"
        onClick={() => {
          changeQuantity(product.id, "dec");
        }}
      >
        -
      </button>
    </div>
  );
};

export default CartItem;
