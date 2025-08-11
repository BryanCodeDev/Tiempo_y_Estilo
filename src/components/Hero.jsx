import React, { useState, useEffect } from 'react';
import { Phone, ArrowDown, Truck, Clock, Shield, Star, Package, Heart } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Productos únicos",
      subtitle: "calidad premium",
      description: "Descubre una selección exclusiva de productos para tu hogar, belleza y bienestar. Calidad garantizada y envíos rápidos a toda Colombia.",
      bg: "from-blue-600 via-indigo-600 to-purple-600"
    },
    {
      title: "Envíos gratuitos",
      subtitle: "en compras +$80.000",
      description: "Recibe tus productos favoritos sin costo adicional. Entrega rápida y segura directo a tu puerta.",
      bg: "from-indigo-600 via-blue-600 to-cyan-600"
    },
    {
      title: "Compra segura",
      subtitle: "pago contra entrega",
      description: "Paga cuando recibas tu pedido. Tu satisfacción es nuestra prioridad número uno.",
      bg: "from-purple-600 via-indigo-600 to-blue-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 min-h-screen">
      {/* Background con gradiente animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-5 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in">
              <Package className="w-4 h-4 mr-2 text-yellow-300" />
              Tu tienda online de confianza
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">GoTo</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 animate-gradient">
                Buy
              </span>
            </h1>
            
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-4">
                {slides[currentSlide].title}{' '}
                <span className="text-yellow-300">{slides[currentSlide].subtitle}</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={handleScrollToProducts}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 transform hover:-translate-y-1"
                type="button"
              >
                <Package className="inline-block mr-2 w-5 h-5" />
                Ver Productos
                <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
              </button>
              <a 
                href="https://wa.me/573008226497?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20GoToBuy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                WhatsApp
              </a>
            </div>

            {/* Indicadores del slider */}
            <div className="flex justify-center lg:justify-start space-x-3 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            {/* Estadísticas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">8+</div>
                <div className="text-white/80 text-sm">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">Calidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Soporte</div>
              </div>
            </div>
          </div>
          
          {/* Tarjetas de beneficios */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 text-center sm:text-left">Envíos Gratis</h3>
                <p className="text-blue-600 font-semibold text-sm text-center sm:text-left mb-1">Sobre $80.000</p>
                <p className="text-gray-600 text-xs text-center sm:text-left">Entrega rápida y segura</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 text-center sm:text-left">Atención</h3>
                <p className="text-purple-600 font-semibold text-sm text-center sm:text-left mb-1">24/7 WhatsApp</p>
                <p className="text-gray-600 text-xs text-center sm:text-left">Siempre disponibles</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 text-center sm:text-left">Calidad</h3>
                <p className="text-green-600 font-semibold text-sm text-center sm:text-left mb-1">Garantizada</p>
                <p className="text-gray-600 text-xs text-center sm:text-left">Productos premium</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 text-center sm:text-left">Confianza</h3>
                <p className="text-orange-600 font-semibold text-sm text-center sm:text-left mb-1">100% Seguro</p>
                <p className="text-gray-600 text-xs text-center sm:text-left">Pago contra entrega</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;