
import { products } from "@/data/product";
import React from "react";
import ProductCard from "../components/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorentia | Collections",
};

const collections = () => {

  return (
    <section className="py-5 text-white" style={{backgroundColor:"#566275", color:"#FFFFFF"}}>
      <div className="container">
        <h1 className="display-4 text-center mt-5 mb-4 text-warning fw-bolder">
          Collection
        </h1>
        <p className="text-center mb-4 mx-auto px-4">
          Discover our most coveted fragrances, each bottle a masterpiece of
          olfactory artistry
        </p>
        <div className="products">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default collections;
