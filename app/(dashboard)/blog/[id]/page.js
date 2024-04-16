"use client";

import Layout from "@/components/Layout/Layout";
import React from "react";
import "./single-blog.css";
import { useEffect, useState } from "react";
import img from "../../../public/blog-1.jpg";
import Image from "next/image";

const page = ({ params }) => {
  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/posts/${params.id}`
        );
        const post = await response.json();
        setSingleBlog(post);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <div className="single-blog-container">
        <h1 className="single-blog-title">{singleBlog.title}</h1>;
        <Image src={img} alt="post" className="single-blog-image" />
        <p className="single-blog-body">{singleBlog.body}</p>
      </div>
    </Layout>
  );
};

export default page;
