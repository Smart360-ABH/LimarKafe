import bakeryImage from '@assets/photo_5246919464442787471_y_1754880763338.jpg';
import appetizersImage from '@assets/IMG_20250723_175718_089_1754878716579.jpg';
import middleEasternImage from '@assets/IMG_20250723_175736_310_1754878854047.jpg';
import mainDishesImage from '@assets/IMG_20250723_175741_510_1754878854048.jpg';
import mainDishes2Image from '@assets/IMG_20250723_175741_552_1754878854048.jpg';
import mainDishes3Image from '@assets/asset_001.jpg';
import garnishImage from '@assets/asset_002.jpg';
import soupsImage from '@assets/asset_003.jpg';
import soups2Image from '@assets/asset_004.jpg';
import pizzaImage from '@assets/asset_005.jpg';
import fishImage from '@assets/asset_006.jpg';
import saladsImage from '@assets/asset_007.jpg';
import coldAppsImage from '@assets/asset_008.jpg';
import breakfastImage from '@assets/asset_009.jpg';
import pastaImage from '@assets/asset_010.jpg';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Выпечка",
      description: "Хачапури круглый, лаваш из печи, хлеб из куска",
      image: bakeryImage,
      category: "bakery"
    },
    {
      id: 2,
      title: "Закуски",
      description: "Овощная нарезка, лимонная нарезка, сырная нарезка",
      image: appetizersImage,
      category: "appetizers"
    },
    {
      id: 3,
      title: "Ближневосточная кухня",
      description: "Традиционные блюда и закуски",
      image: middleEasternImage,
      category: "middle-eastern"
    },
    {
      id: 4,
      title: "Вторые блюда",
      description: "Купаты, котлета по-киевски, плов с бараниной",
      image: mainDishesImage,
      category: "main-dishes"
    },
    {
      id: 5,
      title: "Домашние блюда",
      description: "Пельмени, вареники домашние, цыпленок табака",
      image: mainDishes2Image,
      category: "home-style"
    },
    {
      id: 6,
      title: "Грузинская кухня",
      description: "Хинкали отварные, хинкали жареные, аджапсандал",
      image: mainDishes3Image,
      category: "georgian"
    },
    {
      id: 7,
      title: "Гарниры",
      description: "Картофель фри, картофель по-деревенски",
      image: garnishImage,
      category: "sides"
    },
    {
      id: 8,
      title: "Первые блюда",
      description: "Лагман, суп харчо, пити (суп армянский)",
      image: soupsImage,
      category: "soups"
    },
    {
      id: 9,
      title: "Традиционные супы",
      description: "Хашлама с бараниной, борщ с говядиной",
      image: soups2Image,
      category: "traditional-soups"
    },
    {
      id: 10,
      title: "Пицца",
      description: "Пепперони, Маргарита, Сборная",
      image: pizzaImage,
      category: "pizza"
    },
    {
      id: 11,
      title: "Блюда из рыбы",
      description: "Барабуля, фирменное блюдо афон, форель жареная",
      image: fishImage,
      category: "fish"
    },
    {
      id: 12,
      title: "Салаты",
      description: "Разнообразные свежие салаты",
      image: saladsImage,
      category: "salads"
    },
    {
      id: 13,
      title: "Холодные закуски",
      description: "Зелень, маслины/оливки",
      image: coldAppsImage,
      category: "cold-appetizers"
    },
    {
      id: 14,
      title: "Завтраки",
      description: "Наггетсы, сосиски, котлеты",
      image: breakfastImage,
      category: "breakfast"
    },
    {
      id: 15,
      title: "Пасты",
      description: "Карбонара, паста с креветками, паста с курицей",
      image: pastaImage,
      category: "pasta"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cafe-cornsilk to-orange-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown mb-6">
              Галерея блюд
            </h1>
            <div className="w-24 h-1 bg-cafe-chocolate mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Познакомьтесь с нашими фирменными блюдами. Каждое блюдо готовится 
              с любовью и по традиционным рецептам.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-cafe-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <a 
                    href="/menu" 
                    className="inline-flex items-center text-cafe-brown hover:text-cafe-chocolate transition-colors duration-200"
                  >
                    <i className="fas fa-arrow-right mr-2"></i>
                    Посмотреть в меню
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-cafe-brown mb-4">
                Попробуйте наши блюда!
              </h3>
              <p className="text-gray-600 mb-6">
                Закажите любое блюдо через WhatsApp или приходите к нам в кафе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/79407760141" 
                  className="inline-flex items-center bg-cafe-brown text-white px-6 py-3 rounded-lg font-medium hover:bg-cafe-chocolate transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Сделать заказ
                </a>
                <a 
                  href="/menu" 
                  className="inline-flex items-center bg-transparent border-2 border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <i className="fas fa-utensils mr-2"></i>
                  Полное меню
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}