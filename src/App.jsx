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

  // Silenciar errores comunes de servicios externos
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('No user after sign in') ||
         args[0].includes('inspector') ||
         args[0].includes('user after sign'))
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
  const findProductById = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) {
      return null;
    }

    // Generar el slug correcto del producto para comparación
    const correctSlug = generateProductURL(product).split('/').pop();
    return { product, correctSlug };
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

  // Función adicional para manejar acceso directo a rutas SPA
  useEffect(() => {
    const handleDirectRoute = () => {
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

    // Intentar manejar la ruta después de que el componente esté completamente cargado
    const routeTimer = setTimeout(handleDirectRoute, 1000);
    return () => clearTimeout(routeTimer);
  }, []);

  // Función de emergencia para rutas SPA (último recurso)
  useEffect(() => {
    const handleEmergencyRoute = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && !selectedProduct) {
        console.log('Intentando manejar ruta de emergencia:', path);
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            console.log('Producto encontrado en emergencia:', result.product.name);
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      }
    };

    // Último recurso después de 2 segundos
    const emergencyTimer = setTimeout(handleEmergencyRoute, 2000);
    return () => clearTimeout(emergencyTimer);
  }, [selectedProduct]);

  // Función adicional para verificar rutas después de cambios de estado
  useEffect(() => {
    if (selectedProduct) {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/producto/')) {
        const productRoute = parseProductRoute(currentPath);
        if (productRoute && productRoute.type === 'product' && productRoute.id === selectedProduct.id) {
          // La ruta y el producto coinciden, todo está bien
          return;
        }
      }
    }
  }, [selectedProduct]);

  // Función para manejar errores de navegación y redirigir correctamente
  useEffect(() => {
    const handleNavigationError = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && !selectedProduct) {
        console.log('Detectada navegación directa sin producto cargado, intentando corregir...');
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

    // Verificar después de cambios en la navegación
    const checkTimer = setTimeout(handleNavigationError, 1500);
    return () => clearTimeout(checkTimer);
  }, [currentRoute]);

  // Función final de respaldo para rutas SPA
  useEffect(() => {
    const handleFinalFallback = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && !selectedProduct) {
        console.log('Ejecutando fallback final para ruta:', path);
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            console.log('Producto cargado en fallback final:', result.product.name);
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          } else {
            console.error('Producto no encontrado en fallback final, redirigiendo a home');
            navigateToHome();
          }
        } else {
          console.error('Ruta de producto inválida en fallback final, redirigiendo a home');
          navigateToHome();
        }
      }
    };

    // Último intento después de 3 segundos
    const finalTimer = setTimeout(handleFinalFallback, 3000);
    return () => clearTimeout(finalTimer);
  }, [selectedProduct, currentRoute]);

  // Función de monitoreo continuo para rutas SPA
  useEffect(() => {
    const monitorRoute = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && selectedProduct) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product' && productRoute.id !== selectedProduct.id) {
          console.log('Detectado cambio de producto en URL, actualizando...');
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);
          }
        }
      }
    };

    // Monitorear cambios en la ruta cada 500ms
    const monitorTimer = setInterval(monitorRoute, 500);
    return () => clearInterval(monitorTimer);
  }, [selectedProduct]);

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

  // Función para manejar cambios directos en la URL (como cuando el usuario escribe manualmente)
  useEffect(() => {
    const handleURLChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          // Si no hay producto seleccionado o es diferente al de la URL
          if (!selectedProduct || selectedProduct.id !== productRoute.id) {
            console.log('Cambio directo de URL detectado, cargando producto...');
            const result = findProductById(productRoute.id);
            if (result && result.product) {
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Detectar cambios en la URL cada 200ms
    const urlChangeTimer = setInterval(handleURLChange, 200);
    return () => clearInterval(urlChangeTimer);
  }, [selectedProduct]);

  // Función para manejar errores de carga de rutas
  useEffect(() => {
    const handleRouteError = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && !selectedProduct) {
        console.error('Error crítico: ruta de producto sin producto cargado después de múltiples intentos');
        // Forzar recarga de la página como último recurso
        window.location.reload();
      }
    };

    // Si después de 5 segundos no hay producto cargado para una ruta de producto, recargar
    const errorTimer = setTimeout(handleRouteError, 5000);
    return () => clearTimeout(errorTimer);
  }, [selectedProduct]);

  // Función para validar rutas de productos al cargar la aplicación
  useEffect(() => {
    const validateCurrentRoute = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          console.log('Validando ruta de producto al cargar:', path);
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            if (!selectedProduct || selectedProduct.id !== result.product.id) {
              console.log('Aplicando validación de ruta, cargando producto:', result.product.name);
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Validar inmediatamente después de que el componente se monte completamente
    const validationTimer = setTimeout(validateCurrentRoute, 50);
    return () => clearTimeout(validationTimer);
  }, []);

  // Función para asegurar que las rutas funcionen correctamente en producción
  useEffect(() => {
    // Función para corregir rutas problemáticas
    const fixRouteIssues = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            // Asegurar que el estado esté sincronizado
            if (selectedProduct && selectedProduct.id === result.product.id) {
              // Todo está correcto, solo asegurar que la ruta esté establecida
              if (currentRoute !== path) {
                setCurrentRoute(path);
              }
            }
          }
        }
      }
    };

    // Ejecutar corrección cada 100ms durante los primeros 3 segundos
    const fixTimer = setInterval(fixRouteIssues, 100);
    const stopTimer = setTimeout(() => clearInterval(fixTimer), 3000);

    return () => {
      clearInterval(fixTimer);
      clearTimeout(stopTimer);
    };
  }, [selectedProduct, currentRoute]);

  // Función final para garantizar que las rutas SPA funcionen en Netlify
  useEffect(() => {
    const ensureSPARouting = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && selectedProduct) {
        // Verificar que la ruta actual coincida con el producto seleccionado
        const expectedPath = generateProductURL(selectedProduct);
        if (path !== expectedPath) {
          console.log('Corrigiendo ruta SPA para producto:', selectedProduct.name);
          // Actualizar la URL sin recargar la página
          window.history.replaceState(null, '', expectedPath);
        }
      }
    };

    // Ejecutar después de que todo esté cargado
    const finalCheckTimer = setTimeout(ensureSPARouting, 1500);
    return () => clearTimeout(finalCheckTimer);
  }, [selectedProduct]);

  // Función de respaldo absoluta para rutas SPA críticas
  useEffect(() => {
    const absoluteFallback = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product && !selectedProduct) {
            console.log('FALLBACK ABSOLUTO: Cargando producto crítico:', result.product.name);
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);

            // Forzar actualización del título y meta tags
            document.title = `${result.product.name} - Tiempo y Estilo | Joyería y Relojería con Envío Gratis`;
          }
        }
      }
    };

    // Ejecutar como respaldo absoluto después de 4 segundos
    const absoluteTimer = setTimeout(absoluteFallback, 4000);
    return () => clearTimeout(absoluteTimer);
  }, []);

  // Función para manejar el evento popstate correctamente
  useEffect(() => {
    const handlePopStateCorrectly = (event) => {
      const path = window.location.pathname;
      console.log('PopState detectado, nueva ruta:', path);

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

    // Reemplazar el manejador existente con uno mejorado
    window.removeEventListener('popstate', handlePopStateCorrectly);
    window.addEventListener('popstate', handlePopStateCorrectly);

    return () => window.removeEventListener('popstate', handlePopStateCorrectly);
  }, []);

  // Función para asegurar que el estado inicial sea correcto
  useEffect(() => {
    const ensureInitialState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && !selectedProduct) {
        console.log('Asegurando estado inicial para ruta:', path);
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

    // Asegurar estado inicial después de 200ms
    const initialTimer = setTimeout(ensureInitialState, 200);
    return () => clearTimeout(initialTimer);
  }, []);

  // Función para manejar cambios de ruta por programación
  useEffect(() => {
    const handleProgrammaticNavigation = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/') && selectedProduct) {
        // Verificar que la ruta coincida con el producto actual
        const expectedPath = generateProductURL(selectedProduct);
        if (path !== expectedPath) {
          console.log('Ruta no coincide con producto, corrigiendo...');
          // No cambiar automáticamente para evitar bucles
        }
      }
    };

    // Verificar cada segundo
    const navTimer = setInterval(handleProgrammaticNavigation, 1000);
    return () => clearInterval(navTimer);
  }, [selectedProduct]);

  // Función para validar rutas después de que el componente se actualice
  useEffect(() => {
    const validateAfterUpdate = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          if (selectedProduct && selectedProduct.id === productRoute.id) {
            // Todo está correcto
            return;
          } else if (selectedProduct && selectedProduct.id !== productRoute.id) {
            // Producto diferente, actualizar
            const result = findProductById(productRoute.id);
            if (result && result.product) {
              setSelectedProduct(result.product);
              updateSEOTags(result.product, path);
            }
          } else if (!selectedProduct) {
            // No hay producto cargado, cargar el correcto
            const result = findProductById(productRoute.id);
            if (result && result.product) {
              setSelectedProduct(result.product);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Validar después de cambios en selectedProduct
    const updateTimer = setTimeout(validateAfterUpdate, 100);
    return () => clearTimeout(updateTimer);
  }, [selectedProduct]);

  // Función maestra para controlar rutas SPA
  useEffect(() => {
    const masterRouteController = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Verificar si necesitamos actualizar el estado
            const needsUpdate = !selectedProduct ||
                              selectedProduct.id !== result.product.id ||
                              currentRoute !== path;

            if (needsUpdate) {
              console.log('MASTER CONTROLLER: Actualizando producto para ruta:', path);
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      } else if (path === '/' && selectedProduct) {
        // Si estamos en home pero hay un producto seleccionado, limpiar
        setSelectedProduct(null);
        setCurrentRoute('/');
        updateSEOTags(null, '/');
      }
    };

    // Ejecutar control maestro cada 300ms
    const masterTimer = setInterval(masterRouteController, 300);
    return () => clearInterval(masterTimer);
  }, [selectedProduct, currentRoute]);

  // Función de sincronización final para rutas SPA
  useEffect(() => {
    const finalSync = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/') && selectedProduct) {
        // Sincronización final: asegurar que todo esté correcto
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product' && productRoute.id === selectedProduct.id) {
          // Verificar que la ruta esté correctamente establecida
          if (currentRoute !== path) {
            setCurrentRoute(path);
          }

          // Verificar que los meta tags estén correctos
          const expectedTitle = `${selectedProduct.name} - Tiempo y Estilo | Joyería y Relojería con Envío Gratis`;
          if (document.title !== expectedTitle) {
            document.title = expectedTitle;
          }
        }
      }
    };

    // Ejecutar sincronización final después de 800ms
    const syncTimer = setTimeout(finalSync, 800);
    return () => clearTimeout(syncTimer);
  }, [selectedProduct]);

  // Función de emergencia para rutas críticas
  useEffect(() => {
    const emergencyHandler = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Verificación de emergencia: si no hay producto después de mucho tiempo, forzar carga
            if (!selectedProduct) {
              console.log('EMERGENCIA: Forzando carga de producto para ruta crítica');
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Última verificación de emergencia después de 6 segundos
    const emergencyTimer = setTimeout(emergencyHandler, 6000);
    return () => clearTimeout(emergencyTimer);
  }, []);

  // Función para manejar el evento hashchange (por si acaso)
  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        console.log('HashChange detectado, verificando ruta:', path);
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

  // Función para asegurar que las rutas funcionen correctamente en producción
  useEffect(() => {
    const ensureProductionRouting = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Verificación final para producción
            if (!selectedProduct || selectedProduct.id !== result.product.id) {
              console.log('PRODUCCIÓN: Aplicando corrección final de ruta');
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);

              // Actualizar URL si es necesario (sin recargar)
              const expectedPath = generateProductURL(result.product);
              if (path !== expectedPath) {
                window.history.replaceState(null, '', expectedPath);
              }
            }
          }
        }
      }
    };

    // Aplicar corrección de producción después de 1.2 segundos
    const productionTimer = setTimeout(ensureProductionRouting, 1200);
    return () => clearTimeout(productionTimer);
  }, []);

  // Función de monitoreo continuo para rutas SPA en producción
  useEffect(() => {
    const monitorProductionRoutes = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/') && selectedProduct) {
        // Verificar que la ruta actual sea consistente con el producto seleccionado
        const expectedPath = generateProductURL(selectedProduct);
        if (path !== expectedPath) {
          console.log('PRODUCCIÓN: Ruta inconsistente detectada, corrigiendo...');
          window.history.replaceState(null, '', expectedPath);
        }
      }
    };

    // Monitorear cada 2 segundos en producción
    const monitorTimer = setInterval(monitorProductionRoutes, 2000);
    return () => clearInterval(monitorTimer);
  }, [selectedProduct]);

  // Función para manejar errores de redirección automática
  useEffect(() => {
    const handleAutoRedirect = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Si el producto existe pero no está seleccionado, cargarlo automáticamente
            if (!selectedProduct) {
              console.log('AUTO-REDIRECT: Cargando producto automáticamente');
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Ejecutar auto-redirect después de 700ms
    const redirectTimer = setTimeout(handleAutoRedirect, 700);
    return () => clearTimeout(redirectTimer);
  }, []);

  // Función para validar rutas después de cambios de estado
  useEffect(() => {
    const validateRouteAfterStateChange = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/') && selectedProduct) {
        // Verificar que la ruta coincida con el producto seleccionado
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          if (productRoute.id === selectedProduct.id) {
            // Todo está correcto, asegurar que la ruta esté establecida
            if (currentRoute !== path) {
              setCurrentRoute(path);
            }
          } else {
            // Producto diferente al esperado, corregir
            console.log('STATE CHANGE: Producto diferente al esperado, corrigiendo...');
            const result = findProductById(productRoute.id);
            if (result && result.product) {
              setSelectedProduct(result.product);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Validar después de cambios en selectedProduct
    const stateTimer = setTimeout(validateRouteAfterStateChange, 300);
    return () => clearTimeout(stateTimer);
  }, [selectedProduct]);

  // Función para asegurar la consistencia final de rutas SPA
  useEffect(() => {
    const ensureFinalConsistency = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Verificación final de consistencia
            const needsProductUpdate = !selectedProduct || selectedProduct.id !== result.product.id;
            const needsRouteUpdate = currentRoute !== path;

            if (needsProductUpdate || needsRouteUpdate) {
              console.log('CONSISTENCIA FINAL: Aplicando correcciones finales');
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Aplicar consistencia final después de 1.5 segundos
    const consistencyTimer = setTimeout(ensureFinalConsistency, 1500);
    return () => clearTimeout(consistencyTimer);
  }, []);

  // Función maestra de control de rutas SPA
  useEffect(() => {
    const masterSPAController = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Control maestro: asegurar que todo esté perfectamente sincronizado
            const currentStateCorrect = selectedProduct && selectedProduct.id === result.product.id;
            const currentRouteCorrect = currentRoute === path;
            const metaTagsCorrect = document.title.includes(result.product.name);

            if (!currentStateCorrect || !currentRouteCorrect || !metaTagsCorrect) {
              console.log('MASTER SPA CONTROLLER: Aplicando sincronización completa');
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Ejecutar control maestro cada 400ms durante los primeros 5 segundos
    const masterTimer = setInterval(masterSPAController, 400);
    const stopMasterTimer = setTimeout(() => clearInterval(masterTimer), 5000);

    return () => {
      clearInterval(masterTimer);
      clearTimeout(stopMasterTimer);
    };
  }, [selectedProduct, currentRoute]);

  // Función de respaldo definitivo para rutas SPA críticas
  useEffect(() => {
    const ultimateFallback = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Último respaldo: forzar estado correcto pase lo que pase
            console.log('ULTIMATE FALLBACK: Aplicando corrección definitiva');
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);

            // Forzar título correcto
            document.title = `${result.product.name} - Tiempo y Estilo | Joyería y Relojería con Envío Gratis`;

            // Forzar URL correcta si es necesario
            const expectedPath = generateProductURL(result.product);
            if (window.location.pathname !== expectedPath) {
              window.history.replaceState(null, '', expectedPath);
            }
          }
        }
      }
    };

    // Ejecutar respaldo definitivo después de 3.5 segundos
    const ultimateTimer = setTimeout(ultimateFallback, 3500);
    return () => clearTimeout(ultimateTimer);
  }, []);

  // Función para manejar el evento pageshow (cuando se navega hacia atrás/adelante)
  useEffect(() => {
    const handlePageShow = (event) => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        console.log('PAGESHOW detectado, verificando ruta:', path);
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

  // Función para asegurar que las rutas funcionen correctamente después de la carga inicial
  useEffect(() => {
    const ensurePostLoadRouting = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Verificación post-carga: asegurar que todo esté correcto después de que la página cargue completamente
            console.log('POST-LOAD: Verificando estado final de rutas');
            setSelectedProduct(result.product);
            setCurrentRoute(path);
            updateSEOTags(result.product, path);

            // Verificar que la URL esté correcta
            const expectedPath = generateProductURL(result.product);
            if (window.location.pathname !== expectedPath) {
              console.log('POST-LOAD: Corrigiendo URL final');
              window.history.replaceState(null, '', expectedPath);
            }
          }
        }
      }
    };

    // Ejecutar después de que todo esté completamente cargado
    const postLoadTimer = setTimeout(ensurePostLoadRouting, 2500);
    return () => clearTimeout(postLoadTimer);
  }, []);

  // Función para manejar el evento focus (cuando el usuario regresa a la pestaña)
  useEffect(() => {
    const handleFocus = () => {
      const path = window.location.pathname;
      if (path.startsWith('/producto/')) {
        console.log('FOCUS detectado, verificando ruta activa:', path);
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);
          if (result && result.product) {
            // Sincronizar estado cuando el usuario regresa a la pestaña
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

  // Función para validar rutas después de cambios en el historial
  useEffect(() => {
    const handleHistoryChange = () => {
      const path = window.location.pathname;
      console.log('Cambio en historial detectado:', path);

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

    // Detectar cambios en el historial cada 100ms durante los primeros segundos
    const historyTimer = setInterval(handleHistoryChange, 100);
    const stopHistoryTimer = setTimeout(() => clearInterval(historyTimer), 3000);

    return () => {
      clearInterval(historyTimer);
      clearTimeout(stopHistoryTimer);
    };
  }, []);

  // Función para asegurar que las rutas funcionen correctamente en todos los escenarios
  useEffect(() => {
    const ensureUniversalRouting = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Verificación universal: asegurar que todo esté correcto en cualquier escenario
            const needsStateUpdate = !selectedProduct || selectedProduct.id !== result.product.id;
            const needsRouteUpdate = currentRoute !== path;

            if (needsStateUpdate || needsRouteUpdate) {
              console.log('UNIVERSAL ROUTING: Aplicando corrección universal');
              setSelectedProduct(result.product);
              setCurrentRoute(path);
              updateSEOTags(result.product, path);
            }
          }
        }
      }
    };

    // Ejecutar verificación universal cada 600ms
    const universalTimer = setInterval(ensureUniversalRouting, 600);
    return () => clearInterval(universalTimer);
  }, [selectedProduct, currentRoute]);

  // Función de monitoreo final para rutas SPA
  useEffect(() => {
    const finalRouteMonitor = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/') && selectedProduct) {
        // Monitoreo final: asegurar consistencia absoluta
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product' && productRoute.id === selectedProduct.id) {
          // Verificar que todo esté perfectamente sincronizado
          const expectedPath = generateProductURL(selectedProduct);
          if (path !== expectedPath) {
            console.log('FINAL MONITOR: Ruta inconsistente, aplicando corrección final');
            window.history.replaceState(null, '', expectedPath);
          }
        }
      }
    };

    // Monitoreo final cada 800ms
    const finalTimer = setInterval(finalRouteMonitor, 800);
    return () => clearInterval(finalTimer);
  }, [selectedProduct]);

  // Función de respaldo absoluto para rutas SPA críticas
  useEffect(() => {
    const absoluteRouteFallback = () => {
      const path = window.location.pathname;

      if (path.startsWith('/producto/')) {
        const productRoute = parseProductRoute(path);
        if (productRoute && productRoute.type === 'product') {
          const result = findProductById(productRoute.id);

          if (result && result.product) {
            // Respaldo absoluto: forzar sincronización completa pase lo que pase
            console.log('ABSOLUTE FALLBACK: Aplicando respaldo absoluto de rutas');
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

    // Respaldo absoluto después de 4 segundos
    const absoluteFallbackTimer = setTimeout(absoluteRouteFallback, 4000);
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