"use client"
import ProductCard from "@/app/components/ProductCard";
import { products } from "@/data/product";
import React from "react";

// Define the interface for the props
interface DetailPageProps {
  params: {
    id: string;
  };
}

const DetailPage =  (props: DetailPageProps) => {
  const productId = parseInt(props.params.id, 10);
  const product = products.find((prod) => prod.id === productId);
  if (!product) {
    return (
      <div className="text-white text-center py-5" style={{backgroundColor:"#566275", color:"#FFFFFF"}}>
        <h2>Product not found</h2>
      </div>
    );
  }
  return (
    <div className="text-white min-vh-100 d-flex justify-content-center align-items-center p-3"  style={{backgroundColor:"#566275", color:"#FFFFFF"}}>
      <ProductCard key={product.id} {...product} />
    </div>
  );
};

export default DetailPage;
