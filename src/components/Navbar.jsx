import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Package, 
  Search,
  Home,
  ShoppingBag,
  Phone
} from 'lucide-react';

const Navbar = ({ cartItems, setShowCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Buscando:', searchTerm);
      handleNavClick('productos');
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'productos', label: 'Productos', icon: ShoppingBag },
    { id: 'contacto', label: 'Contacto', icon: Phone }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-xl shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo responsivo */}
          <div 
            className="flex items-center cursor-pointer group min-w-0" 
            onClick={() => handleNavClick('inicio')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl p-1.5 sm:p-2 mr-2 sm:mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex-shrink-0">
              <Package className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white" />
            </div>
            <div className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl truncate">
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
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button 
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-3 xl:px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group flex items-center"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span className="text-sm xl:text-base">{item.label}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
              );
            })}
          </div>
          
          {/* Acciones del lado derecho */}
          <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
            
            {/* Búsqueda - Solo desktop */}
            <div className="hidden lg:flex relative flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 z-10" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                  className="pl-9 pr-10 py-2 xl:py-2.5 w-40 xl:w-56 bg-white border border-gray-300 rounded-lg xl:rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md focus:shadow-lg"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-lg font-bold leading-none"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
            
            {/* Cart Button */}
            <button 
              onClick={() => setShowCart(true)}
              className="relative bg-gray-900 hover:bg-gray-800 text-white px-2 sm:px-3 py-2 rounded-lg xl:rounded-xl transition-all duration-300 flex items-center space-x-1 sm:space-x-2 hover:scale-105 group shadow-lg flex-shrink-0"
            >
              <ShoppingCart className="h-4 w-4 group-hover:animate-pulse" />
              <span className="hidden sm:inline font-medium text-xs sm:text-sm">
                {totalItems > 0 ? `(${totalItems})` : 'Carrito'}
              </span>
              {totalItems > 0 && (
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold animate-pulse shadow-lg">
                  {totalItems > 99 ? '99+' : totalItems}
                </div>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 flex-shrink-0"
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
          <div className="pt-3 pb-3 border-b border-gray-200/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 z-10" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                className="w-full pl-9 pr-10 py-3 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-lg font-bold"
                >
                  ×
                </button>
              )}
            </div>
          </div>
          
          <div className="space-y-1 pt-3">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button 
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 text-left"
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Línea de progreso */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </nav>
  );
};

export default Navbar;