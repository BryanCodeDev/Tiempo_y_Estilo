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
    <section id="inicio" className="relative pt-16 sm:pt-20 pb-8 min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] flex items-center">
      {/* Background moderno con pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Pattern de dots */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Elementos geométricos modernos */}
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[15%] w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-[5%] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Contenido principal - Más compacto */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge superior */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-4 border border-blue-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Tu tienda online de confianza
            </div>
            
            {/* Título principal - Más compacto */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight">
              <span className="block">Bienvenido a</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                GoToBuy
              </span>
            </h1>
            
            {/* Contenido dinámico del slider */}
            <div className="mb-6 min-h-[120px] flex flex-col justify-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/90 mb-3">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 mb-2">
                {slides[currentSlide].description}
              </p>
              <p className="text-sm text-blue-300 font-medium">
                {slides[currentSlide].accent}
              </p>
            </div>
            
            {/* Botones de acción - Diseño más moderno */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <button 
                onClick={handleScrollToProducts}
                className="group bg-white text-gray-900 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center"
              >
                <Package className="mr-2 w-5 h-5 text-blue-600" />
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/573008226497?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20GoToBuy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center border border-green-500"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contactar ahora
              </a>
            </div>

            {/* Indicadores del slider - Modernos */}
            <div className="flex justify-center lg:justify-start space-x-2 mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 h-2 bg-blue-400' 
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Panel lateral con beneficios - Rediseñado */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-lg mb-2">¿Por qué elegir GoToBuy?</h3>
                <p className="text-blue-200 text-sm">Beneficios que nos hacen únicos</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <div className="bg-green-500 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Envío gratis</p>
                    <p className="text-blue-200 text-xs">En compras superiores a $80.000</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Pago seguro</p>
                    <p className="text-blue-200 text-xs">Contra entrega disponible</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <div className="bg-yellow-500 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Calidad premium</p>
                    <p className="text-blue-200 text-xs">Productos seleccionados</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <div className="bg-purple-500 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Soporte 24/7</p>
                    <p className="text-blue-200 text-xs">Atención por WhatsApp</p>
                  </div>
                </div>
              </div>
              
              {/* Estadísticas mini */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">8+</div>
                  <div className="text-blue-200 text-xs">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-blue-200 text-xs">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">24/7</div>
                  <div className="text-blue-200 text-xs">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator minimalista */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;