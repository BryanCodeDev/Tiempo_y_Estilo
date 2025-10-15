import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Star, Home, Crown } from 'lucide-react';

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
    // Cerrar menú móvil inmediatamente
    setIsMenuOpen(false);

    if (section === 'productos') {
      if (currentRoute !== '/') {
        onHomeClick();
        // Navegar después de que se complete la navegación a home
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
        // Navegar después de que se complete la navegación a home
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
    { id: 'productos', label: 'Colección', icon: Crown, href: '#productos' },
    { id: 'contacto', label: 'Contacto', icon: Phone, href: '#contacto' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-yellow-400/20'
            : 'bg-white/90 backdrop-blur-md shadow-lg'
        }`}
        role="navigation"
        aria-label="Navegación principal de TIEMPO Y ESTILO"
      >
        <div className="container-luxury">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">

            {/* Logo elegante */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={onHomeClick}
                className="flex items-center space-x-3 group transition-all duration-500 hover:scale-105"
                aria-label="Ir al inicio de TIEMPO Y ESTILO - Joyería y Relojería"
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-ruby-gradient rounded-2xl flex items-center justify-center shadow-luxury animate-gradient relative overflow-hidden">
                    <Crown className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse shadow-gold"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-display">
                    <span className="text-primary animate-pulse">TIEMPO Y ESTILO</span>
                  </h1>
                  <p className="text-xs sm:text-xs lg:text-sm text-secondary font-semibold tracking-wider font-display">
                    TU TIEMPO, DEFINE TU ESTILO
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
                    className={`group px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
                      isActive
                        ? 'bg-ruby-gradient text-white shadow-luxury animate-gradient'
                        : 'text-primary hover:text-white hover:bg-ruby-gradient'
                    }`}
                    aria-label={`Ir a ${item.label}`}
                  >
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="tracking-wide relative z-10">{item.label}</span>
                    {!isActive && (
                      <div className="absolute inset-0 bg-ruby-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Acciones del usuario */}
            <div className="flex items-center space-x-3">

              {/* Indicador de calidad */}
              <div className="hidden xl:flex items-center space-x-2 glass-luxury px-4 py-2 rounded-xl shadow-lg">
                <Star className="w-4 h-4 text-secondary fill-current animate-pulse" />
                <span className="text-sm font-bold text-primary">Premium</span>
                <span className="text-xs text-luxury">★★★★★</span>
              </div>

              {/* Botón del carrito */}
              <button
                onClick={() => setShowCart(true)}
                className="relative p-3 lg:p-4 glass-luxury rounded-xl hover:shadow-luxury transition-all duration-300 hover:scale-110 group"
                aria-label={`Carrito de compras - ${totalItems} productos`}
              >
                <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 text-primary group-hover:text-luxury transition-colors duration-300" />

                {totalItems > 0 && (
                  <>
                    <span className="absolute -top-2 -right-2 bg-gold-gradient text-primary font-bold text-xs min-w-[24px] h-6 rounded-full flex items-center justify-center px-1 shadow-gold animate-bounce border-2 border-white">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  </>
                )}
              </button>

              {/* Menú hamburguesa mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 glass-luxury rounded-xl transition-all duration-300 hover:shadow-luxury"
                aria-label="Abrir menú de navegación"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-primary" />
                ) : (
                  <Menu className="h-6 w-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        } overflow-hidden glass-luxury border-t border-secondary/20`}>
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
                      ? 'bg-ruby-gradient text-white shadow-luxury'
                      : 'text-primary hover:bg-ruby-gradient hover:text-white'
                  }`}
                  aria-label={`Ir a ${item.label}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-base tracking-wide">{item.label}</span>
                </button>
              );
            })}

            {/* Separador */}
            <div className="border-t border-secondary/20 my-4"></div>

            {/* WhatsApp mobile */}
            <a
              href="https://wa.me/573146081297?text=¡Hola!%20Me%20interesa%20la%20colección%20de%20TIEMPO%20Y%20ESTILO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Asesoría Personalizada</span>
            </a>

            {/* Info adicional */}
            <div className="flex items-center justify-center space-x-6 pt-4 text-sm text-primary/70">
              <div className="flex items-center space-x-2">
                <Crown className="w-4 h-4 text-secondary" />
                <span className="font-medium">Joyas Exclusivas</span>
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