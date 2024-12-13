"use client";

import React, { createContext, useContext, useReducer } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CartState {
  items: Product[];
}

interface CartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
  payload?: Product;
}

const initialCartState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find((item) => item.id === action.payload?.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === action.payload?.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { ...action.payload!, quantity: 1 }],
      };

    case "REMOVE_ITEM":
      return {
        items: state.items
          .map((item) =>
            item.id === action.payload?.id
              ? { ...item, quantity: (item.quantity || 1) - 1 }
              : item
          )
          .filter((item) => item.quantity && item.quantity > 0),
      };

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
