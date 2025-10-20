import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  size = null,
  priority = 'low',
  fallbackSrc = '/assets/images/placeholder.webp',
  onLoad = null,
  onError = null,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(fallbackSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  // Removido el uso del servicio de optimización para simplificar

  useEffect(() => {
    const currentRef = imgRef.current;

    // Configurar Intersection Observer para esta imagen
    if (currentRef && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      observer.observe(currentRef);

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    } else {
      // Fallback para navegadores sin Intersection Observer
      setIsInView(true);
    }
  }, []);

  useEffect(() => {
    if (isInView && src) {
      loadOptimizedImage();
    }
  }, [isInView, src]);

  const loadOptimizedImage = async () => {
    try {
      // Usar la ruta directamente sin optimización adicional
      const imageUrl = src;

      // Precargar imagen
      const img = new Image();

      img.onload = () => {
        setImageSrc(imageUrl);
        setIsLoaded(true);
        setHasError(false);
        onLoad && onLoad(imageUrl);
      };

      img.onerror = () => {
        setHasError(true);
        setImageSrc(fallbackSrc);
        onError && onError(new Error(`Failed to load image: ${imageUrl}`));
      };

      img.src = imageUrl;

    } catch (error) {
      console.error('Error loading image:', error);
      setHasError(true);
      setImageSrc(fallbackSrc);
    }
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    loadOptimizedImage();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'grayscale' : ''}`}
        loading={priority === 'high' ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Cargando...</div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
          <div className="text-gray-400 text-xs mb-2">Error al cargar imagen</div>
          <button
            onClick={handleRetry}
            className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded transition-colors"
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Overlay para imágenes de productos */}
      {isLoaded && !hasError && (
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
      )}
    </div>
  );
};

// Componente para galería de imágenes optimizada
export const OptimizedImageGallery = ({
  images,
  currentIndex,
  onImageChange,
  className = ''
}) => {
  const { preloadImages } = useImageOptimizer();

  useEffect(() => {
    // Precargar imágenes cercanas al índice actual
    if (images && images.length > 0) {
      const nearbyImages = [
        ...images.slice(Math.max(0, currentIndex - 1), currentIndex),
        images[currentIndex],
        ...images.slice(currentIndex + 1, currentIndex + 2)
      ].filter(Boolean);

      preloadImages(nearbyImages, 'high');
    }
  }, [currentIndex, images, preloadImages]);

  if (!images || images.length === 0) {
    return (
      <OptimizedImage
        src="/assets/images/placeholder.webp"
        alt="Sin imagen"
        className={className}
      />
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Imagen principal */}
      <OptimizedImage
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover"
        priority="high"
        size="800x600"
      />

      {/* Indicadores */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onImageChange && onImageChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white shadow-lg scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;