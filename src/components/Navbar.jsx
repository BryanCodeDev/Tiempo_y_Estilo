import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Store } from 'lucide-react';

const Navbar = ({ cartItems, setShowCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100' 
        : 'bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 shadow-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('inicio')}>
            <div className={`rounded-xl p-2 mr-3 transition-all duration-300 ${
              isScrolled ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'
            }`}>
              <Store className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <span className="hidden sm:inline">Mi Tienda Virtual</span>
              <span className="sm:hidden">MiTienda</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('inicio')}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavClick('productos')}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Productos
            </button>
            <button 
              onClick={() => handleNavClick('contacto')}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Contacto
            </button>
          </div>
          
          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Cart Button */}
            <button 
              onClick={() => setShowCart(true)}
              className={`relative px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 group ${
                isScrolled 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg' 
                  : 'bg-white text-emerald-600 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
              <span className="hidden sm:inline font-medium">Carrito</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold animate-pulse shadow-lg">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="space-y-2 pt-4 border-t border-emerald-500/20">
            <button 
              onClick={() => handleNavClick('inicio')}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              🏠 Inicio
            </button>
            <button 
              onClick={() => handleNavClick('productos')}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              🛍️ Productos
            </button>
            <button 
              onClick={() => handleNavClick('contacto')}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              📞 Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;