import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Star, Home, Package, Info } from 'lucide-react';

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

  // Función para navegación con SEO
  const handleNavigation = (section) => {
    if (currentRoute !== '/') {
      // Si no estamos en home, navegamos primero al home
      onHomeClick();
      // Esperamos un poco para que se cargue el home y luego hacemos scroll
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en home, hacemos scroll directo
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'hero', label: 'Inicio', icon: Home, href: '/' },
    { id: 'productos', label: 'Productos', icon: Package, href: '/#productos' },
    { id: 'contacto', label: 'Contacto', icon: Phone, href: '/#contacto' },
    { id: 'about', label: 'Nosotros', icon: Info, href: '/#about' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg backdrop-blur-md border-b border-gray-200' 
            : 'bg-white bg-opacity-95 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo con SEO optimizado */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={onHomeClick}
                className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
                aria-label="Ir al inicio de GoToBuy"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">G</span>
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    GoToBuy
                  </h1>
                  <p className="text-xs text-gray-600 hidden sm:block">
                    Productos Premium
                  </p>
                </div>
              </button>
            </div>

            {/* Navegación desktop con SEO */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = (item.id === 'hero' && currentRoute === '/') || 
                                currentRoute.includes(item.id);
                
                return (
                  <button
                    key={item.id}
                    onClick={() => item.id === 'hero' ? onHomeClick() : handleNavigation(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 shadow-sm'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                    aria-label={`Ir a ${item.label}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Acciones del usuario */}
            <div className="flex items-center space-x-3">
              
              {/* Indicador de calificación */}
              <div className="hidden lg:flex items-center space-x-1 bg-yellow-50 px-3 py-1.5 rounded-lg">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-700">4.9</span>
                <span className="text-xs text-yellow-600">(127)</span>
              </div>

              {/* Botón del carrito con contador */}
              <button
                onClick={() => setShowCart(true)}
                className="relative p-2 sm:p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label={`Carrito de compras - ${totalItems} productos`}
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                
                {totalItems > 0 && (
                  <>
                    {/* Contador de productos */}
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1 shadow-lg animate-pulse">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                    
                    {/* Animación de pulso para items nuevos */}
                    <div className="absolute inset-0 bg-blue-500 rounded-lg animate-ping opacity-20"></div>
                  </>
                )}
              </button>

              {/* Menú hamburguesa mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Abrir menú de navegación"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil expandible con SEO */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 border-b border-gray-200' 
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-white`}>
          
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
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 shadow-sm'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  aria-label={`Ir a ${item.label}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}

            {/* Separador */}
            <div className="border-t border-gray-200 my-4"></div>
            
            {/* WhatsApp link en mobile */}
            <a
              href="https://wa.me/573508470735?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20GoToBuy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center space-x-3 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Contactar WhatsApp</span>
            </a>

            {/* Información de confianza */}
            <div className="flex items-center justify-center space-x-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-medium">4.9/5.0</span>
              </div>
              <div className="flex items-center space-x-1">
                <Package className="w-4 h-4 text-green-600" />
                <span className="font-medium">Envío Gratis</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Espaciador para el navbar fijo */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;