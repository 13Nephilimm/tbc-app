import "./single-product.css";
import Layout from "../../../../components/Layout/Layout";
import ProductSwiper from "../../../../components/Swiper/ProductSwiper";
import AddToCart from "../../../../components/AddToCart/AddToCart";
import Toast from "../../../../components/Toast/Toast";

export interface Product {
  id: string;
  title: string;
  thumbnail: string;
  images: string;
  category: string;
  release_year: number;
  price: number;
  description: string;
  rating: number;
}

async function fetchProducts(id: string): Promise<Product> {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/get-single-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error("Network response was not ok");
    }

    const games = await res.json();
    return games.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
}

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  try {
    const product = await fetchProducts(id);
    console.log(product.id);

    return (
      <Layout>
        <Toast />
        <div className="single-product-container">
          <ProductSwiper images={product.images} />
          <h1 className="single-product-title">{product.title}</h1>
          <p className="single-product-description">{product.description}</p>
          <div className="single-product-details-box">
            <p className="single-product-rating">
              Rating: {product.rating}/100
            </p>
            <p className="single-product-price">Price: ${product.price}</p>
          </div>
          <div className="single-product-details-box">
            <p className="single-product-category">
              Category: {product.category}
            </p>
            <p className="single-product-release-date">
              Release Year: {product.release_year}
            </p>
          </div>
          <AddToCart product={product} />
        </div>
      </Layout>
    );
  } catch (error) {
    return <div>Error loading product</div>;
  }
};

export default SingleProductPage;
