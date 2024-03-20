import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo-box">
          <h1 className="logo">PurpleStore</h1>
        </div>
        <div className="links-box">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <Link to="#" className="link">
            Services
          </Link>
          <Link to="#" className="link">
            FAQs
          </Link>
        </div>
        <button className="secondary-btn">Sign Up</button>
      </nav>
    </header>
  );
};

export default Navbar;
