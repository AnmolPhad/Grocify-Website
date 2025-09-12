import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item or increase qty
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Decrease quantity
  const decreaseQty = (name) => {
    setCart((prev) =>
      prev
        .map((p) => (p.name === name ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  // Remove completely
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((p) => p.name !== name));
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
