import { useState } from 'react';
import { Link, useLocation } from 'wouter';\nimport Cart from "Cart.jsx";\nimport { CartProvider } from "useCart.jsx";\n

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: '/', label: 'Главная', icon: 'fas fa-home' },
    { href: '/menu', label: 'Меню', icon: 'fas fa-utensils' },
    { href: '/gallery', label: 'Галерея', icon: 'fas fa-images' },
    { href: '/about', label: 'О нас', icon: 'fas fa-info-circle' },
    { href: '/contacts', label: 'Контакты', icon: 'fas fa-map-marker-alt' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cafe-brown rounded-full flex items-center justify-center">
              <i className="fas fa-coffee text-white text-lg"></i>
            </div>
            <span className="text-xl font-serif font-bold text-cafe-brown">Кафе Лимар</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  location === item.href
                    ? 'bg-cafe-brown text-white'
                    : 'text-cafe-brown hover:bg-cafe-cornsilk'
                }`}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:flex">
            <a 
              href="https://wa.me/79407760141" 
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              <span>Заказать</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-cafe-brown hover:bg-cafe-cornsilk"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    location === item.href
                      ? 'bg-cafe-brown text-white'
                      : 'text-cafe-brown hover:bg-cafe-cornsilk'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
              <a 
                href="https://wa.me/79407760141" 
                className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center space-x-3 mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Заказать через WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
      <Cart />\n</nav>
  );
}