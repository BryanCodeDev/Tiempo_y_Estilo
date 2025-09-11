import React, { useState, useEffect } from 'react';
import { Search, Home, ArrowLeft, AlertCircle, RefreshCw } from 'lucide-react';

const RouteErrorHandler = ({ 
  type = '404', 
  onNavigateHome, 
  onGoBack, 
  currentRoute = '/',
  availableRoutes = [],
  searchProducts = () => []
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Analizar la ruta para encontrar posibles coincidencias
  useEffect(() => {
    if (currentRoute && currentRoute !== '/') {
      const routeParts = currentRoute.split('/').filter(Boolean);
      const lastPart = routeParts[routeParts.length - 1];
      
      // Extraer términos de búsqueda de la URL
      if (lastPart) {
        const searchTerms = lastPart
          .replace(/-/g, ' ')
          .replace(/[^a-z0-9\s]/gi, '')
          .toLowerCase();
        
        if (searchTerms.length > 2) {
          setSearchTerm(searchTerms);
          handleSearch(searchTerms);
        }
      }
    }
  }, [currentRoute]);

  const handleSearch = async (term) => {
    if (!term || term.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsSearching(true);
    try {
      // Buscar productos que coincidan
      const results = searchProducts(term);
      setSuggestions(results.slice(0, 3)); // Máximo 3 sugerencias
    } catch (error) {
      console.error('Error searching products:', error);
      setSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleRetryCurrentRoute = () => {
    // Intentar recargar la ruta actual
    window.location.reload();
  };

  const getErrorConfig = () => {
    switch (type) {
      case '404':
        return {
          title: 'Página no encontrada',
          subtitle: 'Lo sentimos, la página que buscas no existe o fue movida.',
          icon: AlertCircle,
          iconColor: 'text-orange-600',
          iconBg: 'bg-orange-100'
        };
      case 'product-not-found':
        return {
          title: 'Producto no encontrado',
          subtitle: 'El producto que buscas no está disponible o ha sido removido del catálogo.',
          icon: Search,
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-100'
        };
      case 'connection-error':
        return {
          title: 'Error de conexión',
          subtitle: 'No se pudo cargar la página. Verifica tu conexión a internet.',
          icon: RefreshCw,
          iconColor: 'text-red-600',
          iconBg: 'bg-red-100'
        };
      default:
        return {
          title: 'Error inesperado',
          subtitle: 'Ocurrió un error al cargar esta página.',
          icon: AlertCircle,
          iconColor: 'text-gray-600',
          iconBg: 'bg-gray-100'
        };
    }
  };

  const errorConfig = getErrorConfig();
  const IconComponent = errorConfig.icon;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-20">
      <div className="max-w-lg w-full">
        {/* Tarjeta principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Icono */}
          <div className={`mx-auto w-20 h-20 ${errorConfig.iconBg} rounded-full flex items-center justify-center mb-6`}>
            <IconComponent className={`w-10 h-10 ${errorConfig.iconColor}`} />
          </div>

          {/* Título y subtítulo */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {errorConfig.title}
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {errorConfig.subtitle}
          </p>

          {/* Información de la ruta actual */}
          {currentRoute !== '/' && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-500 mb-2">Ruta solicitada:</p>
              <code className="text-sm font-mono text-gray-800 bg-white px-3 py-1 rounded border">
                {currentRoute}
              </code>
            </div>
          )}

          {/* Buscador de productos si hay sugerencias disponibles */}
          {type === 'product-not-found' && (
            <div className="mb-8">
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  placeholder="Buscar productos similares..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                {isSearching && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />
                  </div>
                )}
              </div>

              {/* Sugerencias de productos */}
              {suggestions.length > 0 && (
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-gray-700 text-left">
                    ¿Buscabas alguno de estos productos?
                  </p>
                  {suggestions.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        // Navegar al producto sugerido
                        if (window.navigateToProduct) {
                          window.navigateToProduct(product);
                        } else {
                          // Fallback: construir URL manualmente
                          const slug = product.name.toLowerCase()
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-');
                          window.location.href = `/producto/${product.id}/${slug}`;
                        }
                      }}
                      className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 border border-blue-200"
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-sm text-blue-600">
                            ${product.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Botones de acción */}
          <div className="space-y-3">
            {/* Botón principal */}
            {type === 'connection-error' ? (
              <button
                onClick={handleRetryCurrentRoute}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Reintentar
              </button>
            ) : (
              <button
                onClick={onNavigateHome}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Ir al inicio
              </button>
            )}

            {/* Botones secundarios */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onGoBack}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Recargar
              </button>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-6 text-center space-y-4">
          {/* Enlaces útiles */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Enlaces útiles:</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <button
                onClick={() => window.location.href = '/categoria/tecnologia'}
                className="text-blue-600 hover:text-blue-800 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Tecnología
              </button>
              <button
                onClick={() => window.location.href = '/categoria/belleza'}
                className="text-blue-600 hover:text-blue-800 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Belleza
              </button>
              <button
                onClick={() => window.location.href = '/categoria/vapes'}
                className="text-blue-600 hover:text-blue-800 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Vapes
              </button>
              <button
                onClick={() => window.location.href = '/categoria/hogar'}
                className="text-blue-600 hover:text-blue-800 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Hogar
              </button>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-sm text-gray-500 mb-2">¿Necesitas ayuda?</p>
            <a
              href="https://wa.me/573508470735?text=Hola, tuve un problema navegando en la página web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteErrorHandler;