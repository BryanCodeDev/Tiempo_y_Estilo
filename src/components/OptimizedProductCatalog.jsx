import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Grid, List, Search, Filter, Loader2, Package, Star, Award, Phone, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { useProductService } from '../services/productService';
import { useImageOptimizer } from '../services/imageOptimizer';
import { products, categories } from '../data/products';

const OptimizedProductCatalog = ({
  category = 'all',
  itemsPerPage = 12,
  viewMode: initialViewMode = 'grid',
  showSearch = true,
  addToCart,
  navigateToProduct
}) => {
  // Estados principales
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState(initialViewMode);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);

  // Estados para filtros y categorías
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(true);

  // Servicios
  const { loadProducts, searchProducts, getLoadingState } = useProductService();
  const { preloadImages } = useImageOptimizer();

  // Cargar productos iniciales
  const loadInitialProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await loadProducts({
        category,
        limit: itemsPerPage,
        offset: 0,
        useCache: true
      });

      setProducts(result.products);
      setTotalProducts(result.total);
      setHasMore(result.hasMore);
      setCurrentPage(1);

      // Precargar imágenes de productos visibles
      if (result.products.length > 0) {
        const imageSources = [];
        result.products.forEach(product => {
          if (product.image) imageSources.push(product.image);
          if (product.images) imageSources.push(...product.images);
        });
        preloadImages(imageSources, 'low');
      }

    } catch (err) {
      console.error('Error loading products:', err);
      setError('Error al cargar productos');
    } finally {
      setLoading(false);
    }
  }, [category, itemsPerPage, loadProducts, preloadImages]);

  // Cargar más productos (paginación)
  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);

      const result = await loadProducts({
        category,
        limit: itemsPerPage,
        offset: currentPage * itemsPerPage,
        useCache: true
      });

      setProducts(prev => [...prev, ...result.products]);
      setHasMore(result.hasMore);

      // Precargar imágenes de nuevos productos
      if (result.products.length > 0) {
        const imageSources = [];
        result.products.forEach(product => {
          if (product.image) imageSources.push(product.image);
          if (product.images) imageSources.push(...product.images);
        });
        preloadImages(imageSources, 'low');
      }

    } catch (err) {
      console.error('Error loading more products:', err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, currentPage, category, itemsPerPage, loadProducts, preloadImages]);

  // Buscar productos
  const handleSearch = useCallback(async (query) => {
    if (!query.trim()) {
      // Si no hay consulta, cargar productos iniciales directamente
      try {
        setLoading(true);
        setError(null);

        const result = await loadProducts({
          category,
          limit: itemsPerPage,
          offset: 0,
          useCache: true
        });

        setProducts(result.products);
        setTotalProducts(result.total);
        setHasMore(result.hasMore);
        setCurrentPage(1);

        // Precargar imágenes de productos visibles
        if (result.products.length > 0) {
          const imageSources = [];
          result.products.forEach(product => {
            if (product.image) imageSources.push(product.image);
            if (product.images) imageSources.push(...product.images);
          });
          preloadImages(imageSources, 'low');
        }

      } catch (err) {
        console.error('Error loading products:', err);
        setError('Error al cargar productos');
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const results = await searchProducts(query, {
        category,
        limit: itemsPerPage
      });

      setProducts(results);
      setHasMore(false);
      setCurrentPage(1);

    } catch (err) {
      console.error('Error searching products:', err);
      setError('Error en la búsqueda');
    } finally {
      setLoading(false);
    }
  }, [category, itemsPerPage, searchProducts, loadProducts, preloadImages]);

  // Efecto para cargar productos cuando cambie la categoría
  useEffect(() => {
    loadInitialProducts();
  }, [category, itemsPerPage]); // Removido loadInitialProducts de las dependencias

  // Efecto para manejar búsqueda con debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearch(searchQuery);
      } else {
        loadInitialProducts();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, category, itemsPerPage]); // Agregadas dependencias necesarias

  // Manejar cambio de página
  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);

    if (newPage > currentPage && hasMore) {
      loadMoreProducts();
    }
  }, [currentPage, hasMore, loadMoreProducts]);

  // Manejar cambio de modo de vista
  const handleViewModeChange = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  // Función para limpiar filtros
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('name');
  };

  // Filtrar productos basado en categoría y búsqueda
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Ordenar productos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'discount':
          return (b.discount || 0) - (a.discount || 0);
        case 'stock':
          return Number(b.inStock) - Number(a.inStock);
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Estadísticas
  const productsInStock = filteredProducts.filter(p => p.inStock).length;
  const productsOnSale = filteredProducts.filter(p => p.discount).length;

  // Renderizar estado de carga
  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

  // Renderizar estado de error
  if (error && products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">⚠️</div>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={loadInitialProducts}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <section id="productos" className="py-8 bg-gray-50 min-h-screen">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Header del catálogo */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
              <span className="mr-2">✨</span>
              Productos destacados
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Explora nuestro catálogo
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Encuentra productos únicos con envío GRATIS incluido siempre.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 text-gray-700 rounded-full text-base font-medium">
              <span className="font-bold text-xl mr-2 text-primary">{products.length}</span>
              productos disponibles
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder={`Buscar en ${products.length} productos...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary"
              aria-label="Buscar productos por nombre, descripción o referencia"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                aria-label="Limpiar búsqueda"
              >
                <span className="text-lg">×</span>
              </button>
            )}
          </div>

          {/* Controles principales */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-6">
            {/* Ordenamiento */}
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary"
                aria-label="Ordenar productos por"
              >
                <option value="name">Ordenar por Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="discount">Mayor Descuento</option>
                <option value="stock">Más Disponibles</option>
              </select>
            </div>

            {/* Vista y filtros */}
            <div className="flex items-center gap-3">
              {/* Selector de vista */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleViewModeChange('grid')}
                  className={`p-2 transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  title="Vista cuadrícula"
                  aria-label="Cambiar a vista cuadrícula"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleViewModeChange('list')}
                  className={`p-2 transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  title="Vista lista"
                  aria-label="Cambiar a vista lista"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Botón filtros */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  showFilters
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border border-gray-200 hover:bg-gray-50'
                }`}
                aria-label={showFilters ? 'Ocultar categorías' : 'Mostrar categorías'}
                aria-expanded={showFilters}
              >
                <Filter className="h-4 w-4" />
                <span>{showFilters ? 'Ocultar' : 'Mostrar'}</span>
              </button>
            </div>
          </div>

          {/* Panel de categorías expandido */}
          <div className={`transition-all duration-300 overflow-hidden ${
            showFilters ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-700">Filtrar por categoría:</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {categories.map(category => {
                  const productCount = category.id === 'all'
                    ? products.length
                    : products.filter(p => p.category === category.id).length;

                  const IconComponent = category.icon;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group relative p-4 rounded-lg text-sm font-medium transition-all duration-200 text-center hover:scale-105 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-white text-primary border border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                      aria-label={`Filtrar por ${category.name} (${productCount} productos)`}
                    >
                      <div className={`p-2 rounded-lg mx-auto mb-2 w-fit ${
                        selectedCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-gray-50 group-hover:bg-gray-100'
                      }`}>
                        <IconComponent className={`w-5 h-5 mx-auto transition-colors duration-200 ${
                          selectedCategory === category.id ? 'text-white' : 'text-secondary group-hover:text-primary'
                        }`} />
                      </div>
                      <span className="block font-medium text-sm mb-1">{category.name}</span>
                      <span className={`block text-xs ${
                        selectedCategory === category.id ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        ({productCount})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Información de resultados */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-200 gap-4">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium text-gray-700">
                {filteredProducts.length} productos encontrados
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">{productsInStock} disponibles</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">{productsOnSale} en oferta</span>
              </div>
            </div>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-gray-600 hover:text-primary font-medium px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 self-start sm:self-auto"
                aria-label="Limpiar todos los filtros de búsqueda"
              >
                Limpiar filtros
              </button>
            )}
          </div>

      {/* Grid de productos */}
      {filteredProducts.length > 0 ? (
       <>
         <div className={
           viewMode === 'grid'
             ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
             : 'space-y-4'
         }>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
                navigateToProduct={navigateToProduct}
              />
            ))}
          </div>

          {/* Paginación */}
          {hasMore && !searchQuery.trim() && (
            <div className="text-center">
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={loading}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? 'Cargando...' : 'Cargar más productos'}
              </button>
            </div>
          )}
        </>
      ) : (
        // Estado vacío
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No encontramos productos
          </h3>
          <p className="text-gray-600 mb-6">
            {searchQuery.trim()
              ? `No hay productos que coincidan con "${searchQuery}"`
              : 'No hay productos disponibles en esta categoría'
            }
          </p>
          <button
            onClick={clearFilters}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Mostrar toda la colección
          </button>
        </div>
      )}

       {/* Estadísticas */}
       {filteredProducts.length > 0 && (
         <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
             <div className="text-2xl font-bold text-primary mb-1">
               {filteredProducts.length}
             </div>
             <div className="text-sm text-gray-600">Productos</div>
           </div>
           <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
             <div className="text-2xl font-bold text-green-600 mb-1">
               {productsInStock}
             </div>
             <div className="text-sm text-gray-600">Disponibles</div>
           </div>
           <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
             <div className="text-2xl font-bold text-red-600 mb-1">
               {productsOnSale}
             </div>
             <div className="text-sm text-gray-600">En oferta</div>
           </div>
           <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
             <div className="text-2xl font-bold text-primary mb-1 flex items-center justify-center">
               <Star className="w-5 h-5 mr-1 fill-current text-yellow-400" />
               5.0
             </div>
             <div className="text-sm text-gray-600">Calificación</div>
           </div>
         </div>
       )}

       {/* CTA section */}
       {filteredProducts.length > 0 && (
         <div className="mt-8 bg-primary rounded-lg p-6 text-center text-white">
           <h3 className="text-xl font-bold mb-4">
             ¿Necesitas ayuda para elegir la pieza perfecta?
           </h3>
           <p className="text-white/90 mb-6">
             Nuestro equipo de expertos está listo para guiarte en la selección de la pieza ideal.
           </p>
           <a
             href={`https://wa.me/573146081297?text=Hola%20TIEMPO%20Y%20ESTILO,%20necesito%20asesoría%20para%20elegir%20una%20pieza`}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center bg-whatsapp hover:bg-whatsapp-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
           >
             <Phone className="w-4 h-4 mr-2" />
             Consultar por WhatsApp
           </a>
         </div>
       )}
       </div>
     </div>
   </section>
 );
};

export default OptimizedProductCatalog;