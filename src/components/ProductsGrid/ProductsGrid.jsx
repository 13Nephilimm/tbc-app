import React from "react";
import "./products-grid.css";
import products from "../../productsData";
import Card from "../Card/Card";

const ProductsGrid = () => {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default ProductsGrid;
