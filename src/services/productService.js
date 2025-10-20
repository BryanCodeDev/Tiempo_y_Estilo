// Servicio avanzado de gestión de productos e imágenes
export class ProductService {
  constructor() {
    this.products = [];
    this.categories = [];
    this.imageOptimizer = null;
    this.loadingStates = new Map();
    this.productCache = new Map();

    this.init();
  }

  async init() {
    // Importar optimizador de imágenes dinámicamente
    const { imageOptimizer } = await import('./imageOptimizer.js');
    this.imageOptimizer = imageOptimizer;
  }

  // Cargar productos de manera eficiente
  async loadProducts(options = {}) {
    const {
      category = 'all',
      limit = 20,
      offset = 0,
      useCache = true
    } = options;

    const cacheKey = `products_${category}_${limit}_${offset}`;

    // Verificar caché
    if (useCache && this.productCache.has(cacheKey)) {
      return this.productCache.get(cacheKey);
    }

    try {
      this.setLoadingState(cacheKey, 'loading');

      // Importar productos dinámicamente
      const { products: allProducts, categories } = await import('../data/products.js');

      this.products = allProducts;
      this.categories = categories;

      // Filtrar productos por categoría
      let filteredProducts = category === 'all'
        ? allProducts
        : allProducts.filter(product => product.category === category);

      // Aplicar paginación
      const paginatedProducts = filteredProducts.slice(offset, offset + limit);

      // Precargar imágenes de productos visibles
      this.preloadProductImages(paginatedProducts);

      // Almacenar en caché
      this.productCache.set(cacheKey, {
        products: paginatedProducts,
        total: filteredProducts.length,
        hasMore: offset + limit < filteredProducts.length
      });

      this.setLoadingState(cacheKey, 'loaded');
      return this.productCache.get(cacheKey);

    } catch (error) {
      console.error('Error loading products:', error);
      this.setLoadingState(cacheKey, 'error');
      throw error;
    }
  }

  // Precargar imágenes de productos de manera inteligente
  preloadProductImages(products) {
    if (!this.imageOptimizer) return;

    const imageSources = [];

    products.forEach(product => {
      // Imagen principal
      if (product.image) {
        imageSources.push(product.image);
      }

      // Imágenes adicionales
      if (product.images && product.images.length > 0) {
        imageSources.push(...product.images);
      }

      // Imágenes de variantes
      if (product.hasVariants && product.variants) {
        product.variants.forEach(variant => {
          if (variant.image) {
            imageSources.push(variant.image);
          }
          if (variant.images && variant.images.length > 0) {
            imageSources.push(...variant.images);
          }
        });
      }
    });

    // Precargar imágenes con prioridad baja
    this.imageOptimizer.preloadImages(imageSources, 'low');
  }

  // Obtener producto por ID con caché
  async getProductById(id, useCache = true) {
    const cacheKey = `product_${id}`;

    if (useCache && this.productCache.has(cacheKey)) {
      return this.productCache.get(cacheKey);
    }

    try {
      const { products } = await import('../data/products.js');
      const product = products.find(p => p.id === parseInt(id));

      if (product) {
        // Precargar todas las imágenes del producto
        this.preloadProductImages([product]);
        this.productCache.set(cacheKey, product);
      }

      return product;
    } catch (error) {
      console.error('Error loading product:', error);
      throw error;
    }
  }

  // Buscar productos con debounce
  searchProducts(query, options = {}) {
    const {
      limit = 10,
      category = 'all'
    } = options;

    return new Promise((resolve) => {
      setTimeout(async () => {
        try {
          const { products } = await import('../data/products.js');

          let filteredProducts = products;

          // Filtrar por categoría
          if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
              product.category === category
            );
          }

          // Filtrar por búsqueda
          if (query.trim()) {
            const searchTerm = query.toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
              product.name.toLowerCase().includes(searchTerm) ||
              product.description.toLowerCase().includes(searchTerm) ||
              product.sku.toLowerCase().includes(searchTerm)
            );
          }

          // Limitar resultados
          const results = filteredProducts.slice(0, limit);

          // Precargar imágenes de resultados
          this.preloadProductImages(results);

          resolve(results);
        } catch (error) {
          console.error('Error searching products:', error);
          resolve([]);
        }
      }, 300); // Debounce de 300ms
    });
  }

  // Obtener productos relacionados
  async getRelatedProducts(productId, limit = 4) {
    try {
      const { products } = await import('../data/products.js');
      const currentProduct = products.find(p => p.id === parseInt(productId));

      if (!currentProduct) return [];

      // Encontrar productos de la misma categoría
      const relatedProducts = products
        .filter(p => p.id !== parseInt(productId) && p.category === currentProduct.category)
        .slice(0, limit);

      // Precargar imágenes
      this.preloadProductImages(relatedProducts);

      return relatedProducts;
    } catch (error) {
      console.error('Error loading related products:', error);
      return [];
    }
  }

  // Gestión de estados de carga
  setLoadingState(key, state) {
    this.loadingStates.set(key, state);

    // Emitir evento personalizado para que los componentes reaccionen
    window.dispatchEvent(new CustomEvent('productLoadingStateChange', {
      detail: { key, state }
    }));
  }

  getLoadingState(key) {
    return this.loadingStates.get(key) || 'idle';
  }

  // Limpiar caché cuando sea necesario
  clearCache() {
    this.productCache.clear();
    this.loadingStates.clear();

    if (this.imageOptimizer) {
      this.imageOptimizer.clearCache();
    }
  }

  // Obtener estadísticas de rendimiento
  getPerformanceStats() {
    if (this.imageOptimizer) {
      return {
        ...this.imageOptimizer.getPerformanceStats(),
        cachedProducts: this.productCache.size,
        loadingStates: this.loadingStates.size
      };
    }

    return {
      cachedProducts: this.productCache.size,
      loadingStates: this.loadingStates.size
    };
  }

  // Precarga inteligente basada en comportamiento del usuario
  preloadBasedOnUserBehavior(currentProductId, userPreferences = {}) {
    if (!this.imageOptimizer) return;

    // Precargar productos relacionados
    this.getRelatedProducts(currentProductId, 6);

    // Precargar productos de categorías preferidas
    if (userPreferences.categories) {
      this.loadProducts({
        category: userPreferences.categories[0],
        limit: 3,
        useCache: true
      });
    }
  }
}

// Instancia global del servicio
export const productService = new ProductService();

// Hook personalizado para usar en componentes React
export const useProductService = () => {
  return {
    loadProducts: (options) => productService.loadProducts(options),
    getProductById: (id) => productService.getProductById(id),
    searchProducts: (query, options) => productService.searchProducts(query, options),
    getRelatedProducts: (id, limit) => productService.getRelatedProducts(id, limit),
    getLoadingState: (key) => productService.getLoadingState(key),
    clearCache: () => productService.clearCache(),
    getPerformanceStats: () => productService.getPerformanceStats()
  };
};

export default productService;