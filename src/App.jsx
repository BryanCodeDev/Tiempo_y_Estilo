import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ErrorBoundary from './components/ErrorBoundary';
import RouteErrorHandler from './components/RouteErrorHandler';
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
    .replace(/^-+|-+$/g, ''); // Remover guiones al inicio/final
  
  return `/producto/${product.id}/${slug}`;
};

// Función para actualizar meta tags SEO
const updateSEOTags = (product = null, route = '/') => {
  if (product) {
    document.title = `${product.name} - Tiempo y Estilo | Joyería y Relojería con Envío Gratis`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `${product.description} Precio: $${product.price.toLocaleString()}. ${product.discount ? `¡${product.discount}% de descuento!` : ''} Envío gratis. ¡Compra ahora en Tiempo y Estilo!`
      );
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const keywords = `${product.name}, ${product.category}, ${product.sku}, joyería, relojes, plata 925, tiempoyestilo, envío gratis colombia`;
      metaKeywords.setAttribute('content', keywords);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${product.name} - Tiempo y Estilo Joyería`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', product.description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', `${product.image}`);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `${generateProductURL(product)}`);
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${generateProductURL(product)}`;
    
    updateStructuredData(product);
    
  } else {
    document.title = 'Tiempo y Estilo - Joyería y Relojería Premium | Envío Gratis en Colombia';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        '💎 Tiempo y Estilo - Tu joyería y relojería online de confianza. Relojes elegantes, joyas en plata 925, aretes, collares, anillos. Envío gratis en toda Colombia. ¡Descubre nuestra colección!'
      );
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = '/';
    }
  }
};

