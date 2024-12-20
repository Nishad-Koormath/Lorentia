"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";

const ClientCartPage = () => {
  const { cart, clearCart, getCartTotal, updateQuantity, removeFromCart } =
    useCart();
  console.log("Cart:", cart);

  if (cart.length === 0) {
    return (
      <div className="text-center py-5">
        <h2 className="fs-3 fw-bold pt-5 mb-3">Your cart is empty</h2>
        <p>Start shopping to add items to your cart!</p>
        <Link href="/collections">
          <button className="btn btn-primary mt-3">Browse Collections</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5 pt-5 text-black">
      <div className="d-flex align-items-center justify-content-between  mb-4">
        <h1 className="fs-2 text-white fw-bold">Shopping Cart</h1>
        <button className="btn btn-danger" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className="bg-white rounded shadow-sm p-4">
        <div className="mb-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center gap-3 py-3 border-bottom"
            >
              <div
                className="position-relative"
                style={{ width: "96px", height: "96px" }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fw-semibold mb-1">{item.name}</h5>
                <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="fw-semibold">{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="border-top pt-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-5 fw-semibold">Total:</span>
            <span className="fs-4 fw-bold">${getCartTotal().toFixed(2)}</span>
          </div>
          <button className="btn btn-primary w-100">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ClientCartPage;
