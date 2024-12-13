"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { items } = state;

  const total = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="py-5 bg-dark text-white min-vh-100">
      <div className="container pt-5">
        <h1 className="mb-4 text-center text-warning">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
            <Link href="/collections" className="btn btn-warning">
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() =>
                          dispatch({ type: "ADD_ITEM", payload: item })
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", payload: item })
                        }
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-end">
              <h4>Total: ${total.toFixed(2)}</h4>
              <div className="mt-3 d-flex justify-content-end gap-3">
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                >
                  Clear Cart
                </button>
                <Link href="/checkout">
                  <button className="btn btn-success">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
