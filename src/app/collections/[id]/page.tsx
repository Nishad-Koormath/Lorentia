"use client";
import ProductCard from "@/app/components/ProductCard";
import { products } from "@/data/product";
import React, { use } from "react";
import "./styles.css"

// Define the interface for the props
interface DetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DetailPage = (props: DetailPageProps) => {
  const params = use(props.params);
  const productId = parseInt(params.id, 10);
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return (
      <div
        className="text-white text-center py-5"
        style={{  color: "#FFFFFF" }}
      >
        <h2 className="py-5">Product not found!</h2>
      </div>
    );
  }

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center p-5"
      style={{ color: "black" }}
    >
      <div className="container bg-white shadow p-4 rounded">
        <div className="row">
          {/* Left Section: Product Image */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded product-image"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>

          {/* Right Section: Product Details */}
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div>
              <h1 className="mb-4">{product.name}</h1>
              <p className="mb-4">{product.description}</p>
              <h4 className="text-primary mb-4">${product.price.toFixed(2)}</h4>
            </div>
            <div className="mt-3">
              <button
                className="btn btn-primary btn-lg w-100"
                style={{ backgroundColor: "#FF9900", borderColor: "#FF9900" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
