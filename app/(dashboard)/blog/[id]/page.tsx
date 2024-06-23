import React from "react";
import "./single-blog.css";
import Image from "next/image";
import Layout from "../../../../components/Layout/Layout";

interface SinglePost {
  id: string;
  title: string;
  body: string;
  image: string;
}

async function fetchPosts(id: string): Promise<SinglePost> {
  const res = await fetch(`${process.env.BASE_URL}/api/get-single-blog`, {
    method: "POST",
    body: JSON.stringify({ id }),
  });

  const posts = await res.json();
  return posts.data;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const posts = await fetchPosts(id);

  return (
    <Layout>
      <div className="single-blog-container">
        <h1 className="single-blog-title">{posts.title}</h1>;
        <Image
          src={posts.image}
          alt="post"
          className="single-blog-image"
          width={100}
          height={100}
        />
        <p className="single-blog-body">{posts.body}</p>
      </div>
    </Layout>
  );
};

export default Page;
