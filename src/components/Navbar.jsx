import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Star, Home, Crown, Gem } from 'lucide-react';

const Navbar = ({ cartItems, setShowCart, onHomeClick, currentRoute }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section) => {
    setIsMenuOpen(false);

    if (section === 'productos') {
      if (currentRoute !== '/') {
        onHomeClick();
        setTimeout(() => {
          const element = document.getElementById('productos');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else {
        const element = document.getElementById('productos');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      if (currentRoute !== '/') {
        onHomeClick();
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const navigationItems = [
    { id: 'hero', label: 'Inicio', icon: Home, href: '/' },
    { id: 'productos', label: 'Colección Premium', icon: Gem, href: '#productos' },
    { id: 'contacto', label: 'Atención al Cliente', icon: Phone, href: '#contacto' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-secondary/20'
            : 'bg-white/95 backdrop-blur-lg shadow-xl'
        }`}
        role="navigation"
        aria-label="Navegación principal de TIEMPO Y ESTILO"
      >
        <div className="container-luxury">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">

            {/* Logo profesional */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={onHomeClick}
                className="flex items-center space-x-3 group transition-all duration-500 hover:scale-105"
                aria-label="TIEMPO Y ESTILO - Joyería y Relojería de Alta Gama"
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
                    <Crown className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full shadow-lg"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-display text-black leading-none">
                    TIEMPO Y ESTILO
                  </h1>
                  <p className="text-xs sm:text-xs lg:text-sm text-secondary font-semibold tracking-widest font-display mt-0.5">
                    JOYERÍA & RELOJERÍA
                  </p>
                </div>
              </button>
            </div>

            {/* Navegación desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = (item.id === 'hero' && currentRoute === '/') ||
                                currentRoute.includes(item.id);

                return (
                  <button
                    key={item.id}
                    onClick={() => item.id === 'hero' ? onHomeClick() : handleNavigation(item.id)}
                    className={`group px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
                      isActive
                        ? 'bg-secondary text-white shadow-lg'
                        : 'text-black hover:text-white hover:bg-secondary hover:shadow-lg'
                    }`}
                    aria-label={`Ir a ${item.label}`}
                  >
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="tracking-wide relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Acciones del usuario */}
            <div className="flex items-center space-x-3">

              {/* Indicador de calidad premium */}
              <div className="hidden xl:flex items-center space-x-2 bg-gradient-to-r from-secondary-50 to-white px-5 py-2.5 rounded-xl shadow-md border border-secondary/20">
                <Star className="w-4 h-4 text-secondary fill-current" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black leading-tight">Calidad Premium</span>
                  <span className="text-xs text-secondary font-semibold">★★★★★</span>
                </div>
              </div>

              {/* Botón del carrito mejorado */}
              <button
                onClick={() => setShowCart(true)}
                className="relative p-3 lg:p-4 bg-white rounded-xl hover:bg-secondary hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-secondary/20"
                aria-label={`Carrito de compras - ${totalItems} productos`}
              >
                <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 text-black group-hover:text-white transition-colors duration-300" />

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white font-bold text-xs min-w-[24px] h-6 rounded-full flex items-center justify-center px-1.5 shadow-lg animate-pulse border-2 border-white">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              {/* Menú hamburguesa mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 bg-white rounded-xl transition-all duration-300 hover:bg-secondary hover:shadow-lg group border border-secondary/20"
                aria-label="Abrir menú de navegación"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-black group-hover:text-white transition-colors" />
                ) : (
                  <Menu className="h-6 w-6 text-black group-hover:text-white transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil mejorado */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/98 backdrop-blur-xl border-t border-secondary/20`}>
          <div className="px-4 py-6 space-y-3">

            {/* Items de navegación mobile */}
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = (item.id === 'hero' && currentRoute === '/') ||
                              currentRoute.includes(item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => item.id === 'hero' ? onHomeClick() : handleNavigation(item.id)}
                  className={`w-full flex items-center space-x-3 px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-secondary text-white shadow-lg'
                      : 'text-black hover:bg-secondary hover:text-white hover:shadow-lg'
                  }`}
                  aria-label={`Ir a ${item.label}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-base tracking-wide">{item.label}</span>
                </button>
              );
            })}

            {/* Separador elegante */}
            <div className="border-t border-secondary/20 my-4"></div>

            {/* WhatsApp mobile profesional */}
            <a
              href="https://wa.me/573146081297?text=Hola,%20estoy%20interesado%20en%20su%20colección%20de%20joyería%20y%20relojería%20premium"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center space-x-3 px-6 py-4 bg-whatsapp text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Asesoría Especializada</span>
            </a>

            {/* Info adicional profesional */}
            <div className="flex items-center justify-center space-x-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Crown className="w-4 h-4 text-secondary" />
                <span className="font-medium">Piezas Exclusivas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gem className="w-4 h-4 text-secondary" />
                <span className="font-medium">Alta Calidad</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Espaciador para el navbar fijo */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;