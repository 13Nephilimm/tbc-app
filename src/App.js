import "./App.css";
import Layout from "./components/Layout/Layout";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <Layout>
      <SearchBar />
      <ProductsGrid />
    </Layout>
  );
}

export default App;
