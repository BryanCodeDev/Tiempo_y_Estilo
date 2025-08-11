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
      const existingItem = prevItems.find(item => 
        item.id === product.id && item.sku === product.sku
      );
      
      if (existingItem) {
        return prevItems.map(item =>
          (item.id === product.id && item.sku === product.sku)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Crear un ID único para el carrito que incluya variantes
        const cartId = `${product.id}-${product.sku || 'default'}`;
        return [...prevItems, { 
          ...product, 
          cartId,
          quantity: 1 
        }];
      }
    });
    
    // Feedback visual opcional
    const button = document.activeElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.cartId === cartId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (cartId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
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
      
      {/* Botones flotantes responsivos */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        
        {/* Botón principal de WhatsApp */}
        <a
          href="https://wa.me/573508470735?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20productos%20de%20GoToBuy"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-600 hover:bg-green-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
          title="Contáctanos por WhatsApp"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <Phone className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Indicador de notificación */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
        </a>

        {/* Botón secundario de chat rápido */}
        <button
          className="group bg-white hover:bg-gray-50 text-gray-700 hover:text-green-600 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
          title="Chat rápido"
          onClick={() => {
            window.open('https://wa.me/573508470735?text=¡Hola!%20Tengo%20una%20consulta%20rápida', '_blank');
          }}
        >
          <MessageCircle className="h-4 w-4 group-hover:animate-pulse" />
        </button>
      </div>

      {/* Botón de scroll to top responsivo */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 left-4 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 transform ${
          showScrollTop 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-16 opacity-0'
        }`}
        title="Ir arriba"
        aria-label="Ir arriba"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}

export default App;