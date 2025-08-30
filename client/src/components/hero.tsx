import cafeInteriorImage from '@assets/IMG_20250723_175718_089_1754878716579.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cafeInteriorImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Добро пожаловать в<br />
          <span className="text-cafe-burlywood">Кафе "Лимар"</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Уютная атмосфера и изысканный вкус в сердце Нового Афона
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#menu" 
            className="bg-cafe-brown hover:bg-cafe-chocolate text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-utensils mr-3"></i>Посмотреть меню
          </a>
          <a 
            href="https://wa.me/79407760141" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cafe-brown px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp mr-3"></i>Забронировать столик
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl opacity-70"></i>
      </div>
    </section>
  );
}
