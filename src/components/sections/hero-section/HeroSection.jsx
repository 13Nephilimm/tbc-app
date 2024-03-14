import React from "react";
import "./hero-section.css";
import heroImg from "../../../assets/hero-image.png";
import starImg from "../../../assets/star.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="gradient-circle"></div>
      <img src={starImg} alt="star" className="star star-1" />
      <img src={starImg} alt="star" className="star star-2" />
      <div className="container">
        <div className="hero-container">
          <div className="text-box">
            <h1 className="hero-heading">
              Get More From <br></br> Your Money
            </h1>
            <p className="hero-description">
              Discover the power of our secure and rewarding credit cards.
              Explore our range of credit cards and take control of your
              finances today.
            </p>
            <button className="main-button">Get Started &rarr;</button>
          </div>
          <div className="hero-img-box">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
