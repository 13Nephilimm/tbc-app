import React from "react";
import "./BlogCard.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface BlogCardProps {
  name: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ name, image }) => {
  const { t } = useTranslation();

  return (
    // <div className="blog-card">
    //   <div className="blog-featured-image">
    //     <Image src={image} alt="featured" width={100} height={100} />
    //   </div>
    //   <div className="blog-card-text">
    //     <h2 className="blog-heading">{name}</h2>
    //     <button className="secondary-btn btn-more">{t("seeMore")}</button>
    //   </div>
    // </div>
    <div className="blog-card">
      <button className="main-btn">{t("seeMore")}</button>
      <div className="blog-card-cover">
        <div className="blog-featured-image">
          <Image src={image} alt="featured" width={100} height={100} />
        </div>
        <div className="blog-card-text">
          <h2 className="blog-heading">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
