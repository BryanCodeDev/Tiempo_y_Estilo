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
    <div className="min-h-screen bg-gray-50">
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
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
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

      {/* Estilos globales mejorados */}
      <style jsx global>{`
        /* Scroll padding para anclas */
        html {
          scroll-padding-top: 80px;
          scroll-behavior: smooth;
        }

        /* Scrollbar personalizado */
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
          * {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            touch-action: manipulation;
          }
        }

        /* Mejorar selección de texto */
        ::selection {
          background-color: rgb(219 234 254);
          color: rgb(30 58 138);
        }

        /* Animación suave para transiciones */
        * {
          transition-property: background-color, border-color, color, fill, stroke, opacity, transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        /* Fix para imágenes responsivas */
        img {
          max-width: 100%;
          height: auto;
        }

        /* Mejorar accesibilidad en focus */
        button:focus,
        a:focus,
        input:focus,
        select:focus,
        textarea:focus {
          outline: 2px solid rgb(59 130 246);
          outline-offset: 2px;
        }

        /* Animaciones optimizadas */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-30px,0);
          }
          70% {
            transform: translate3d(0,-15px,0);
          }
          90% {
            transform: translate3d(0,-4px,0);
          }
        }

        /* Clases utilitarias personalizadas */
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        /* Grid responsivo mejorado */
        .responsive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .responsive-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1rem;
          }
        }

        /* Contenedor principal responsivo */
        .main-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 640px) {
          .main-container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .main-container {
            padding: 0 2rem;
          }
        }

        /* Fix para overflow en móviles */
        .mobile-safe {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Espaciado responsivo para secciones */
        .section-padding {
          padding: 2rem 0;
        }

        @media (min-width: 640px) {
          .section-padding {
            padding: 3rem 0;
          }
        }

        @media (min-width: 1024px) {
          .section-padding {
            padding: 4rem 0;
          }
        }

        /* Botones responsivos */
        .btn-responsive {
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
        }

        @media (min-width: 640px) {
          .btn-responsive {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        /* Texto responsivo */
        .text-responsive-sm {
          font-size: 0.875rem;
        }

        @media (min-width: 640px) {
          .text-responsive-sm {
            font-size: 1rem;
          }
        }

        .text-responsive-base {
          font-size: 1rem;
        }

        @media (min-width: 640px) {
          .text-responsive-base {
            font-size: 1.125rem;
          }
        }

        /* Mejoras de performance */
        .will-change-transform {
          will-change: transform;
        }

        .will-change-opacity {
          will-change: opacity;
        }

        /* Loading states */
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, transparent 37%, #f0f0f0 63%);
          background-size: 400% 100%;
          animation: skeleton-loading 1.4s ease infinite;
        }

        @keyframes skeleton-loading {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Print styles */
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;