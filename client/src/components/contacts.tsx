import { useEffect, useState } from "react";

export default function Contacts() {
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    // Fetch API key from server
    fetch('/api/config')
      .then(response => response.json())
      .then(data => {
        setApiKey(data.yandexMapsApiKey);
        loadYandexMaps(data.yandexMapsApiKey);
      })
      .catch(error => {
        console.error('Error fetching config:', error);
        loadYandexMaps(''); // Load without API key as fallback
      });
  }, []);

  // Load Yandex Maps script dynamically with API key
  const loadYandexMaps = (key: string) => {
    if (typeof window !== 'undefined' && !(window as any).ymaps) {
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${key}&lang=ru_RU`;
      script.type = 'text/javascript';
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else if ((window as any).ymaps) {
      initializeMap();
    }
  };

  const initializeMap = () => {
    if ((window as any).ymaps) {
      (window as any).ymaps.ready(() => {
        const map = new (window as any).ymaps.Map('map', {
          center: [43.089796, 40.815745],
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl']
        });

        const placemark = new (window as any).ymaps.Placemark([43.089796, 40.815745], {
          balloonContent: `
            <div style="padding: 10px;">
              <h3 style="margin: 0 0 10px 0; color: #8B4513;">Кафе "Лимар"</h3>
              <p style="margin: 0 0 5px 0;">г. Новый Афон, ул. Эшба, 1/2</p>
              <p style="margin: 0 0 10px 0;">Ежедневно: 9:00 - 23:00</p>
              <a href="https://wa.me/79407760141" style="color: #8B4513; text-decoration: none;">📱 Забронировать столик</a>
            </div>
          `
        }, {
          preset: 'islands#redDotIcon'
        });

        map.geoObjects.add(placemark);
      });
    }
  };

  return (
    <section id="contacts" className="py-20 bg-cafe-cornsilk">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown mb-6">Контакты</h2>
            <div className="w-24 h-1 bg-cafe-chocolate mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Мы будем рады видеть вас в нашем кафе. Свяжитесь с нами для бронирования
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-cafe-brown mb-6">Информация о кафе</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cafe-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cafe-brown mb-1">Адрес</h4>
                      <p className="text-gray-600">г. Новый Афон, улица Эшба, 1/2</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cafe-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cafe-brown mb-1">Часы работы</h4>
                      <p className="text-gray-600">Ежедневно: 9:00 - 23:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cafe-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fab fa-whatsapp text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cafe-brown mb-1">WhatsApp</h4>
                      <p className="text-gray-600">+79407760141</p>
                      <a 
                        href="https://wa.me/79407760141" 
                        className="text-cafe-brown hover:text-cafe-chocolate transition-colors duration-200 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Написать сообщение
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fab fa-instagram text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cafe-brown mb-1">Instagram</h4>
                      <p className="text-gray-600">@limar_cafe</p>
                      <a 
                        href="https://www.instagram.com/limar_cafe/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm"
                      >
                        Перейти в профиль
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/79407760141" 
                      className="flex-1 bg-cafe-brown hover:bg-cafe-chocolate text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>Забронировать столик
                    </a>
                    <a 
                      href="#menu" 
                      className="flex-1 bg-transparent border-2 border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white px-6 py-3 rounded-lg text-center font-medium transition-all duration-200"
                    >
                      <i className="fas fa-utensils mr-2"></i>Посмотреть меню
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div id="map" style={{width: '100%', height: '500px'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}