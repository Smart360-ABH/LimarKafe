"use client";
import React, { useState } from "react";
import { useCart } from "./useCart";
import CheckoutForm from "./CheckoutForm";

export default function CartModal({ onClose }) {
  const { items, updateQuantity, removeFromCart, calculateTotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Ваша корзина</h3>

        {items.length === 0 ? (
          <div className="py-8 text-center text-gray-600">Корзина пуста</div>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-auto pr-2">
            {items.map((it) => (
              <div key={it.id} className="flex items-center justify-between gap-4 border-b pb-3">
                <div className="flex-1">
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-gray-500">{it.price}р / шт</div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(it.id, Number(it.qty) - 1)} className="px-2 py-1 rounded-md border">−</button>
                  <div className="w-8 text-center">{it.qty}</div>
                  <button onClick={() => updateQuantity(it.id, Number(it.qty) + 1)} className="px-2 py-1 rounded-md border">+</button>
                </div>

                <div className="w-28 text-right"><div className="font-medium">{Number(it.price) * Number(it.qty)}р</div></div>

                <div><button onClick={() => removeFromCart(it.id)} className="text-sm text-red-600">Удалить</button></div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <div className="text-lg font-semibold">Итого: {calculateTotal()}р</div>

          <div className="flex items-center gap-2">
            <button onClick={onClose} className="px-4 py-2 rounded-md border bg-white text-black">Закрыть</button>
            <button onClick={() => setShowCheckout(true)} disabled={items.length === 0} className="px-4 py-2 rounded-md bg-gold text-black font-semibold disabled:opacity-50">Оформить заказ</button>
          </div>
        </div>

        {showCheckout && (<div className="mt-6"><CheckoutForm onCloseAll={() => { setShowCheckout(false); onClose(); }} /></div>)}
      </div>
    </div>
  );
}
