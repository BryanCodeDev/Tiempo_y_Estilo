import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import { products } from './data/products';

// Función para generar URLs SEO-friendly
export const generateProductURL = (product) => {
  if (!product) return '/';
  
  const slug = product.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .trim('-'); // Remover guiones al inicio/final
  
  return `/producto/${product.id}/${slug}`;
};

// Función para actualizar meta tags SEO
const updateSEOTags = (product = null, route = '/') => {
  if (product) {
    // Actualizar título
    document.title = `${product.name} - GoToBuy | Comprar Online con Envío Gratis`;
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `${product.description} Precio: $${product.price.toLocaleString()}. ${product.discount ? `¡${product.discount}% de descuento!` : ''} Envío gratis sobre $80.000. ¡Compra ahora en GoToBuy!`
      );
    }
    
    // Actualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const keywords = `${product.name}, ${product.category}, ${product.sku}, gotobuy, productos premium, envío gratis colombia`;
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Actualizar Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${product.name} - GoToBuy`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', product.description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', `https://gotobuyy.com${product.image}`);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://gotobuyy.com${generateProductURL(product)}`);
    }
    
    // Actualizar canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://gotobuyy.com${generateProductURL(product)}`;
    
    // Agregar JSON-LD structured data
    updateStructuredData(product);
    
  } else {
    // Restaurar meta tags del home
    document.title = 'GoToBuy - Productos Premium para tu Hogar, Belleza y Bienestar';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        '🛒 GoToBuy - Tu tienda online de productos únicos y premium. Masajeadores faciales, humidificadores, utensilios de cocina. Envío gratis sobre $80.000 en Colombia.'
      );
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = 'https://gotobuyy.com/';
    }
  }
};

// Función para actualizar structured data
const updateStructuredData = (product) => {
  // Remover script anterior si existe
  const existingScript = document.querySelector('#product-structured-data');
  if (existingScript) {
    existingScript.remove();
  }
  
  if (!product) return;
  
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [`https://gotobuyy.com${product.image}`],
    "description": product.longDescription || product.description,
    "sku": product.sku,
    "mpn": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "GoToBuy"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://gotobuyy.com${generateProductURL(product)}`,
      "priceCurrency": "COP",
      "price": product.price,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "GoToBuy"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "category": product.category
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'product-structured-data';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Inicializar ruta basada en URL actual
  useEffect(() => {
    const path = window.location.pathname;
    setCurrentRoute(path);
    
    // Si es una ruta de producto, cargar el producto
    if (path.startsWith('/producto/')) {
      const productId = parseInt(path.split('/')[2]);
      const product = products.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        updateSEOTags(product, path);
      } else {
        // Producto no encontrado, redirect a home
        navigateToHome();
      }
    } else {
      updateSEOTags(null, path);
    }
  }, []);

  // Manejar el botón de scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar navegación del navegador
  useEffect(() => {
    const handlePopState = (event) => {
      const path = window.location.pathname;
      setCurrentRoute(path);
      
      if (path.startsWith('/producto/')) {
        const productId = parseInt(path.split('/')[2]);
        const product = products.find(p => p.id === productId);
        if (product) {
          setSelectedProduct(product);
          updateSEOTags(product, path);
        } else {
          navigateToHome();
        }
      } else {
        setSelectedProduct(null);
        updateSEOTags(null, path);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToProduct = (product) => {
    const productURL = generateProductURL(product);
    window.history.pushState(null, '', productURL);
    setCurrentRoute(productURL);
    setSelectedProduct(product);
    updateSEOTags(product, productURL);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    setCurrentRoute('/');
    setSelectedProduct(null);
    updateSEOTags(null, '/');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Renderizar componente según la ruta actual
  const renderCurrentRoute = () => {
    if (currentRoute.startsWith('/producto/') && selectedProduct) {
      return (
        <ProductDetail 
          product={selectedProduct}
          onBack={navigateToHome}
          addToCart={addToCart}
          generateProductURL={generateProductURL}
        />
      );
    }
    
    return (
      <>
        <Hero />
        <ProductCatalog 
          addToCart={addToCart} 
          navigateToProduct={navigateToProduct}
        />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <Navbar 
        cartItems={cartItems} 
        setShowCart={setShowCart}
        onHomeClick={navigateToHome}
        currentRoute={currentRoute}
      />
      
      {/* Contenido principal basado en ruta */}
      {renderCurrentRoute()}
      
      {/* Footer - solo mostrar en home */}
      {currentRoute === '/' && <Footer />}
      
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
            const productText = selectedProduct ? `%0A%0AEstoy%20viendo:%20${selectedProduct.name}` : '';
            window.open(`https://wa.me/573508470735?text=¡Hola!%20Tengo%20una%20consulta%20rápida${productText}`, '_blank');
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