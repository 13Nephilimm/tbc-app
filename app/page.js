import Layout from "@/components/Layout/Layout";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import products from "./productsData";

export default function Home() {
  return (
    <Layout>
      <ProductsGrid products={products} />
    </Layout>
  );
}
