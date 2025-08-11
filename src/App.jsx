import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
    
    // Notificación visual mejorada
    console.log(`${product.name} agregado al carrito`);
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

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar moderno */}
      <Navbar cartItems={cartItems} setShowCart={setShowCart} />
      
      {/* Hero Section compacto */}
      <Hero />
      
      {/* Product Catalog rediseñado */}
      <ProductCatalog addToCart={addToCart} />
      
      {/* Footer profesional */}
      <Footer />
      
      {/* Cart Sidebar moderno */}
      <Cart 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      {/* Botón flotante de WhatsApp rediseñado */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        
        {/* Botón principal de WhatsApp */}
        <a
          href="https://wa.me/573008226497?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20productos%20de%20GoToBuy"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
          title="Contáctanos por WhatsApp"
        >
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Indicador de actividad */}
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

      {/* Botón de scroll to top - Nuevo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 opacity-0 hover:opacity-100 focus:opacity-100"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 400 ? 1 : 0
        }}
        title="Ir arriba"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Overlay de carga global (opcional) */}
      <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="global-loader">
        <div className="text-center">
          <div className="loader-modern mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm">Cargando GoToBuy...</p>
        </div>
      </div>

      {/* Estilos específicos del componente */}
      <style jsx>{`
        /* Scroll behavior personalizado */
        html {
          scroll-padding-top: 80px;
        }

        /* Animaciones para botones flotantes */
        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .float-animation {
          animation: floatAnimation 3s ease-in-out infinite;
        }

        /* Efectos de glassmorphism para botones flotantes */
        .glass-button {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Mejoras de performance */
        .will-change-scroll {
          will-change: scroll-position;
        }

        /* Efectos de focus mejorados */
        .focus-ring-modern {
          @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white;
        }

        /* Custom scrollbar para toda la app */
        * {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f8fafc;
        }

        *::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        *::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 3px;
        }

        *::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
          transition: background 0.3s ease;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* Optimizaciones para móviles */
        @media (max-width: 768px) {
          .mobile-optimized {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            touch-action: manipulation;
          }
        }

        /* Efectos de entrada para la página */
        .page-enter {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Smooth transitions para cambios de tema */
        * {
          transition-property: background-color, border-color, color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}</style>
    </div>
  );
}

export default App;