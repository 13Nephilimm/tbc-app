import React from "react";
import "./Card.css";
import Image from "next/image";

const Card = ({ image, name, description, btnText }) => {
  return (
    <div className="card">
      <div className="featured-image">
        <Image src={image} alt="featured" width={200} height={200} />
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
