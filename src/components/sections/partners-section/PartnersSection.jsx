import React from "react";
import "./partners-section.css";
import starImg from "../../../assets/star.png";
import partner1 from "../../../assets/upwork.svg";
import partner2 from "../../../assets/petal.svg";
import partner3 from "../../../assets/the new york times.svg";
import partner4 from "../../../assets/rakuten.svg";
import partner5 from "../../../assets/vice.svg";
import partner6 from "../../../assets/dell.svg";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <img src={starImg} alt="star" className="star star-3" />
      <img src={starImg} alt="star" className="star star-4" />
      <img src={starImg} alt="star" className="star star-5" />
      <div className="container">
        <div className="partners-container">
          <div className="info-tab">
            <h2 className="info-heading">16y</h2>
            <h3 className="info-subheading">Experience</h3>
          </div>
          <div className="info-tab">
            <h2 className="info-heading">250+</h2>
            <h3 className="info-subheading">Merchant Partner</h3>
          </div>
          <div className="info-tab">
            <h2 className="info-heading">18+</h2>
            <h3 className="info-subheading">Years Experience</h3>
          </div>
          <div className="info-tab">
            <h2 className="info-heading">10.2k+</h2>
            <h3 className="info-subheading">Worldwide Clients</h3>
          </div>
        </div>
        <div className="partners">
          <img src={partner1} alt="partner" className="partner-img" />
          <img src={partner2} alt="partner" className="partner-img" />
          <img src={partner3} alt="partner" className="partner-img" />
          <img src={partner4} alt="partner" className="partner-img" />
          <img src={partner5} alt="partner" className="partner-img" />
          <img src={partner6} alt="partner" className="partner-img" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
