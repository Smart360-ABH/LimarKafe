import Hero from "@/components/hero";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown mb-6">
                О нашем кафе
              </h2>
              <div className="w-24 h-1 bg-cafe-chocolate mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Кафе "Лимар" — это место, где традиции грузинской и кавказской кухни встречаются с современным комфортом
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-utensils text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-cafe-brown mb-4">
                  Аутентичная кухня
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Готовим по традиционным рецептам с использованием свежих местных продуктов
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-cafe-brown mb-4">
                  Семейная атмосфера
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Уютная обстановка и теплое гостеприимство для всей семьи
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-clock text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-cafe-brown mb-4">
                  Всегда открыты
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Работаем ежедневно с 9:00 до 23:00 для вашего удобства
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/menu"
                  className="inline-flex items-center bg-cafe-brown text-white px-8 py-4 rounded-lg font-medium hover:bg-cafe-chocolate transition-colors duration-200 text-lg"
                >
                  <i className="fas fa-utensils mr-3"></i>Посмотреть меню
                </Link>
                <a 
                  href="https://wa.me/79407760141" 
                  className="inline-flex items-center border-2 border-cafe-brown text-cafe-brown px-8 py-4 rounded-lg font-medium hover:bg-cafe-brown hover:text-white transition-all duration-200 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-3"></i>Забронировать столик
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-br from-cafe-cornsilk to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown mb-6">
                Наши разделы
              </h2>
              <div className="w-24 h-1 bg-cafe-chocolate mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/menu">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-utensils text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-cafe-brown mb-4">Меню</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Полный список наших блюд с ценами и описанием
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/gallery">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-images text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-cafe-brown mb-4">Галерея</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Фотографии наших блюд и атмосферы кафе
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/about">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-info-circle text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-cafe-brown mb-4">О нас</h3>
                    <p className="text-gray-600 leading-relaxed">
                      История нашего кафе и наши принципы
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/contacts">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-cafe-brown mb-4">Контакты</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Наш адрес, часы работы и способы связи
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}