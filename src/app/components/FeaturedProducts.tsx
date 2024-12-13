import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/product";

const FeaturedProducts = () => {
  const all_products = products
  const featured_products = all_products.slice(0,8)
  return (
    <section className="py-5  text-white" style={{ backgroundColor: "#566275" }}>
      <div className="container">
        <h1 className="display-4 text-center mb-4 text-warning fw-bolder">
          Signature Collection
        </h1>
        <p className="text-center mb-4 mx-auto px-4">
          Discover our most coveted fragrances, each bottle a masterpiece of
          olfactory artistry
        </p>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-4 g-4">
            {featured_products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
