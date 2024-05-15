"use client";

import React, { useEffect } from "react";
import "./checkout.css";
import Layout from "../../../components/Layout/Layout";
import { useLocalStorage } from "../../../hooks";

interface CartItem {
  id: number;
  count: number;
}

interface Props {
  products: CartItem[];
  dispatch?: React.Dispatch<any>;
}

const CheckoutPage: React.FC<Props> = ({ products, dispatch }) => {
  const [cartItems, setCartItems] = useLocalStorage(
    "selectedProducts",
    products
  );

  const handleQuantityChange = (id: number, diff: number) => {
    const updatedCartItems = cartItems.map((item: CartItem) => {
      if (item.id === id) {
        return { ...item, count: item.count + diff };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleReset = () => {
    if (dispatch) {
      dispatch({ type: "RESET" });
    }
    setCartItems([]);
  };

  useEffect(() => {
    if (dispatch) {
      dispatch({ type: "UPDATE", payload: cartItems });
    }
  }, [dispatch, cartItems]);

  const visibleCartItems = cartItems.filter((item: CartItem) => item.count > 0);

  return (
    <Layout>
      <h1 className="checkout-heading">Checkout</h1>
      <div className="checkout-container">
        <button onClick={handleReset} className="secondary-btn">
          Reset Cart
        </button>
        {visibleCartItems.map(({ id, count }: any) => (
          <div className="checkout-products" key={id}>
            <span>ID: {id}</span> <span>Count: {count}</span>
            <button
              className="secondary-btn increment-button"
              onClick={() => handleQuantityChange(id, 1)}
            >
              +
            </button>
            <button
              className="secondary-btn decrement-button"
              onClick={() => handleQuantityChange(id, -1)}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CheckoutPage;
