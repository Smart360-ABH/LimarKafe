"use client";
import React, { useState } from "react";
import { useCart } from "./useCart";
import CartModal from "./CartModal";

export default function Cart() {
  const { countItems } = useCart();
  const [open, setOpen] = useState(false);
  const totalCount = countItems();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Открыть корзину"
        className="relative inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-transparent hover:shadow-md transition bg-black text-white">
        <span className="text-xl">🛒</span>
        <span className="hidden sm:inline">Корзина</span>
        {totalCount > 0 && (
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full bg-gold text-black">{totalCount}</span>
        )}
      </button>

      {open && <CartModal onClose={() => setOpen(false)} />}
    </>
  );
}
