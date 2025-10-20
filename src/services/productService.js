// Servicio avanzado de gestión de productos e imágenes
import { imageOptimizer } from './imageOptimizer.js';

export class ProductService {
  constructor() {
    this.products = [];
    this.categories = [];
    this.loadingStates = new Map();
    this.productCache = new Map();
    this.productsPromise = null;

    this.init();
  }

  async init() {
    // Crear promesas únicas para evitar múltiples imports
    this.productsPromise = import('../data/products.js');
  }

  // Función única para importar productos
  async getProductsData() {
    if (!this.productsPromise) {
      this.productsPromise = import('../data/products.js');
    }
    return await this.productsPromise;
  }

  // Usar optimizador de imágenes global
  get imageOptimizer() {
    return imageOptimizer;
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

      // Importar productos dinámicamente (solo una vez)
      const { products: allProducts, categories } = await this.getProductsData();

      this.products = allProducts;
      this.categories = categories;

      // Filtrar productos por categoría
      let filteredProducts = category === 'all'
        ? allProducts
        : allProducts.filter(product => product.category === category);

      // Aplicar paginación
      const paginatedProducts = filteredProducts.slice(offset, offset + limit);

      // Precargar imágenes de productos visibles (máximo 10)
      this.preloadProductImages(paginatedProducts, 10);

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
  async preloadProductImages(products, maxImages = 5) {
    const imageOptimizer = this.imageOptimizer;
    if (!imageOptimizer) return;

    const imageSources = [];
    let count = 0;

    for (const product of products) {
      // Solo imagen principal para cada producto (más importante)
      if (product.image && count < maxImages) {
        imageSources.push(product.image);
        count++;
      }

      // Si necesitamos más imágenes, incluir algunas adicionales
      if (count < maxImages && product.images && product.images.length > 0) {
        const additionalImages = product.images.slice(0, Math.min(2, maxImages - count));
        imageSources.push(...additionalImages);
        count += additionalImages.length;
      }

      // Detener si ya tenemos suficientes imágenes
      if (count >= maxImages) break;
    }

    // Solo precargar si tenemos imágenes
    if (imageSources.length > 0) {
      imageOptimizer.preloadImages(imageSources, 'low');
    }
  }

  // Obtener producto por ID con caché
  async getProductById(id, useCache = true) {
    const cacheKey = `product_${id}`;

    if (useCache && this.productCache.has(cacheKey)) {
      return this.productCache.get(cacheKey);
    }

    try {
      const { products } = await this.getProductsData();
      const product = products.find(p => p.id === parseInt(id));

      if (product) {
        // Precargar imágenes del producto (máximo 3 para producto individual)
        this.preloadProductImages([product], 3);
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
          const { products } = await this.getProductsData();

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

          // Precargar imágenes de resultados (máximo 8 para búsqueda)
          this.preloadProductImages(results, 8);

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
      const { products } = await this.getProductsData();
      const currentProduct = products.find(p => p.id === parseInt(productId));

      if (!currentProduct) return [];

      // Encontrar productos de la misma categoría
      const relatedProducts = products
        .filter(p => p.id !== parseInt(productId) && p.category === currentProduct.category)
        .slice(0, limit);

      // Precargar imágenes (máximo 6 para productos relacionados)
      this.preloadProductImages(relatedProducts, 6);

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

    const imageOptimizer = this.imageOptimizer;
    if (imageOptimizer) {
      imageOptimizer.clearCache();
    }
  }

  // Obtener estadísticas de rendimiento
  getPerformanceStats() {
    const stats = {
      cachedProducts: this.productCache.size,
      loadingStates: this.loadingStates.size
    };

    const imageOptimizer = this.imageOptimizer;
    if (imageOptimizer) {
      try {
        return {
          ...imageOptimizer.getPerformanceStats(),
          ...stats
        };
      } catch (error) {
        console.warn('Error getting image optimizer stats:', error);
      }
    }

    return stats;
  }

  // Precarga inteligente basada en comportamiento del usuario
  preloadBasedOnUserBehavior(currentProductId, userPreferences = {}) {
    const imageOptimizer = this.imageOptimizer;
    if (!imageOptimizer) return;

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
    getPerformanceStats: () => productService.getPerformanceStats(),
    preloadBasedOnUserBehavior: (currentProductId, userPreferences) =>
      productService.preloadBasedOnUserBehavior(currentProductId, userPreferences)
  };
};

export default productService;