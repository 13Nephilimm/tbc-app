import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export const revalidate = 0;

const Cart = () => {
  return (
    <Link href={"/checkout"}>
      <div className="cart-container">
        <FaShoppingCart className="cart" />
      </div>
    </Link>
  );
};

export default Cart;
