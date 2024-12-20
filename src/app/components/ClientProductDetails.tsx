"use client"

import React from 'react'
import { useCart } from '../contexts/CartContext';
import { products } from '@/data/product';
import Image from 'next/image';

interface DetailPageProps {
  params: { id: string };
}

const ClientProductDetails = ({ params }: DetailPageProps) => {
  console.log(params);
  
  const { addToCart } = useCart();

  const productId = parseInt(params.id, 10);
  const product = products.find((prod) => prod.id === productId);
  

  if (!product) {
    return (
      <div className="text-white text-center py-5">
        <h2 className="py-5">Product not found!</h2>
      </div>
    );
  } 

  return (
    <div className="min-vh-100 d-flex justify-content-center text-black align-items-center p-5">
      <div className="container bg-white shadow p-4 rounded">
        <div className="row">

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Image
              src={product.image}
              alt={product.name}
              className="img-fluid rounded product-image"
              style={{ maxHeight: "500px", objectFit: "contain" }}
              width={500}
              height={500}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div>
              <h1 className="mb-4">{product.name}</h1>
              <p className="mb-4">{product.description}</p>
              <h4 className="text-primary mb-4">${product.price.toFixed(2)}</h4>
            </div>
            <div className="mt-3">
              <button
                className="btn btn-primary btn-lg w-100"
                onClick={() => addToCart(product)}
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

export default ClientProductDetails