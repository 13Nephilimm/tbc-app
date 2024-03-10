import React from "react";
import "./navbar.css";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo-box">
          <img src={logoImg} alt="logo" />
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
