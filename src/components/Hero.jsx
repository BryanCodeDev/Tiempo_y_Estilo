import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Shield, ChevronDown, Gem, Watch, Crown, Sparkles, Star, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Elegancia Atemporal",
      description: "Descubre piezas de joyería fina que trascienden modas y permanecen como símbolos de distinción y buen gusto",
      cta: "Explorar Colección",
      accent: "Diseño exclusivo • Materiales nobles"
    },
    {
      title: "Relojería de Prestigio",
      description: "Relojes de alta gama que combinan precisión técnica excepcional con diseño refinado y acabados impecables",
      cta: "Ver Relojes",
      accent: "Mecanismos de precisión • Ediciones limitadas"
    },
    {
      title: "Calidad sin Compromisos",
      description: "Cada pieza es cuidadosamente seleccionada para garantizar autenticidad, exclusividad y la máxima satisfacción",
      cta: "Asesoría Especializada",
      accent: "Certificación de autenticidad • Garantía extendida"
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
    <section id="inicio" className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white py-4 sm:py-6 pb-24 sm:pb-28 md:pb-32">
      {/* Background sofisticado */}
      <div className="absolute inset-0">
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.4)_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
        </div>

        {/* Elementos flotantes refinados */}
        <div className="absolute top-20 left-[10%] w-40 h-40 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-56 h-56 bg-gradient-to-br from-accent/10 to-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-[5%] w-32 h-32 bg-gradient-to-br from-secondary/15 to-accent/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>

        {/* Líneas divisorias elegantes */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container-luxury w-full py-2 sm:py-4 md:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Contenido principal */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge premium */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-black text-sm font-semibold shadow-lg border-2 border-secondary/20">
              <Crown className="w-4 h-4 mr-3 text-secondary" />
              <span className="tracking-widest">JOYERÍA & RELOJERÍA PREMIUM</span>
              <Sparkles className="w-4 h-4 ml-3 text-secondary" />
            </div>

            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <img
                src="/assets/images/logo.webp"
                alt="Tiempo y Estilo - Joyería y Relojería de Lujo"
                className="h-14 sm:h-18 md:h-22 lg:h-28 w-auto mx-auto lg:mx-0 drop-shadow-lg"
              />
            </div>

            {/* Título principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-display">
              <span className="block mb-3 text-black">Tu Tiempo,</span>
              <span className="block text-secondary">
                Tu Estilo
              </span>
            </h1>

            {/* Contenido dinámico con altura fija */}
            <div className="h-[200px] sm:h-[220px] flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-5 sm:p-7 border-2 border-secondary/20 shadow-xl backdrop-blur-xl h-full flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-3 transition-opacity duration-700 font-display min-h-[40px] flex items-center">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-3 transition-opacity duration-700 min-h-[72px] flex items-center">
                  {slides[currentSlide].description}
                </p>
                <p className="text-sm text-secondary font-semibold transition-opacity duration-700 flex items-center justify-center lg:justify-start min-h-[24px]">
                  <Gem className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{slides[currentSlide].accent}</span>
                </p>
              </div>
            </div>

            {/* Botones de acción con tamaño fijo */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToProducts}
                className="group bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center min-w-[240px]"
              >
                <Gem className="mr-2 w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Explorar Colección</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
              <a
                href="https://wa.me/573146081297?text=Hola,%20estoy%20interesado%20en%20conocer%20su%20colección%20de%20joyería%20y%20relojería%20premium"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-whatsapp hover:opacity-90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center min-w-[240px]"
              >
                <Phone className="mr-2 w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Contactar Asesor</span>
              </a>
            </div>

            {/* Indicadores del slider */}
            <div className="flex justify-center lg:justify-start space-x-3 pt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-500 rounded-full border-2 ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-gradient-to-r from-secondary to-accent border-secondary shadow-lg'
                      : 'w-3 h-3 bg-gray-300 border-gray-400 hover:bg-secondary/50 hover:border-secondary'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Panel lateral con características */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-secondary/20 shadow-2xl backdrop-blur-xl">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full mb-4 shadow-lg">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2 font-display">Excelencia Garantizada</h3>
                <p className="text-gray-600 font-medium">Compromiso con la calidad superior</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl hover:from-secondary/10 transition-all duration-300 group border border-secondary/20">
                  <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg font-display">Joyería Fina</p>
                    <p className="text-gray-600 text-sm">Piezas únicas con materiales certificados</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-xl hover:from-accent/10 transition-all duration-300 group border border-accent/20">
                  <div className="bg-gradient-to-br from-accent to-secondary p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Watch className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg font-display">Relojería de Lujo</p>
                    <p className="text-gray-600 text-sm">Mecanismos de alta precisión garantizada</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl hover:from-secondary/10 transition-all duration-300 group border border-secondary/20">
                  <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg font-display">Autenticidad Certificada</p>
                    <p className="text-gray-600 text-sm">Productos originales con documentación</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-whatsapp/5 to-transparent rounded-xl hover:from-whatsapp/10 transition-all duration-300 group border border-whatsapp/20">
                  <div className="bg-whatsapp p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg font-display">Atención Personalizada</p>
                    <p className="text-gray-600 text-sm">Asesoría experta disponible 24/7</p>
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t-2 border-secondary/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1 font-display">100+</div>
                  <div className="text-gray-600 text-xs font-semibold">Diseños Exclusivos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <span className="text-3xl font-bold text-secondary font-display">5.0</span>
                    <Star className="w-5 h-5 text-secondary fill-current ml-1" />
                  </div>
                  <div className="text-gray-600 text-xs font-semibold">Calificación</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1 font-display">24/7</div>
                  <div className="text-gray-600 text-xs font-semibold">Disponibilidad</div>
                </div>
              </div>

              {/* Sellos de confianza */}
              <div className="mt-6 pt-6 border-t-2 border-secondary/20">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div className="flex items-center bg-gradient-to-r from-secondary/10 to-transparent px-4 py-2 rounded-lg border border-secondary/20">
                    <Award className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-xs font-bold text-black">Envío Gratis</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-secondary/10 to-transparent px-4 py-2 rounded-lg border border-secondary/20">
                    <Shield className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-xs font-bold text-black">Compra Segura</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-secondary/10 to-transparent px-4 py-2 rounded-lg border border-secondary/20">
                    <Gem className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-xs font-bold text-black">100% Original</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll en posición balanceada */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={handleScrollToProducts}
          className="flex flex-col items-center text-white bg-gradient-to-r from-secondary to-accent px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce border-2 border-white/30"
        >
          <span className="text-xs font-bold tracking-widest mb-1">EXPLORAR COLECCIÓN</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;