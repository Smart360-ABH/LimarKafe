import Menu from "../components/menu";\nimport { useCart } from "../components/useCart.jsx";\n

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cafe-cornsilk">
      <Menu />
    \n{/* Добавлено: кнопка В корзину */}\n<button onClick={() => { const {{ addToCart }} = useCart(); addToCart({ id: Date.now(), name: 'Блюдо (пример)', price: 0 }, 1); }} className="mt-2 px-3 py-2 rounded bg-black text-white">В корзину</button>\n</div>
  );
}