const updateStructuredData = (product) => {
  const existingScript = document.querySelector('#product-structured-data');
  if (existingScript) {
    existingScript.remove();
  }
  
  if (!product) return;
  
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [`${product.image}`],
    "description": product.longDescription || product.description,
    "sku": product.sku,
    "mpn": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "Tiempo y Estilo"
    },
    "offers": {
      "@type": "Offer",
      "url": `${generateProductURL(product)}`,
      "priceCurrency": "COP",
      "price": product.price,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Tiempo y Estilo"
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

// Función para buscar productos (para el RouteErrorHandler)
const searchProducts = (searchTerm) => {
  if (!searchTerm || searchTerm.length < 2) return [];
  
  const term = searchTerm.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term) ||
    product.sku.toLowerCase().includes(term)
  );
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [routeError, setRouteError] = useState(null);

  // Inicializar ruta basada en URL actual
  useEffect(() => {
    const initializeRoute = () => {
      try {
        const path = window.location.pathname;
        setCurrentRoute(path);
        setRouteError(null);
        
        if (path.startsWith('/producto/')) {
          const pathParts = path.split('/');
          const productId = parseInt(pathParts[2]);
          
          // Validar que el ID sea un número válido
          if (isNaN(productId)) {
            setRouteError({ type: 'product-not-found', route: path });
            return;
          }
          
          const product = products.find(p => p.id === productId);
          if (product) {
            setSelectedProduct(product);
            updateSEOTags(product, path);
          } else {
            // Producto no encontrado
            setRouteError({ type: 'product-not-found', route: path });
          }
        } else if (path === '/') {
          setSelectedProduct(null);
          updateSEOTags(null, path);
        } else {
          // Ruta no reconocida
          setRouteError({ type: '404', route: path });
        }
      } catch (error) {
        console.error('Error initializing route:', error);
        setRouteError({ type: 'connection-error', route: window.location.pathname });
      }
    };

    initializeRoute();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      try {
        const path = window.location.pathname;
        setCurrentRoute(path);
        setRouteError(null);
        
        if (path.startsWith('/producto/')) {
          const pathParts = path.split('/');
          const productId = parseInt(pathParts[2]);
          
          if (isNaN(productId)) {
            setRouteError({ type: 'product-not-found', route: path });
            return;
          }
          
          const product = products.find(p => p.id === productId);
          if (product) {
            setSelectedProduct(product);
            updateSEOTags(product, path);
          } else {
            setRouteError({ type: 'product-not-found', route: path });
          }
        } else if (path === '/') {
          setSelectedProduct(null);
          updateSEOTags(null, path);
        } else {
          setRouteError({ type: '404', route: path });
        }
      } catch (error) {
        console.error('Error handling navigation:', error);
        setRouteError({ type: 'connection-error', route: window.location.pathname });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToProduct = (product) => {
    try {
      const productURL = generateProductURL(product);
      window.history.pushState(null, '', productURL);
      setCurrentRoute(productURL);
      setSelectedProduct(product);
      setRouteError(null);
      updateSEOTags(product, productURL);
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error navigating to product:', error);
      setRouteError({ type: 'connection-error', route: window.location.pathname });
    }
  };

  const navigateToHome = () => {
    try {
      window.history.pushState(null, '', '/');
      setCurrentRoute('/');
      setSelectedProduct(null);
      setRouteError(null);
      updateSEOTags(null, '/');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error navigating to home:', error);
      window.location.href = '/';
    }
  };

  const handleGoBack = () => {
    try {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        navigateToHome();
      }
    } catch (error) {
      console.error('Error going back:', error);
      navigateToHome();
    }
  };

  // Exponer funciones globalmente para el RouteErrorHandler
  useEffect(() => {
    window.navigateToProduct = navigateToProduct;
    window.searchProducts = searchProducts;
    
    return () => {
      delete window.navigateToProduct;
      delete window.searchProducts;
    };
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
        const cartId = `${product.id}-${product.sku || 'default'}`;
        return [...prevItems, { 
          ...product, 
          cartId,
          quantity: 1 
        }];
      }
    });
    
    // Feedback visual mejorado
    const button = document.activeElement;
    if (button && button.classList.contains('add-to-cart-btn')) {
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
    // Si hay un error de ruta, mostrar el manejador de errores
    if (routeError) {
      return (
        <RouteErrorHandler
          type={routeError.type}
          currentRoute={routeError.route}
          onNavigateHome={navigateToHome}
          onGoBack={handleGoBack}
          searchProducts={searchProducts}
        />
      );
    }

    // Ruta de producto
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
    
    // Ruta home
    if (currentRoute === '/') {
      return (
        <>
          <Hero />
          <ProductCatalog 
            addToCart={addToCart} 
            navigateToProduct={navigateToProduct}
          />
        </>
      );
    }

    // Ruta no reconocida (fallback)
    return (
      <RouteErrorHandler
        type="404"
        currentRoute={currentRoute}
        onNavigateHome={navigateToHome}
        onGoBack={handleGoBack}
        searchProducts={searchProducts}
      />
    );
  };

  return (
    <ErrorBoundary
      errorMessage="Se produjo un error inesperado. Nuestro equipo ha sido notificado."
      onError={(error, errorInfo) => {
        console.error('App Error Boundary:', error, errorInfo);
      }}
    >
      <div className="min-h-screen bg-gray-50 scroll-smooth selection:bg-blue-100 selection:text-blue-900">
        <Navbar 
          cartItems={cartItems} 
          setShowCart={setShowCart}
          onHomeClick={navigateToHome}
          currentRoute={currentRoute}
        />
        
        {renderCurrentRoute()}
        
        {currentRoute === '/' && !routeError && <Footer />}
        
        <Cart 
          isOpen={showCart}
          onClose={() => setShowCart(false)}
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
        
        {/* Botones flotantes de acción */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          {/* WhatsApp principal */}
          <a
            href="https://wa.me/573508470735?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20las%20joyas%20y%20relojes%20de%20Tiempo%20y%20Estilo"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-600 hover:bg-green-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
            title="Contáctanos por WhatsApp"
            aria-label="Contactar por WhatsApp"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <Phone className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
          </a>

          {/* Chat rápido */}
          <button
            className="group bg-white hover:bg-gray-50 text-gray-700 hover:text-green-600 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            title="Chat rápido"
            aria-label="Chat rápido por WhatsApp"
            onClick={() => {
              const productText = selectedProduct ? `%0A%0AEstoy%20viendo:%20${selectedProduct.name}` : '';
              window.open(`https://wa.me/573508470735?text=¡Hola!%20Tengo%20una%20consulta%20rápida${productText}`, '_blank');
            }}
          >
            <MessageCircle className="h-4 w-4 group-hover:animate-pulse" />
          </button>
        </div>

        {/* Botón scroll to top */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 left-4 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 transform ${
            showScrollTop 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0 pointer-events-none'
          }`}
          title="Ir arriba"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </ErrorBoundary>
  );
}

export default App;