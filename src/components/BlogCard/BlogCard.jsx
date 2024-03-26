import React from "react";
import "./blog-card.css";

const BlogCard = ({ image, name, description, date }) => {
  return (
    <div className="blog-card">
      <div className="blog-featured-image">
        <img src={image} alt="featured" />
      </div>
      <div className="blog-card-text">
        <span className="blog-date">{date}</span>
        <h2 className="blog-heading">{name}</h2>
        <p className="blog-description">{description}</p>
        <button className="secondary-btn btn-more">See More</button>
      </div>
    </div>
  );
};

export default BlogCard;
