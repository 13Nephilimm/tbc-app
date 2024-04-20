import React from "react";
import "./BlogCard.css";
import Image from "next/image";
import img from "../../public/blog-1.jpg";
import { useTranslation } from "react-i18next";

const BlogCard = ({ name, description, date }) => {
  const { t } = useTranslation();

  return (
    <div className="blog-card">
      <div className="blog-featured-image">
        <Image src={img} alt="featured" />
      </div>
      <div className="blog-card-text">
        <span className="blog-date">{date}</span>
        <h2 className="blog-heading">{name}</h2>
        <p className="blog-description">{description}</p>
        <button className="secondary-btn btn-more">{t("seeMore")}</button>
      </div>
    </div>
  );
};

export default BlogCard;
