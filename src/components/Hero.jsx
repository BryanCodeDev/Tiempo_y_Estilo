import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Shield, ChevronDown, Gem, Watch, Crown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Joyas que cuentan historias",
      description: "Cada pieza está diseñada para reflejar tu personalidad única y complementar tu estilo personal",
      cta: "Explorar Colección",
      accent: "Piezas exclusivas • Diseño artesanal"
    },
    {
      title: "Relojes que marcan tendencia",
      description: "Descubre nuestra colección de relojes premium que combinan precisión suiza con diseño contemporáneo",
      cta: "Ver Relojes",
      accent: "Movimientos automáticos • Acabados premium"
    },
    {
      title: "Tu estilo, nuestra pasión",
      description: "Cada joya y reloj es seleccionado personalmente para garantizar la máxima calidad y exclusividad",
      cta: "Asesoría Personal",
      accent: "Atención VIP • Garantía de autenticidad"
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
    <section id="inicio" className="relative min-h-[80vh] flex items-center overflow-hidden bg-pearl-gradient py-2 sm:py-4">
      {/* Background elegante */}
      <div className="absolute inset-0">
        {/* Patrón de diamantes sutil */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(139,0,0,0.4)_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
        </div>

        {/* Elementos flotantes elegantes */}
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-[5%] w-24 h-24 bg-gradient-to-br from-luxury/30 to-secondary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>

        {/* Líneas de luz elegantes */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container-luxury w-full py-1 sm:py-2 md:py-3 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* Contenido principal elegante */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6">
            {/* Badge de lujo */}
            <div className="inline-flex items-center px-6 py-3 glass-luxury rounded-full text-primary text-sm font-semibold shadow-luxury animate-shimmer">
              <Crown className="w-4 h-4 mr-3 text-secondary animate-pulse" />
              <span className="tracking-wider">JOYERÍA DE LUJO</span>
              <Sparkles className="w-4 h-4 ml-3 text-secondary animate-pulse" />
            </div>

            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <img
                src="/assets/images/logo.webp"
                alt="Tiempo y Estilo - Logo"
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto mx-auto lg:mx-0"
              />
            </div>

            {/* Título principal sofisticado */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-display">
              <span className="block mb-4 text-primary">Tu tiempo</span>
              <span className="block text-gold animate-shimmer">
                define tu estilo
              </span>
            </h1>

            {/* Contenido dinámico elegante */}
            <div className="min-h-[120px] sm:min-h-[140px] flex flex-col justify-center">
              <div className="glass-luxury rounded-2xl p-4 sm:p-6 border border-secondary/20 shadow-luxury backdrop-blur-xl">
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-4 transition-all duration-700 font-display">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 transition-all duration-700">
                  {slides[currentSlide].description}
                </p>
                <p className="text-sm text-secondary font-medium transition-all duration-700 flex items-center justify-center lg:justify-start">
                  <Gem className="w-4 h-4 mr-2" />
                  {slides[currentSlide].accent}
                </p>
              </div>
            </div>

            {/* Botones de acción premium */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToProducts}
                className="group bg-ruby-gradient hover:opacity-90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-luxury hover:shadow-2xl hover:scale-105 flex items-center justify-center animate-gradient"
              >
                <Gem className="mr-3 w-5 h-5" />
                {slides[currentSlide].cta}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/573146081297?text=¡Hola!%20Me%20interesa%20la%20colección%20premium%20de%20TIEMPO%20Y%20ESTILO"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gold-gradient hover:opacity-90 text-primary px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-gold hover:shadow-2xl hover:scale-105 flex items-center justify-center animate-gradient"
              >
                <Phone className="mr-3 w-5 h-5" />
                Asesoría VIP
              </a>
            </div>

            {/* Indicadores elegantes del slider */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-500 rounded-full border-2 ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-gold-gradient border-secondary shadow-gold animate-gradient'
                      : 'w-3 h-3 bg-gray-300 border-gray-400 hover:bg-secondary/50 hover:border-secondary'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Panel lateral con características premium */}
          <div className="lg:col-span-1">
            <div className="glass-luxury rounded-3xl p-4 sm:p-6 border border-secondary/20 shadow-luxury backdrop-blur-xl">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-gradient rounded-full mb-4 shadow-gold animate-glow">
                  <Crown className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2 font-display">¿Por qué elegirnos?</h3>
                <p className="text-gray-600">Excelencia en cada detalle</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl hover:from-primary/10 transition-all duration-300 group border border-primary/10">
                  <div className="bg-ruby-gradient p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-luxury">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-bold text-lg font-display">Joyas Exclusivas</p>
                    <p className="text-gray-600 text-sm">Diseños únicos y materiales premium</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl hover:from-secondary/10 transition-all duration-300 group border border-secondary/10">
                  <div className="bg-gold-gradient p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-gold">
                    <Watch className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-bold text-lg font-display">Relojes Premium</p>
                    <p className="text-gray-600 text-sm">Precisión suiza y acabados artesanales</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-luxury/5 to-transparent rounded-xl hover:from-luxury/10 transition-all duration-300 group border border-luxury/10">
                  <div className="bg-gradient-to-br from-luxury to-secondary p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-bold text-lg font-display">Garantía Total</p>
                    <p className="text-gray-600 text-sm">Autenticidad y calidad garantizadas</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-whatsapp-500/5 to-transparent rounded-xl hover:from-whatsapp-500/10 transition-all duration-300 group border border-whatsapp-500/10">
                  <div className="bg-gradient-to-br from-whatsapp-500 to-whatsapp-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-bold text-lg font-display">Asesoría VIP</p>
                    <p className="text-gray-600 text-sm">Atención personalizada 24/7</p>
                  </div>
                </div>
              </div>

              {/* Estadísticas de lujo */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-secondary/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1 font-display">500+</div>
                  <div className="text-gray-600 text-xs">Piezas Exclusivas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 font-display">100%</div>
                  <div className="text-gray-600 text-xs">Autenticidad</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury mb-1 font-display">24/7</div>
                  <div className="text-gray-600 text-xs">Soporte VIP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll elegante */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-primary/70">
          <span className="text-sm mb-2 tracking-wider font-semibold">DESCUBRE MÁS</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;