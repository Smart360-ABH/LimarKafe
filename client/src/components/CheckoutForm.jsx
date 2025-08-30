"use client";
import React, { useState } from "react";
import { useCart } from "./useCart";

const RESTAURANT_PHONE = "+79780000000"; // ЗАМЕНИТЕ на реальный номер

export default function CheckoutForm({ onCloseAll }) {
  const { items, calculateTotal, clearCart } = useCart();
  const [name, setName] = useState(""); const [phone, setPhone] = useState(""); const [address, setAddress] = useState(""); const [comment, setComment] = useState(""); const [payment, setPayment] = useState("transfer");

  const handleSendWhatsApp = () => {
    if (!phone.trim()) { alert("Нужно указать номер телефона."); return; }
    const lines = [];
    lines.push("Добрый день! Хочу сделать заказ:
");
    lines.push("*Заказ:*"); 
    items.forEach(it => { const line = `• ${it.name} - ${it.qty} x ${it.price}р = ${Number(it.qty) * Number(it.price)}р`; lines.push(line); });
    lines.push(""); lines.push(`*Итого к оплате:* ${calculateTotal()}р`);
    lines.push(`*Способ оплаты:* ${payment === "transfer" ? "Переводом" : "Наличными при получении"}`);
    lines.push(""); lines.push("*Мои данные:*"); lines.push(`Имя: ${name || "-"}`); lines.push(`Телефон: ${phone}`); lines.push(`Адрес: ${address || "-"}`); lines.push(`Комментарий: ${comment || "-"}`);
    const text = lines.join("
"); const phoneDigits = RESTAURANT_PHONE.replace(/\D/g, ""); const url = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); clearCart(); if (onCloseAll) onCloseAll();
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 border mt-4">
      <h4 className="font-semibold mb-3">Оформление заказа</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col"><span className="text-sm">Имя</span><input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 p-2 rounded border" placeholder="Иван" /></label>
        <label className="flex flex-col"><span className="text-sm">Телефон <span className="text-red-600">*</span></span><input value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-1 p-2 rounded border" placeholder="+7..." /></label>
        <label className="flex flex-col sm:col-span-2"><span className="text-sm">Адрес доставки</span><input value={address} onChange={(e)=>setAddress(e.target.value)} className="mt-1 p-2 rounded border" placeholder="ул. Примерная, 10" /></label>
        <label className="flex flex-col sm:col-span-2"><span className="text-sm">Комментарий</span><textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="mt-1 p-2 rounded border" placeholder="Пожалуйста, позвоните за час..." /></label>
        <div className="sm:col-span-2"><div className="text-sm mb-1">Способ оплаты</div><div className="flex items-center gap-4"><label className="inline-flex items-center gap-2"><input type="radio" name="payment" checked={payment === "transfer"} onChange={()=>setPayment("transfer")} /><span>Оплата переводом</span></label><label className="inline-flex items-center gap-2"><input type="radio" name="payment" checked={payment === "cash"} onChange={()=>setPayment("cash")} /><span>Наличными при получении</span></label></div></div>
      </div>
      <div className="mt-4 flex items-center justify-between"><div className="text-lg font-semibold">Итого: {calculateTotal()}р</div><div className="flex items-center gap-2"><button onClick={onCloseAll} className="px-3 py-2 rounded border bg-white text-black">Отмена</button><button onClick={handleSendWhatsApp} className="px-4 py-2 rounded bg-gold text-black font-semibold">Отправить заказ в WhatsApp</button></div></div>
    </div>
  );
}
