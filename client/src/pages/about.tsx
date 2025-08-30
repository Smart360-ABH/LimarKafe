export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-cafe-cornsilk to-orange-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown mb-6">
              О нас
            </h1>
            <div className="w-24 h-1 bg-cafe-chocolate mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Кафе "Лимар" - это место, где традиции кавказской гостеприимности встречаются 
              с изысканными вкусами грузинской и армянской кухни.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold text-cafe-brown mb-6">
                Наша история
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Расположенное в живописном городе Новый Афон, наше кафе стало настоящим 
                домом для ценителей аутентичной кавказской кухни. Мы гордимся тем, что 
                сохраняем традиции приготовления блюд, передаваемые из поколения в поколение.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Каждое блюдо в нашем меню готовится с особой заботой и вниманием к деталям. 
                Мы используем только свежие, качественные продукты от местных поставщиков, 
                что позволяет нам сохранить неповторимый вкус традиционных рецептов.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-semibold text-cafe-brown mb-6">
                Почему выбирают нас
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-cafe-brown text-lg mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-cafe-brown">Аутентичные рецепты</h4>
                    <p className="text-gray-600 text-sm">Традиционные блюда по семейным рецептам</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-cafe-brown text-lg mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-cafe-brown">Свежие продукты</h4>
                    <p className="text-gray-600 text-sm">Только качественные местные ингредиенты</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-cafe-brown text-lg mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-cafe-brown">Уютная атмосфера</h4>
                    <p className="text-gray-600 text-sm">Теплая и гостеприимная обстановка</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-cafe-brown text-lg mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-cafe-brown">Доступные цены</h4>
                    <p className="text-gray-600 text-sm">Высокое качество по разумным ценам</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-cafe-brown mb-4">
                Приходите к нам в гости!
              </h3>
              <p className="text-gray-600 mb-6">
                Мы работаем ежедневно с 9:00 до 23:00 и всегда рады видеть вас в нашем кафе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/79407760141" 
                  className="inline-flex items-center bg-cafe-brown text-white px-6 py-3 rounded-lg font-medium hover:bg-cafe-chocolate transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Забронировать столик
                </a>
                <a 
                  href="/menu" 
                  className="inline-flex items-center bg-transparent border-2 border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <i className="fas fa-utensils mr-2"></i>
                  Посмотреть меню
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}