import React from "react";
import "./single-blog.css";
import img from "../../../../public/blog-1.jpg";
import Image from "next/image";
import Layout from "../../../../components/Layout/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface SinglePost {
  title: string;
  body: string;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const res = await fetch(`https://dummyjson.com/posts`);
  const posts = await res.json();
  return posts.posts.map((item: Post) => ({
    id: String(item.id),
  }));
}

async function fetchPosts(id: string): Promise<SinglePost> {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const posts = await res.json();
  return posts;
}

const Page = async ({ params }: { params: { id: string } }) => {
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
