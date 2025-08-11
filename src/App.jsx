import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Manejar el botón de scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <Navbar cartItems={cartItems} setShowCart={setShowCart} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Product Catalog */}
      <ProductCatalog addToCart={addToCart} />
      
      {/* Footer */}
      <Footer />
      
      {/* Cart Sidebar */}
      <Cart 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      {/* Botones flotantes - WhatsApp */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        
        {/* Botón principal de WhatsApp */}
        <a
          href="https://wa.me/573008226497?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20productos%20de%20GoToBuy"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
          title="Contáctanos por WhatsApp"
        >
          {/* Efecto de brillo usando pseudo-elemento */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Indicador de notificación */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
        </a>

        {/* Botón secundario de chat rápido */}
        <button
          className="group bg-white hover:bg-gray-50 text-gray-700 hover:text-green-600 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
          title="Chat rápido"
          onClick={() => {
            window.open('https://wa.me/573008226497?text=¡Hola!%20Tengo%20una%20consulta%20rápida', '_blank');
          }}
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
        </button>
      </div>

      {/* Botón de scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 transform ${
          showScrollTop 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-16 opacity-0'
        }`}
        title="Ir arriba"
        aria-label="Ir arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;