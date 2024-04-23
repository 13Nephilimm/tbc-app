"use client";

import "./blog.css";
import Layout from "../../../components/Layout/Layout";
import BlogCard from "../../../components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const { posts: nestedBlogs } = await response.json();
        setBlogs(nestedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <h1 className="main-heading">{t("blog")}</h1>
      <div className="blog-container">
        {blogs.map((blog) => {
          return (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard
                name={blog.title}
                description={blog.body}
                date={blog.date}
              />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Blog;
