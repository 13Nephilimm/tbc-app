"use client";

import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./uploadProduct.css";
import Image from "next/image";
import Layout from "../../../components/Layout/Layout";

const UploadPage = () => {
  const [product, setProduct] = useState<any>({
    title: "",
    description: "",
    price: "",
    release_year: "",
    category: "",
    rating: "",
    thumbnail: "",
    images: [],
  });

  const inputImageRef = useRef<HTMLInputElement>(null);
  const inputImagesRef = useRef<HTMLInputElement>(null);

  const [thumbnail, setThumbnail] = useState<any>({});

  const [images, setImages] = useState<any[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!inputImageRef.current?.files) {
      throw new Error("No file selected");
    }

    const res = await fetch(`api/image-upload?filename=${thumbnail.name}`, {
      method: "POST",
      body: thumbnail,
    });
    const imageBlob = await res.json();
    const imageBlobUrl = imageBlob.url;
    let imageBlobs;
    if (images.length !== 0) {
      imageBlobs = await Promise.all(
        images.map(async (img) => {
          const res = await fetch(`api/image-upload?filename=${img.name}`, {
            method: "POST",
            body: img,
          });
          const data = await res.json();
          return data.url;
        })
      );
    }
    await fetch(`api/product-upload`, {
      method: "POST",
      body: JSON.stringify({
        ...product,
        thumbnail: imageBlobUrl,
        images: imageBlobs ? imageBlobs : [],
      }),
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProduct((prevState: any) => ({
      ...prevState,
      [e.target.dataset.type as string]: e.target.value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.dataset.type === "thumbnail") {
      const files = e.target.files;
      if (files !== null) {
        const file = files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            if (e.target) {
              setProduct({ ...product, thumbnail: e.target.result });
            }
          };
          reader.readAsDataURL(file);
        }
        setThumbnail(files[0]);
      }
    }
    if (e.target && e.target.dataset.type === "images") {
      const files = e.target.files;
      if (files !== null) {
        const file = files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            if (e.target) {
              let newImages = [...product.images, e.target.result];
              if (newImages.length > 3) {
                newImages = [...newImages.slice(1)];
              }
              setProduct({
                ...product,
                images: newImages,
              });
            }
          };
          reader.readAsDataURL(file);
          setImages([...images, files[0]]);
        }
      }
    }
  };

  return (
    <Layout>
      <h1 className="admin-page-heading">
        <span>A</span>dd <span>N</span>ew <span>G</span>ame
      </h1>
      <form className="upload" onSubmit={handleSubmit}>
        <label className="upload-label">Game Name</label>
        <input
          onChange={handleChange}
          className="upload-input"
          type="text"
          id="name"
          required
          data-type="title"
          value={product.title}
        />
        <label className="upload-label">Description</label>
        <input
          onChange={handleChange}
          className="upload-input"
          type="text"
          id="name"
          required
          data-type="description"
          value={product.description}
        />
        <label className="upload-label">Price</label>
        <input
          onChange={handleChange}
          className="upload-input"
          type="text"
          id="name"
          required
          data-type="price"
          value={product.price}
        />
        <label className="upload-label">Release Year</label>
        <input
          onChange={handleChange}
          className="upload-input"
          type="text"
          id="name"
          required
          data-type="release_year"
          value={product.release_year}
        />
        <label className="upload-label">Genre</label>
        <input
          onChange={handleChange}
          className="upload-input"
          type="text"
          id="name"
          required
          data-type="category"
          value={product.category}
        />
        <label className="upload-label">Review</label>
        <input
          onChange={handleChange}
          className="upload-input"
          type="text"
          id="name"
          required
          data-type="rating"
          value={product.rating}
        />
        <label className="upload-label">Thumbnail</label>
        <input
          onChange={handleImageChange}
          className="upload-input"
          type="file"
          accept="image/*"
          id="name"
          required
          data-type="thumbnail"
          ref={inputImageRef}
        />
        {product.thumbnail && (
          <Image src={product.thumbnail} width={100} height={100} alt="image" />
        )}
        <label className="upload-label">Images</label>
        <input
          onChange={handleImageChange}
          className="upload-input"
          type="file"
          accept="image/*"
          multiple
          id="name"
          required
          data-type="images"
          ref={inputImagesRef}
        />
        {product.images &&
          product.images.map((image: string, i: number) => {
            return (
              <Image key={i} src={image} width={100} height={100} alt="image" />
            );
          })}

        <button
          type="submit"
          className="main-btn upload-btn"
          onSubmit={handleSubmit}
        >
          Upload Product
        </button>
      </form>
    </Layout>
  );
};

export default UploadPage;
