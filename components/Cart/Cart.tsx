import React from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { Props } from "../ProductsGrid/ProductsGrid";
import Link from "next/link";

const Cart = ({ selectedNumber, isClient }: any) => {
  return (
    <Link href={"/checkout"}>
      <div className="cart-container">
        <span className="quantity">{isClient ? selectedNumber : 0}</span>
        <FaShoppingCart className="cart" />
      </div>
    </Link>
  );
};

export default Cart;
