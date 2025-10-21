import React, { useState, useEffect } from 'react';

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
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [key, setKey] = useState(Date.now());

  // Actualizar la imagen cuando cambia el src
  useEffect(() => {
    if (src) {
      setImageSrc(src);
      setIsLoaded(false);
      setHasError(false);
      setKey(Date.now()); // Forzar re-render del componente img
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad && onLoad(imageSrc);
  };

  const handleError = () => {
    console.error('❌ Error cargando imagen:', imageSrc);
    setHasError(true);
    setIsLoaded(false);
    if (src !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setKey(Date.now()); // Forzar re-render con imagen de fallback
    }
    onError && onError(new Error(`Failed to load image: ${imageSrc}`));
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        key={key}
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'grayscale' : ''}`}
        loading={priority === 'high' ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Cargando...</div>
        </div>
      )}
    </div>
  );
};

// Componente simplificado para galería de imágenes
export const OptimizedImageGallery = ({
  images,
  currentIndex,
  onImageChange,
  className = ''
}) => {
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

      {/* Indicadores simples */}
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