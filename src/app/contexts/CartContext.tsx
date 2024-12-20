"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContextType, CartItem, Product } from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Initialize cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          console.warn("Invalid cart data in localStorage. Resetting cart.");
          setCart([]);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      setCart([]);
    }
  }, []);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      const newCart = [...prevCart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Update the quantity of a specific product
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total cost of items in the cart
  const getCartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook to use the CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}





// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { CartContextType, CartItem, Product } from "../types/types";

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Initialize cart from localStorage
//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem("cart");
//       if (savedCart) {
//         const parsedCart = JSON.parse(savedCart);
//         if (Array.isArray(parsedCart)) {
//           setCart(parsedCart);
//         } else {
//           console.warn("Invalid cart data in localStorage. Resetting cart.");
//           setCart([]);
//         }
//       }
//     } catch (error) {
//       console.error("Failed to load cart from localStorage:", error);
//       setCart([]);
//     }
//   }, []);

//   // Save cart to localStorage and update state
//   const saveCart = (newCart: CartItem[]) => {
//     try {
//       setCart(newCart);
//       localStorage.setItem("cart", JSON.stringify(newCart));
//     } catch (error) {
//       console.error("Failed to save cart to localStorage:", error);
//     }
//   };

//   // Add a product to the cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         const updatedCart = prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         return updatedCart;
//       }
//       const newCart = [...prevCart, { ...product, quantity: 1 }];
//       localStorage.setItem("cart", JSON.stringify(newCart));
//       return newCart;
//     });
//   };

//   // Remove a product from the cart
//   const removeFromCart = (productId: number) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item.id !== productId);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   // Clear the entire cart
//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem("cart");
//   };

//   // Update the quantity of a specific product
//   const updateQuantity = (productId: number, quantity: number) => {
//     if (quantity < 1) return;

//     setCart((prevCart) => {
//       const updatedCart = prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   // Calculate the total cost of items in the cart
//   const getCartTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         updateQuantity,
//         getCartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// // Hook to use the CartContext
// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }






// // "use client";

// // import React, { createContext, useContext, useReducer } from "react";

// // interface Product {
// //   id: number;
// //   name: string;
// //   price: number;
// //   image: string;
// //   quantity?: number;
// // }

// // interface CartState {
// //   items: Product[];
// // }

// // interface CartAction {
// //   type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
// //   payload?: Product;
// // }

// // const initialCartState: CartState = {
// //   items: [],
// // };

// // const cartReducer = (state: CartState, action: CartAction): CartState => {
// //   switch (action.type) {
// //     case "ADD_ITEM":
// //       const existingItem = state.items.find((item) => item.id === action.payload?.id);
// //       if (existingItem) {
// //         return {
// //           items: state.items.map((item) =>
// //             item.id === action.payload?.id
// //               ? { ...item, quantity: (item.quantity || 1) + 1 }
// //               : item
// //           ),
// //         };
// //       }
// //       return {
// //         items: [...state.items, { ...action.payload!, quantity: 1 }],
// //       };

// //     case "REMOVE_ITEM":
// //       return {
// //         items: state.items
// //           .map((item) =>
// //             item.id === action.payload?.id
// //               ? { ...item, quantity: (item.quantity || 1) - 1 }
// //               : item
// //           )
// //           .filter((item) => item.quantity && item.quantity > 0),
// //       };

// //     case "CLEAR_CART":
// //       return { items: [] };

// //     default:
// //       return state;
// //   }
// // };

// // const CartContext = createContext<{
// //   state: CartState;
// //   dispatch: React.Dispatch<CartAction>;
// // }>({
// //   state: initialCartState,
// //   dispatch: () => null,
// // });

// // export const CartProvider = ({ children }: { children: React.ReactNode }) => {
// //   const [state, dispatch] = useReducer(cartReducer, initialCartState);

// //   return (
// //     <CartContext.Provider value={{ state, dispatch }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // export const useCart = () => useContext(CartContext);
