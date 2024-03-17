import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo-box">
          <h1 className="logo">PurpleStore</h1>
        </div>
        <div className="links-box">
          <a href="#" className="link">
            Home
          </a>
          <a href="#" className="link">
            Why Us
          </a>
          <a href="#" className="link">
            Services
          </a>
          <a href="#" className="link">
            FAQs
          </a>
        </div>
        <button className="secondary-btn">Sign Up</button>
      </nav>
    </header>
  );
};

export default Navbar;
