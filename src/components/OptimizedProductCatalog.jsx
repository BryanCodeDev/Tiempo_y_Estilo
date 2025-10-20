import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Grid, List, Search, Filter, Loader2 } from 'lucide-react';
import ProductCard from './ProductCard';
import { useProductService } from '../services/productService';
import { useImageOptimizer } from '../services/imageOptimizer';

const OptimizedProductCatalog = ({
  category = 'all',
  itemsPerPage = 12,
  viewMode: initialViewMode = 'grid',
  showSearch = true,
  showFilters = true
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

  // Memoizar productos filtrados por búsqueda
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;

    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

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
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-800"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controles del catálogo */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Modos de vista */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleViewModeChange('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleViewModeChange('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        {/* Estadísticas de rendimiento */}
        <div className="text-sm text-gray-500">
          {totalProducts > 0 && (
            <span>
              {filteredProducts.length} de {totalProducts} productos
            </span>
          )}
        </div>
      </div>

      {/* Grid de productos */}
      {filteredProducts.length > 0 ? (
       <>
         <div className={
           viewMode === 'grid'
             ? 'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6'
             : 'space-y-4 sm:space-y-6'
         }>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
                addToCart={(product) => {
                  // Aquí iría la lógica del carrito
                  console.log('Agregar al carrito:', product);
                }}
                navigateToProduct={(product) => {
                  // Aquí iría la navegación al detalle
                  console.log('Ver producto:', product);
                }}
              />
            ))}
          </div>

          {/* Paginación */}
          {hasMore && !searchQuery.trim() && (
            <div className="text-center">
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={loading}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
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
          <div className="text-gray-400 mb-4">🔍</div>
          <p className="text-gray-600 mb-2">
            {searchQuery.trim()
              ? 'No se encontraron productos que coincidan con tu búsqueda'
              : 'No hay productos disponibles en esta categoría'
            }
          </p>
          {searchQuery.trim() && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary hover:text-primary-800 underline"
            >
              Ver todos los productos
            </button>
          )}
        </div>
      )}

      {/* Información de rendimiento removida para evitar problemas de actualización */}
    </div>
  );
};

export default OptimizedProductCatalog;