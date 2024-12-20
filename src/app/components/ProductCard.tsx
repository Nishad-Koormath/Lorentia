"use client"

import React from "react";
import "./product_card_style.css";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({
  id,
  name,
  price,
  description,
  image,
}: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const product = { id, name, price, description, image };
  return (
    <div className="position-relative">
      <div
        className="card position-relative overflow-hidden"
        style={{ width: "18rem", textDecoration: "none" }}
      >
        <Image src={image} className="card-img-top" alt={name} width={500} height={500} />
        <div className="card-body">
          <Link href={`/collections/${id}`} className="product-link">
            <h5 className="card-title">{name}</h5>

            <p className="card-text">{description}</p>
            <h4>${price}</h4>
          </Link>
          <button
                className="btn btn-primary btn-lg w-100"
                // style={{ backgroundColor: "#FF9900", borderColor: "#FF9900" }}
                onClick={()=>addToCart(product)}
              >
                Add to Cart
              </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
