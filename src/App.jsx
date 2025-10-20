import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OptimizedProductCatalog from './components/OptimizedProductCatalog';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ErrorBoundary from './components/ErrorBoundary';
import RouteErrorHandler from './components/RouteErrorHandler';
import PerformanceMonitor from './components/PerformanceMonitor';
import productService from './services/productService';

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
const searchProducts = async (searchTerm) => {
  if (!searchTerm || searchTerm.length < 2) return [];

  try {
    const results = await productService.searchProducts(searchTerm, { limit: 20 });
    return results;
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [routeError, setRouteError] = useState(null);

  // Silenciar errores comunes de servicios externos
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('No user after sign in') ||
         args[0].includes('inspector') ||
         args[0].includes('user after sign') ||
         args[0].includes('message channel closed') ||
         args[0].includes('asynchronous response') ||
         args[0].includes('listener indicated'))
      ) {
        return; // Silenciar estos errores específicos
      }
      originalError.call(console, ...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  // Función mejorada para parsear rutas de productos
  const parseProductRoute = (path) => {
    // Patrón para rutas de productos: /producto/{id}/{slug}
    const productPattern = /^\/producto\/(\d+)\/(.+)$/;
    const match = path.match(productPattern);

    if (match) {
      const productId = parseInt(match[1]);
      const slug = match[2];

      // Validar que el ID sea un número válido
      if (isNaN(productId) || productId <= 0) {
        return { type: 'invalid-id', id: productId, slug };
      }

      return { type: 'product', id: productId, slug };
    }

    return null;
  };

  // Función para manejar rutas directas (SPA routing fix)
  const handleDirectAccess = () => {
    const path = window.location.pathname;
    const productRoute = parseProductRoute(path);

    if (productRoute && productRoute.type === 'product') {
      const result = findProductById(productRoute.id);
      if (result && result.product) {
        setSelectedProduct(result.product);
        updateSEOTags(result.product, path);
      }
    }
  };

  // Función mejorada para encontrar productos
  const findProductById = async (id) => {
    try {
      const product = await productService.getProductById(id);
      if (!product) {
        return null;
      }

      // Generar el slug correcto del producto para comparación
      const correctSlug = generateProductURL(product).split('/').pop();
      return { product, correctSlug };
    } catch (error) {
      console.error('Error finding product by ID:', error);
      return null;
    }
  };

  // Inicializar ruta basada en URL actual
  useEffect(() => {
    const initializeRoute = () => {
      try {
        const path = window.location.pathname;
        console.log('Inicializando ruta:', path);

        setCurrentRoute(path);
        setRouteError(null);

        // Verificar si es una ruta de producto
        const productRoute = parseProductRoute(path);

        if (productRoute) {
          const { type, id, slug } = productRoute;

          if (type === 'invalid-id') {
            console.warn('ID de producto inválido:', id);
            setRouteError({ type: 'product-not-found', route: path, message: 'ID de producto inválido' });
            return;
          }

          const result = findProductById(id);

          if (result && result.product) {
            const { product, correctSlug } = result;

            // Verificar si el slug coincide (para SEO)
            if (slug !== correctSlug) {
              console.warn('Slug incorrecto. Esperado:', correctSlug, 'Recibido:', slug);
              // No es un error crítico, pero podemos redirigir si es necesario
            }

            console.log('Producto encontrado:', product.name);
            setSelectedProduct(product);
            updateSEOTags(product, path);
          } else {
            console.warn('Producto no encontrado con ID:', id);
            setRouteError({
              type: 'product-not-found',
              route: path,
              message: `Producto con ID ${id} no encontrado`
            });
          }
        } else if (path === '/') {
          console.log('Ruta home detectada');
          setSelectedProduct(null);
          updateSEOTags(null, path);
        } else {
          console.warn('Ruta no reconocida:', path);
          setRouteError({ type: '404', route: path, message: 'Página no encontrada' });
        }
      } catch (error) {
        console.error('Error inicializando ruta:', error);
        setRouteError({
          type: 'connection-error',
          route: window.location.pathname,
          message: 'Error interno del servidor'
        });
      }
    };

    // Pequeño delay para asegurar que el componente esté montado
    const timer = setTimeout(initializeRoute, 100);

    // También intentar manejar acceso directo después de un tiempo mayor
    const directAccessTimer = setTimeout(handleDirectAccess, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(directAccessTimer);
    };
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
        console.log('Navegación detectada:', path);

        setCurrentRoute(path);
        setRouteError(null);

        // Verificar si es una ruta de producto
        const productRoute = parseProductRoute(path);

        if (productRoute) {
          const { type, id, slug } = productRoute;

          if (type === 'invalid-id') {
            console.warn('ID de producto inválido en navegación:', id);
            setRouteError({ type: 'product-not-found', route: path, message: 'ID de producto inválido' });
            return;
          }

          const result = findProductById(id);

          if (result && result.product) {
            const { product, correctSlug } = result;

            // Verificar si el slug coincide (para SEO)
            if (slug !== correctSlug) {
              console.warn('Slug incorrecto en navegación. Esperado:', correctSlug, 'Recibido:', slug);
            }

            console.log('Producto encontrado en navegación:', product.name);
            setSelectedProduct(product);
            updateSEOTags(product, path);
          } else {
            console.warn('Producto no encontrado en navegación con ID:', id);
            setRouteError({
              type: 'product-not-found',
              route: path,
              message: `Producto con ID ${id} no encontrado`
            });
          }
        } else if (path === '/') {
          console.log('Navegación a home');
          setSelectedProduct(null);
          updateSEOTags(null, path);
        } else {
          console.warn('Ruta no reconocida en navegación:', path);
          setRouteError({ type: '404', route: path, message: 'Página no encontrada' });
        }
      } catch (error) {
        console.error('Error manejando navegación:', error);
        setRouteError({
          type: 'connection-error',
          route: window.location.pathname,
          message: 'Error interno del servidor'
        });
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

  // Función simplificada para manejar rutas SPA
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      } else if (path === '/') {
        setSelectedProduct(null);
        setCurrentRoute('/');
        updateSEOTags(null, '/');
      }
    };

    // Manejar cambios de ruta cada 200ms (suficientemente frecuente pero no excesivo)
    const routeTimer = setInterval(handleRouteChange, 200);
    return () => clearInterval(routeTimer);
  }, [selectedProduct, currentRoute]);

  // Función para manejar el evento beforeunload y asegurar estado correcto
  useEffect(() => {
    const handleBeforeUnload = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        // Guardar el estado actual en sessionStorage como respaldo
        sessionStorage.setItem('lastProductPath', path);
        sessionStorage.setItem('lastProductId', selectedProduct?.id || '');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [selectedProduct]);

  // Función para recuperar estado de sessionStorage al cargar
  useEffect(() => {
    const lastPath = sessionStorage.getItem('lastProductPath');
    const lastId = sessionStorage.getItem('lastProductId');

    if (lastPath && lastId && lastPath.startsWith('/producto/')) {
      const productRoute = parseProductRoute(lastPath);
      if (productRoute && productRoute.type === 'product' && productRoute.id === parseInt(lastId)) {
        console.log('Recuperando producto de sessionStorage:', lastPath);
        const result = findProductById(parseInt(lastId));
        if (result && result.product) {
          setSelectedProduct(result.product);
          setCurrentRoute(lastPath);
          updateSEOTags(result.product, lastPath);
        }
      }
    }
  }, []);

  // Función para limpiar sessionStorage después de cargar producto exitosamente
  useEffect(() => {
    if (selectedProduct && window.location.pathname.startsWith('/producto/')) {
      // Limpiar sessionStorage después de 1 segundo de carga exitosa
      const cleanupTimer = setTimeout(() => {
        sessionStorage.removeItem('lastProductPath');
        sessionStorage.removeItem('lastProductId');
      }, 1000);

      return () => clearTimeout(cleanupTimer);
    }
  }, [selectedProduct]);

  // Función simplificada para validar rutas iniciales
  useEffect(() => {
    const validateInitialRoute = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      }
    };

    // Validar después de 100ms para asegurar que todo esté listo
    const timer = setTimeout(validateInitialRoute, 100);
    return () => clearTimeout(timer);
  }, []);

  // Función simplificada para corregir URLs cuando sea necesario
  useEffect(() => {
    if (selectedProduct) {
      const currentPath = window.location.pathname;
      const expectedPath = generateProductURL(selectedProduct);

      if (currentPath !== expectedPath) {
        window.history.replaceState(null, '', expectedPath);
      }
    }
  }, [selectedProduct]);

  // Función simplificada para manejar navegación del navegador
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      } else if (path === '/') {
        setSelectedProduct(null);
        setCurrentRoute('/');
        updateSEOTags(null, '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Función simplificada para validar estado después de cambios
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/producto/') && selectedProduct) {
      const productRoute = parseProductRoute(path);
      if (productRoute && productRoute.type === 'product' && productRoute.id !== selectedProduct.id) {
        const result = findProductById(productRoute.id);
        if (result && result.product) {
          setSelectedProduct(result.product);
          updateSEOTags(result.product, path);
        }
      }
    }
  }, [selectedProduct]);

  // Función simplificada para sincronizar meta tags
  useEffect(() => {
    if (selectedProduct) {
      const expectedTitle = `${selectedProduct.name} - Tiempo y Estilo | Joyería y Relojería con Envío Gratis`;
      if (document.title !== expectedTitle) {
        document.title = expectedTitle;
      }
    }
  }, [selectedProduct]);

  // Función simplificada para manejar cambios de hash
  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Función simplificada para monitorear rutas en producción
  useEffect(() => {
    if (selectedProduct) {
      const path = window.location.pathname;
      const expectedPath = generateProductURL(selectedProduct);
      if (path !== expectedPath) {
        window.history.replaceState(null, '', expectedPath);
      }
    }
  }, [selectedProduct]);

  // Función simplificada para validar rutas después de cambios de estado
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/producto/') && selectedProduct) {
      const productRoute = parseProductRoute(path);
      if (productRoute && productRoute.type === 'product') {
        if (productRoute.id !== selectedProduct.id) {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            updateSEOTags(result.product, path);
          }
        } else if (currentRoute !== path) {
          setCurrentRoute(path);
        }
      }
    }
  }, [selectedProduct]);

  // Función simplificada para asegurar consistencia de rutas SPA
  useEffect(() => {
    const path = window.location.pathname;

    if (path.startsWith('/producto/')) {
      const productRoute = parseProductRoute(path);
      if (productRoute && productRoute.type === 'product') {
        const result = findProductById(productRoute.id);

        if (result && result.product) {
          const needsUpdate = !selectedProduct ||
                            selectedProduct.id !== result.product.id ||
                            currentRoute !== path;

          if (needsUpdate) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      }
    } else if (path === '/' && selectedProduct) {
      setSelectedProduct(null);
      setCurrentRoute('/');
      updateSEOTags(null, '/');
    }
  }, [selectedProduct, currentRoute]);

  // Función simplificada para manejar eventos de navegación del navegador
  useEffect(() => {
    const handlePageShow = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // Función simplificada para manejar eventos de focus
  useEffect(() => {
    const handleFocus = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  // Función simplificada para manejar cambios en el historial
  useEffect(() => {
    const handleHistoryChange = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      } else if (path === '/') {
        setSelectedProduct(null);
        setCurrentRoute('/');
        updateSEOTags(null, '/');
      }
    };

    // Detectar cambios en el historial cada 200ms
    const historyTimer = setInterval(handleHistoryChange, 200);
    return () => clearInterval(historyTimer);
  }, [selectedProduct, currentRoute]);

  // Función simplificada de respaldo absoluto para rutas SPA críticas
  useEffect(() => {
    const absoluteRouteFallback = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);

            // Forzar título correcto
            document.title = `${result.product.name} - Tiempo y Estilo | Joyería y Relojería con Envío Gratis`;

            // Forzar URL correcta
            const expectedPath = generateProductURL(result.product);
            if (window.location.pathname !== expectedPath) {
              window.history.replaceState(null, '', expectedPath);
            }
          }
        }
      }
    };

    // Respaldo absoluto después de 2 segundos
    const absoluteFallbackTimer = setTimeout(absoluteRouteFallback, 2000);
    return () => clearTimeout(absoluteFallbackTimer);
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
          <OptimizedProductCatalog
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
      <div className="min-h-screen bg-pearl-gradient scroll-smooth selection:bg-secondary selection:text-primary">
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
            href="https://wa.me/573146081297?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20las%20joyas%20y%20relojes%20de%20Tiempo%20y%20Estilo"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-whatsapp-600 hover:bg-whatsapp-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
            title="Contáctanos por WhatsApp"
            aria-label="Contactar por WhatsApp"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <Phone className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-luxury rounded-full animate-pulse border-2 border-white"></div>
          </a>

          {/* Chat rápido */}
          <button
            className="group bg-white hover:bg-gray-50 text-gray-700 hover:text-whatsapp-600 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            title="Chat rápido"
            aria-label="Chat rápido por WhatsApp"
            onClick={() => {
              const productText = selectedProduct ? `%0A%0AEstoy%20viendo:%20${selectedProduct.name}` : '';
              window.open(`https://wa.me/573146081297?text=¡Hola!%20Tengo%20una%20consulta%20rápida${productText}`, '_blank');
            }}
          >
            <MessageCircle className="h-4 w-4 group-hover:animate-pulse" />
          </button>
        </div>

        {/* Performance Monitor (solo en desarrollo) */}
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}

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