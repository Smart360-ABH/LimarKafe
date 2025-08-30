export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown mb-6">О нас</h2>
            <div className="w-24 h-1 bg-cafe-chocolate mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Кафе "Лимар" — это место, где встречаются традиции грузинского гостеприимства 
              и современный подход к кулинарному искусству
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-cafe-brown mb-4">Наша история</h3>
              <p className="text-gray-700 leading-relaxed">
                В самом сердце прекрасного Нового Афона, на уютной улице Эшба, расположилось наше кафе "Лимар". 
                Мы создали это место для тех, кто ценит качественную еду, уютную атмосферу и теплое общение.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Наша команда поваров готовит каждое блюдо с душой, используя только свежие и качественные продукты. 
                Мы гордимся тем, что можем предложить нашим гостям незабываемые вкусовые впечатления.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-cafe-cornsilk rounded-lg">
                  <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-cafe-brown mb-2">Время работы</h4>
                  <p className="text-gray-600 text-sm">Ежедневно<br />9:00 - 23:00</p>
                </div>
                <div className="text-center p-6 bg-cafe-cornsilk rounded-lg">
                  <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-cafe-brown mb-2">Адрес</h4>
                  <p className="text-gray-600 text-sm">г. Новый Афон<br />ул. Эшба, 1/2</p>
                </div>
                <div className="text-center p-6 bg-cafe-cornsilk rounded-lg">
                  <div className="w-16 h-16 bg-cafe-brown rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-cafe-brown mb-2">Вместимость</h4>
                  <p className="text-gray-600 text-sm">До 50 гостей<br />Уютная атмосфера</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Интерьер кафе Лимар" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Приготовление кофе в кафе" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
