import React from "react";
import "./single-blog.css";
import img from "@/public/blog-1.jpg";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/posts`);
  const posts = await res.json();
  return posts.posts.map((item) => ({
    id: String(item.id),
  }));
}

async function fetchPosts(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const posts = await res.json();
  return posts;
}

const Page = async ({ params }) => {
  const { id } = params;
  const posts = await fetchPosts(id);

  return (
    <Layout>
      <div className="single-blog-container">
        <h1 className="single-blog-title">{posts.title}</h1>;
        <Image src={img} alt="post" className="single-blog-image" />
        <p className="single-blog-body">{posts.body}</p>
      </div>
    </Layout>
  );
};

export default Page;
