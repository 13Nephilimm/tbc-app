import React from "react";
import "./blog-page.css";
import Layout from "../../components/Layout/Layout";
import blogs from "../../blogData";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogPage = () => {
  return (
    <Layout>
      <h1 className="main-heading">Blog</h1>
      <div className="blog-container">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              name={blog.name}
              description={blog.description}
              image={blog.image}
              date={blog.date}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogPage;
