import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-upper-container">
          <div className="privacy-box">
            <a href="#" className="privacy-heading">
              Privacy Policy
            </a>
          </div>
          <div className="terms-box">
            <a href="#" className="terms-heading">
              Terms And Conditions
            </a>
          </div>
          <form className="input-box">
            <input
              className="footer-email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Send us your message..."
              className="footer-message"
              required
            ></textarea>
            <button type="submit" className="secondary-btn">
              Send
            </button>
          </form>
        </div>
        <div className="footer-lower-container">
          <div className="footer-logo-box">
            <h1 className="logo">PurpleStore</h1>
          </div>
          <div className="copyright-box">
            <p>
              &copy; 2024 <br /> by PurpleStore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
