import React, { useState, useEffect } from 'react';
import { Phone, ArrowDown, Truck, Clock, Shield, Star } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Tu tienda de barrio",
      subtitle: "ahora online",
      description: "Compra todos tus productos favoritos desde la comodidad de tu hogar. Entregas rápidas y precios justos, como siempre.",
      bg: "from-emerald-600 via-teal-600 to-cyan-600"
    },
    {
      title: "Productos frescos",
      subtitle: "todos los días",
      description: "Carnes, lácteos, frutas y verduras frescas. Calidad garantizada con la confianza de siempre.",
      bg: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      title: "Domicilios gratis",
      subtitle: "en compras +$30.000",
      description: "Recibe tus productos en casa sin costo adicional. Rápido, seguro y confiable.",
      bg: "from-orange-500 via-red-500 to-pink-500"
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
    <section id="inicio" className="relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8">
      {/* Background con gradiente animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-5 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 animate-fade-in">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Más de 1 año sirviendo a nuestra comunidad
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
              {slides[currentSlide].title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 animate-gradient">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button 
                onClick={handleScrollToProducts}
                className="group bg-white text-gray-900 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 transform hover:-translate-y-1"
                type="button"
              >
                Ver Productos
                <ArrowDown className="inline-block ml-2 w-4 h-4 group-hover:animate-bounce" />
              </button>
              <a 
                href="https://wa.me/573113670631?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20productos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                WhatsApp
              </a>
            </div>

            {/* Indicadores del slider */}
            <div className="flex justify-center lg:justify-start space-x-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Tarjetas de beneficios */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1 text-center sm:text-left">Domicilios</h3>
                <p className="text-emerald-600 font-semibold text-sm text-center sm:text-left">Gratis sobre $30.000</p>
                <p className="text-gray-600 text-xs mt-1 text-center sm:text-left">Entrega rápida y segura</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1 text-center sm:text-left">Horarios</h3>
                <p className="text-blue-600 font-semibold text-sm text-center sm:text-left">6:00 AM - 10:00 PM</p>
                <p className="text-gray-600 text-xs mt-1 text-center sm:text-left">Todos los días</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1 text-center sm:text-left">Calidad</h3>
                <p className="text-purple-600 font-semibold text-sm text-center sm:text-left">Garantizada</p>
                <p className="text-gray-600 text-xs mt-1 text-center sm:text-left">Productos frescos</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1 text-center sm:text-left">Confianza</h3>
                <p className="text-orange-600 font-semibold text-sm text-center sm:text-left">+1 años</p>
                <p className="text-gray-600 text-xs mt-1 text-center sm:text-left">De experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-5 h-5" />
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