"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./new-post.css";
import Layout from "../../../components/Layout/Layout";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { getUserRole } from "../../../utils/actions";
import { useRouter } from "next/navigation";

const NewPostPage = () => {
  const { t } = useTranslation();

  const [post, setPost] = useState<any>({
    title: "",
    body: "",
    image: "",
  });

  const [image, setImage] = useState<any>({});

  const imageRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0].name) {
      setImage(imageRef.current!.files![0]);

      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          setPost({ ...post, image: e.target.result });
        }
      };
      reader.readAsDataURL(e.target.files![0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (image.name) {
      const uploadedImage = await fetch(
        `api/post-image-upload?filename=${image.name}`,
        {
          method: "POST",
          body: image,
        }
      );
      const finalImage = await uploadedImage.json();
      setPost({ ...post, image: finalImage.url });

      await fetch(`api/blog-upload`, {
        method: "POST",
        body: JSON.stringify(post),
      });
    }
  };

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getUserRole().then((res) => {
      console.log(res);
      if (res === "admin") {
        setLoading(false);
      } else {
        router.push("/");
      }
    });
  }, [router]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <Layout>
      <h1 className="admin-page-heading">
        <b>{t("n")}</b>
        {t("ewPost")}
      </h1>
      <form className="upload" onSubmit={handleSubmit}>
        <label className="upload-label">{t("title")}</label>
        <input
          type="text"
          value={post.title}
          className="upload-input"
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
          required
        />
        <label className="upload-label">{t("body")}</label>
        <textarea
          className="upload-input"
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
          value={post.body}
          required
        />
        <label className="upload-label">{t("image")}</label>
        <input
          className="upload-input"
          ref={imageRef}
          accept="image/*"
          type="file"
          required
          onChange={handleImageChange}
        />
        {post.image && (
          <Image src={post.image} width={100} height={100} alt="post-image" />
        )}
        <button className="main-btn post-btn" onSubmit={handleSubmit}>
          {t("upload")}
        </button>
      </form>
    </Layout>
  );
};

export default NewPostPage;
