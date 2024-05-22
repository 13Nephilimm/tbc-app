import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { getCartTotalCookie } from "../../utils/actions";

export const revalidate = 0;

const Cart = () => {
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    getCartTotalCookie().then((res: any) => {
      setItemQuantity(res ? Number(res.value) : 0);
    });
  }, []);

  return (
    <Link href={"/checkout"}>
      <div className="cart-container">
        <span className="quantity">{itemQuantity}</span>
        <FaShoppingCart className="cart" />
      </div>
    </Link>
  );
};

export default Cart;
