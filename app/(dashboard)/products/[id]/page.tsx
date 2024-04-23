import Image from "next/image";
import "./single-product.css";
import Layout from "../../../../components/Layout/Layout";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
}

interface Params {
  params: {
    id: string;
  };
}

interface StaticParams {
  id: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  return data.products.map((item: Product) => ({ id: String(item.id) }));
}

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return product;
}

const SingleProductPage: React.FC<Params> = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <Layout>
      <div className="single-product-container">
        <h1 className="single-product-title">{product.title}</h1>
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
};

export default SingleProductPage;
