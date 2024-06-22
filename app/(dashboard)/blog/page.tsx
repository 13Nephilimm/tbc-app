"use client";

import "./blog.css";
import Layout from "../../../components/Layout/Layout";
import BlogCard from "../../../components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Blog {
  id: number;
  title: string;
  body: string;
  image: string;
}

const Blog = () => {
  const { t } = useTranslation();

  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/all-blogs");
        const { data: nestedBlogs }: { data: Blog[] } = await response.json();
        setBlogs(nestedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <h1 className="blog-main-heading">
        <b>{t("b")}</b>
        {t("log")}
      </h1>
      <div className="blog-container">
        {blogs.map((blog) => {
          return (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard name={blog.title} image={blog.image} />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Blog;
