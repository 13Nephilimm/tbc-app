import Image from "next/image";
import "./single-product.css";
import Layout from "@/components/Layout/Layout";

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/products`);
  const product = await res.json();
  return product.products.map((item) => ({ id: String(item.id) }));
}

async function fetchProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return product;
}

export default async function SingleProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <Layout>
      <div className="single-product-container">
        <h1 className="single-product-title">{product.title}</h1>;
        <Image
          src={product.thumbnail}
          alt="product"
          className="single-product-image"
          width={200}
          height={200}
        />
        <p className="single-product-price">Price: {product.price}$</p>
        <p className="single-product-description">{product.description}</p>
      </div>
    </Layout>
  );
}
