import React from "react";
import "./card.css";

const Card = ({ image, name, description, btnText }) => {
  return (
    <div className="card">
      <div className="featured-image">
        <img src={image} alt="featured" />
      </div>
      <div className="card-text">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <button className="secondary-btn btn-buy">{btnText}</button>
      </div>
    </div>
  );
};

export default Card;
