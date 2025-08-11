import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Package, Search } from 'lucide-react';

const Navbar = ({ cartItems, setShowCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
        ? 'bg-white bg-opacity-95 backdrop-blur-xl shadow-lg border-b border-gray-200 border-opacity-50' 
        : 'bg-white bg-opacity-90 backdrop-blur-xl shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('inicio')}>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-2 mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="font-bold text-lg sm:text-xl lg:text-2xl">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                GoTo
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Buy
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'inicio', label: 'Inicio', icon: '🏠' },
              { id: 'productos', label: 'Productos', icon: '🛍️' },
              { id: 'contacto', label: 'Contacto', icon: '📞' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              >
                <span className="hidden xl:inline mr-2">{item.icon}</span>
                {item.label}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </div>
          
          {/* Acciones del lado derecho */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Búsqueda rápida - Desktop */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-9 pr-4 py-2 w-32 lg:w-48 xl:w-56 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            
            {/* Cart Button */}
            <button 
              onClick={() => setShowCart(true)}
              className="relative bg-gray-900 hover:bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 group shadow-lg"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
              <span className="hidden sm:inline font-medium text-sm">
                {totalItems > 0 ? `(${totalItems})` : 'Carrito'}
              </span>
              {totalItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold animate-pulse shadow-lg">
                  {totalItems > 99 ? '99+' : totalItems}
                </div>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          {/* Búsqueda móvil */}
          <div className="pt-4 pb-3 border-b border-gray-200 border-opacity-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="space-y-1 pt-3">
            {[
              { id: 'inicio', label: 'Inicio', icon: '🏠' },
              { id: 'productos', label: 'Productos', icon: '🛍️' },
              { id: 'contacto', label: 'Contacto', icon: '📞' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 text-left"
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Línea de progreso sutil */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </nav>
  );
};

export default Navbar;