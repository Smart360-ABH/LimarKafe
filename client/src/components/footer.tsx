export default function Footer() {
  return (
    <footer className="bg-cafe-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <i className="fas fa-coffee text-cafe-brown text-xl"></i>
                </div>
                <h3 className="text-2xl font-serif font-bold">Кафе "Лимар"</h3>
              </div>
              <p className="text-cafe-beige leading-relaxed">
                Уютное место в сердце Нового Афона, где каждый гость становится частью нашей большой семьи.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-cafe-beige hover:text-white transition-colors duration-200">Главная</a></li>
                <li><a href="#about" className="text-cafe-beige hover:text-white transition-colors duration-200">О нас</a></li>
                <li><a href="#menu" className="text-cafe-beige hover:text-white transition-colors duration-200">Меню</a></li>
                <li><a href="#gallery" className="text-cafe-beige hover:text-white transition-colors duration-200">Галерея</a></li>
                <li><a href="#contacts" className="text-cafe-beige hover:text-white transition-colors duration-200">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Свяжитесь с нами</h4>
              <div className="space-y-3">
                <p className="text-cafe-beige">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  г. Новый Афон, ул. Эшба, 1/2
                </p>
                <p className="text-cafe-beige">
                  <i className="fas fa-clock mr-2"></i>
                  Ежедневно: 9:00 - 23:00
                </p>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="https://wa.me/79407760141" 
                    className="bg-green-500 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/limar_cafe/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-cafe-chocolate mt-8 pt-8 text-center">
            <p className="text-cafe-beige">
              © 2024 Кафе "Лимар". Все права защищены. | Создано с ❤️ для наших гостей
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
