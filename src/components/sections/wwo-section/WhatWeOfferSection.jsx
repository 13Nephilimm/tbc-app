import React from "react";
import "./wwo.css";
import starImg from "../../../assets/star.png";
import cards1 from "../../../assets/cards-1.png";
import cards2 from "../../../assets/cards-2.png";

const WhatWeOfferSection = () => {
  return (
    <section className="what-we-offer-section">
      <img src={starImg} alt="star" className="star star-6" />
      <img src={starImg} alt="star" className="star star-7" />
      <img src={starImg} alt="star" className="star star-8" />
      <img src={starImg} alt="star" className="star star-9" />
      <div className="container">
        <h2 className="what-we-offer-heading">What Do We Offer?</h2>
        <div className="what-we-offer-container">
          <div className="wwo-text-box">
            <h2 className="wwo-heading">
              Design your personalized <br></br> credit card.
            </h2>
            <p className="wwo-description">
              You have the freedom to personalize the design of your credit
              card, ensuring a truly unique experience that makes you feel
              extraordinary
            </p>
            <button className="main-button">Create New Card &rarr;</button>
          </div>
          <div className="wwo-img-box">
            <img src={cards1} alt="cards" />
          </div>
        </div>
        <div className="what-we-offer-container-2">
          <div className="wwo-img-box">
            <img src={cards2} alt="cards" />
          </div>
          <div className="wwo-text-box">
            <h2 className="wwo-heading">
              Find the Perfect Credit Card <br></br> for You
            </h2>
            <p className="wwo-description">
              Discover your ideal credit card with ease. Our comprehensive
              selection caters to every financial need and lifestyle. Whether
              you seek cashback rewards, travel perks, or building credit, we
              have the perfect credit card waiting for you. Unleash the
              possibilities and find the credit card that fits your unique goals
              and aspirations.
            </p>
            <button className="main-button">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
