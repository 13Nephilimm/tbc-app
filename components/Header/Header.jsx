import Link from "next/link";
import "./Header.css";
import { handleLogout } from "@/app/actions";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-box">
          <h1 className="logo">PurpleStore</h1>
        </div>
        <div className="links-box">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/contact" className="link">
            Contact
          </Link>
          <Link href="/blog" className="link">
            Blog
          </Link>
          <Link href="/profile" className="link">
            Profile
          </Link>
        </div>
        <button
          className="secondary-btn"
          onClick={async () => {
            await handleLogout();
          }}
        >
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default Header;
