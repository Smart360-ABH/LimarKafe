import Menu from "../components/menu";
import { useCart } from '../components/useCart';


export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cafe-cornsilk">
      <Menu />
    
{/* Добавлено: кнопка В корзину */}
<button onClick={() => addToCart({ id: Date.now(), name: 'Блюдо (пример)', price: 0 }, 1)} className="mt-2 px-3 py-2 rounded bg-black text-white">В корзину</button>
</div>
  );
}