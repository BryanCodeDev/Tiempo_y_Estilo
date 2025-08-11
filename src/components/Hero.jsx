import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Truck, Shield, Star, Package, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Productos únicos, calidad premium",
      description: "Descubre una selección exclusiva para tu hogar y bienestar",
      cta: "Explorar catálogo",
      accent: "Nuevos productos cada semana"
    },
    {
      title: "Envíos gratuitos en toda Colombia",
      description: "Sin costo adicional en compras superiores a $80.000",
      cta: "Ver productos",
      accent: "Entrega rápida y segura"
    },
    {
      title: "Compra 100% segura",
      description: "Pago contra entrega disponible en todo el país",
      cta: "Comprar ahora",
      accent: "Tu satisfacción garantizada"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-16 sm:pt-20 pb-6 sm:pb-8 overflow-hidden">
      {/* Background moderno con pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Pattern overlay usando Tailwind */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        
        {/* Elementos geométricos modernos */}
        <div className="absolute top-10 left-[10%] w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 bg-opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-[15%] w-32 h-32 sm:w-48 sm:h-48 bg-indigo-500 bg-opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-[5%] w-16 h-16 sm:w-24 sm:h-24 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Contenido principal */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge superior */}
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-500 bg-opacity-20 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-3 border border-blue-400 border-opacity-30">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Tu tienda online de confianza
            </div>
            
            {/* Título principal */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 leading-tight">
              <span className="block">Bienvenido a</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                GoToBuy
              </span>
            </h1>
            
            {/* Contenido dinámico del slider */}
            <div className="mb-4 min-h-[100px] sm:min-h-[110px] flex flex-col justify-center">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white text-opacity-90 mb-2 transition-all duration-500">
                {slides[currentSlide].title}
              </h2>
              <p className="text-sm sm:text-base text-white text-opacity-70 max-w-2xl mx-auto lg:mx-0 mb-1 transition-all duration-500">
                {slides[currentSlide].description}
              </p>
              <p className="text-xs sm:text-sm text-blue-300 font-medium transition-all duration-500">
                {slides[currentSlide].accent}
              </p>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start mb-4">
              <button 
                onClick={handleScrollToProducts}
                className="group bg-white text-gray-900 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center"
              >
                <Package className="mr-2 w-4 h-4 text-blue-600" />
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/573508470735?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20GoToBuy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center border border-green-500"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contactar ahora
              </a>
            </div>

            {/* Indicadores del slider */}
            <div className="flex justify-center lg:justify-start space-x-2 mb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-6 h-1.5 bg-blue-400' 
                      : 'w-1.5 h-1.5 bg-white bg-opacity-30 hover:bg-white hover:bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Panel lateral con beneficios */}
          <div className="lg:col-span-5">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white border-opacity-20 shadow-2xl">
              <div className="text-center mb-4">
                <h3 className="text-white font-bold text-base sm:text-lg mb-1">¿Por qué elegir GoToBuy?</h3>
                <p className="text-blue-200 text-xs sm:text-sm">Beneficios que nos hacen únicos</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center p-2.5 bg-white bg-opacity-10 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-green-500 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-xs sm:text-sm">Envío gratis</p>
                    <p className="text-blue-200 text-xs">En compras superiores a $80.000</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2.5 bg-white bg-opacity-10 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-blue-500 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-xs sm:text-sm">Pago seguro</p>
                    <p className="text-blue-200 text-xs">Contra entrega disponible</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2.5 bg-white bg-opacity-10 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-yellow-500 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-xs sm:text-sm">Calidad premium</p>
                    <p className="text-blue-200 text-xs">Productos seleccionados</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2.5 bg-white bg-opacity-10 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-purple-500 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-xs sm:text-sm">Soporte 24/7</p>
                    <p className="text-blue-200 text-xs">Atención por WhatsApp</p>
                  </div>
                </div>
              </div>
              
              {/* Estadísticas mini */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white border-opacity-20">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">8+</div>
                  <div className="text-blue-200 text-xs">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">100%</div>
                  <div className="text-blue-200 text-xs">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">24/7</div>
                  <div className="text-blue-200 text-xs">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-4 h-4 text-white text-opacity-70" />
      </div>
    </section>
  );
};

export default Hero;