"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "restaurant_cart_v1";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const cartState = useProvideCart();
  return <CartContext.Provider value={cartState}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

function useProvideCart() {
  const [items, setItems] = useState(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed saving cart to localStorage", e);
    }
  }, [items]);

  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === product.id);
      if (idx === -1) {
        return [...prev, { ...product, qty }];
      } else {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
    });
  };

  const removeFromCart = (id) => {
    setItems(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setItems(prev => {
      if (qty <= 0) return prev.filter(p => p.id !== id);
      return prev.map(p => (p.id === id ? { ...p, qty } : p));
    });
  };

  const clearCart = () => setItems([]);

  const calculateTotal = () => items.reduce((s, it) => s + Number(it.price) * Number(it.qty), 0);
  const countItems = () => items.reduce((s, it) => s + Number(it.qty), 0);

  return { items, addToCart, removeFromCart, updateQuantity, clearCart, calculateTotal, countItems };
}
