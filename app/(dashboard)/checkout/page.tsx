"use client";

import React, { useEffect, useState } from "react";
import "./checkout.css";
import Layout from "../../../components/Layout/Layout";
import { getToken, setCartTotalCookie } from "../../../utils/actions";
import CartItem from "../../../components/CartItem/CartItem";
import { useTranslation } from "react-i18next";

interface CartItem {
  id: number;
  count: number;
}

const CheckoutPage: React.FC = () => {
  const { t } = useTranslation();
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    getToken().then((token) => {
      fetch("api/cart", {
        method: "GET",
        headers: {
          Authorization: `${token?.value}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res: any) => {
          setCartItem(res.data);
        });
    });
  }, []);

  console.log(cartItem); // AQEDAN MOMAQVS YVELA INFO PRODUCTIS

  function deleteCartItem(id: number) {
    setCartItem([
      ...cartItem.filter((item: { id: number }) => {
        return item.id !== id;
      }),
    ]);
  }

  function resetCart() {
    setCartItem([]);
    getToken().then((token) => {
      fetch("api/cart", {
        method: "DELETE",
        headers: {
          Authorization: `${token?.value}`,
        },
      }).then(() => {
        setCartTotalCookie(0);
      });
    });
  }

  return (
    <Layout>
      <h1 className="checkout-heading">
        <b>{t("C")}</b>
        {t("art")}
      </h1>
      <div className="checkout-container">
        <button
          onClick={() => {
            resetCart();
          }}
          className="main-btn"
        >
          Reset Cart
        </button>

        {cartItem?.map((product: any) => (
          <CartItem
            key={product.id}
            product={product}
            deleteCartItem={deleteCartItem}
          />
        ))}
      </div>
    </Layout>
  );
};

export default CheckoutPage;
