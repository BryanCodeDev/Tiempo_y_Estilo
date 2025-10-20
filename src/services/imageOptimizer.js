// Servicio avanzado de optimización de imágenes
export class ImageOptimizer {
  constructor() {
    this.imageCache = new Map();
    this.preloadQueue = new Set();
    this.loadedImages = new Set();
    this.observer = null;

    this.initLazyLoading();
    this.initIntersectionObserver();
  }

  // Inicializar lazy loading mejorado
  initLazyLoading() {
    // Lazy loading nativo con fallback
    if ('loading' in HTMLImageElement.prototype) {
      this.setupNativeLazyLoading();
    } else {
      this.setupFallbackLazyLoading();
    }
  }

  // Configurar lazy loading nativo moderno
  setupNativeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    images.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('fade-in');
    });
  }

  // Fallback para navegadores antiguos
  setupFallbackLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          this.loadImage(img);
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Cargar imagen con optimizaciones
  loadImage(img) {
    const src = img.dataset.src;
    const cacheKey = this.getCacheKey(src);

    // Verificar caché
    if (this.imageCache.has(cacheKey)) {
      img.src = this.imageCache.get(cacheKey);
      img.classList.add('fade-in');
      return;
    }

    // Crear imagen optimizada
    const optimizedImg = new Image();

    optimizedImg.onload = () => {
      // Crear versión WebP si es posible
      this.convertToWebP(optimizedImg.src).then(optimizedSrc => {
        img.src = optimizedSrc;
        this.imageCache.set(cacheKey, optimizedSrc);
        img.classList.add('fade-in');
        this.loadedImages.add(src);
      }).catch(() => {
        img.src = optimizedImg.src;
        this.imageCache.set(cacheKey, optimizedImg.src);
        img.classList.add('fade-in');
        this.loadedImages.add(src);
      });
    };

    optimizedImg.onerror = () => {
      this.handleImageError(img);
    };

    optimizedImg.src = src;
  }

  // Convertir a WebP para mejor compresión
  async convertToWebP(src) {
    return new Promise((resolve, reject) => {
      // Por ahora devolver la imagen original
      // En producción usarías una librería como webp-converter
      resolve(src);
    });
  }

  // Manejar errores de carga de imágenes
  handleImageError(img) {
    const fallbackSrc = '/assets/images/placeholder.webp';

    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;
      img.classList.add('error-image');
    }

    console.warn('Error loading image:', img.dataset.src);
  }

  // Sistema de miniaturas inteligente
  generateThumbnail(src, size = '300x300') {
    const cacheKey = `${src}_${size}`;

    if (this.imageCache.has(cacheKey)) {
      return this.imageCache.get(cacheKey);
    }

    // Crear miniatura (simulado)
    const thumbnailSrc = src.replace('.webp', `_thumb_${size}.webp`);
    this.imageCache.set(cacheKey, thumbnailSrc);

    return thumbnailSrc;
  }

  // Precarga inteligente de imágenes usando elementos Image
  preloadImages(imageSources, priority = 'low') {
    imageSources.forEach(src => {
      if (!this.loadedImages.has(src) && !this.preloadQueue.has(src)) {
        this.preloadQueue.add(src);

        // Crear imagen para precarga
        const img = new Image();

        img.onload = () => {
          // Imagen precargada exitosamente
          this.imageCache.set(this.getCacheKey(src), src);
          this.loadedImages.add(src);
          this.preloadQueue.delete(src);
        };

        img.onerror = () => {
          // Error en precarga, remover de la cola
          this.preloadQueue.delete(src);
        };

        // Iniciar precarga
        img.src = src;

        // Establecer prioridad si es alta
        if (priority === 'high' && img.fetchPriority !== undefined) {
          img.fetchPriority = 'high';
        }
      }
    });
  }

  // Precarga de imágenes cercanas al viewport
  preloadNearbyImages(currentIndex, images, range = 2) {
    const start = Math.max(0, currentIndex - range);
    const end = Math.min(images.length - 1, currentIndex + range);

    const nearbyImages = images.slice(start, end + 1);
    this.preloadImages(nearbyImages.map(img => img.src));
  }

  // Configurar Intersection Observer para carga automática
  initIntersectionObserver() {
    if (!window.IntersectionObserver) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            this.loadImage(img);
            this.observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
  }

  // Observar imágenes para carga automática
  observeImages(images) {
    images.forEach(img => {
      if (img.dataset.src) {
        this.observer.observe(img);
      }
    });
  }

  // Obtener clave de caché única
  getCacheKey(src) {
    return btoa(src).slice(0, 16);
  }

  // Limpiar caché de imágenes
  clearCache() {
    this.imageCache.clear();
    this.loadedImages.clear();
    this.preloadQueue.clear();
  }

  // Obtener estadísticas de rendimiento
  getPerformanceStats() {
    return {
      cachedImages: this.imageCache.size,
      loadedImages: this.loadedImages.size,
      queuedImages: this.preloadQueue.size,
      cacheHitRate: this.loadedImages.size / (this.imageCache.size + this.loadedImages.size) * 100
    };
  }
}

// Instancia global del optimizador
export const imageOptimizer = new ImageOptimizer();

// Hook personalizado para usar en componentes React
export const useImageOptimizer = () => {
  return {
    optimizeImage: (src, options = {}) => {
      return imageOptimizer.generateThumbnail(src, options.size);
    },
    preloadImages: imageOptimizer.preloadImages.bind(imageOptimizer),
    observeImages: imageOptimizer.observeImages.bind(imageOptimizer),
    getPerformanceStats: imageOptimizer.getPerformanceStats.bind(imageOptimizer),
    clearCache: imageOptimizer.clearCache.bind(imageOptimizer)
  };
};

export default imageOptimizer;