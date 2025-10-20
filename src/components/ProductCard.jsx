import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart, Palette, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCard = ({ product, addToCart, viewMode = 'grid', navigateToProduct }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(
    product.hasVariants ? product.variants[0] : null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Determinar qué imágenes mostrar
  const productImages = selectedVariant && selectedVariant.images
    ? selectedVariant.images
    : (product.images && product.images.length > 0 ? product.images : [product.image]);

  // Si la variante tiene imagen específica, usar esa, sino usar la imagen del producto
  const variantImage = selectedVariant && selectedVariant.image ? selectedVariant.image : product.image;

  const currentImage = productImages[currentImageIndex] || variantImage;

  const currentProduct = selectedVariant
    ? { ...product, ...selectedVariant, image: currentImage }
    : { ...product, image: currentImage };

  // Función para verificar si la imagen existe y cargar
  const checkImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error('Image failed to load'));
      img.src = src;
    });
  };

  // Función para navegar entre imágenes
  const nextImage = (e) => {
    e.stopPropagation();
    if (productImages.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === productImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (productImages.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? productImages.length - 1 : prev - 1
      );
    }
  };

  // Verificar imagen al montar componente y cuando cambie
  useEffect(() => {
    if (currentImage) {
      setImageError(false);
      setImageLoaded(false); // Iniciar como cargando

      // Verificar imagen
      checkImage(currentImage)
        .then(() => {
          setImageLoaded(true);
          setImageError(false);
        })
        .catch(() => {
          setImageError(true);
          setImageLoaded(true); // Para mostrar el placeholder de error
        });
    } else {
      setImageError(true);
      setImageLoaded(true);
    }
  }, [currentImage]);

  // Resetear índice de imagen cuando cambie la variante
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedVariant]);

  // Si hay una variante seleccionada y tiene imagen específica, usar esa imagen
  useEffect(() => {
    if (selectedVariant && selectedVariant.image) {
      setCurrentImageIndex(0);
    }
  }, [selectedVariant]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(currentProduct);

    // Facebook Pixel - AddToCart Event
    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddToCart', {
        value: currentProduct.price,
        currency: 'COP',
        content_ids: [currentProduct.sku],
        content_name: currentProduct.name,
        content_type: 'product',
        contents: [{
          id: currentProduct.sku,
          quantity: 1,
          item_price: currentProduct.price
        }],
        num_items: 1
      });
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleViewProduct = (e) => {
    e.stopPropagation();
    if (navigateToProduct) {
      navigateToProduct(product);
    }

    // Facebook Pixel - ViewContent Event
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_ids: [product.sku],
        content_name: product.name,
        content_category: product.category,
        content_type: 'product',
        value: product.price,
        currency: 'COP'
      });
    }
  };

  // Función para formatear precio
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Vista de lista mejorada
  if (viewMode === 'list') {
    return (
      <div
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-primary/20 hover:border-primary/40 cursor-pointer group"
        onClick={handleViewProduct}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Imagen */}
          <div className="relative w-full sm:w-40 md:w-48 h-40 sm:h-32 md:h-40 flex-shrink-0 overflow-hidden bg-gray-50 aspect-[4/3]">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-pearl-50 to-pearl-100" />
            )}
            {imageError ? (
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center text-gray-400 px-4">
                  <div className="text-3xl mb-2">🏷️</div>
                  <div className="text-xs font-medium">{product.name}</div>
                  <div className="text-xs text-gray-300 mt-1">Producto</div>
                </div>
              </div>
            ) : (
              <OptimizedImage
                src={currentImage}
                alt={`${product.name} - ${product.category} - GoToBuy Colombia`}
                title={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                style={{ objectPosition: 'center center' }}
                priority="low"
                size="400x300"
              />
            )}

            {/* Controles de navegación para múltiples imágenes */}
            {productImages.length > 1 && (
              <>
                {/* Flecha izquierda */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Flecha derecha */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Indicadores de imagen */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.discount && (
                <span className="bg-luxury text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                  -{product.discount}%
                </span>
              )}
              {product.inStock && (
                <span className="bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-1"></div>
                  Stock: {product.stock}
                </span>
              )}
              {productImages.length > 1 && (
                <span className="bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {productImages.length} imágenes
                </span>
              )}
              {product.hasVariants && (
                <span className="bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                  <Palette className="w-3 h-3 mr-1" />
                  {product.variants.length} colores
                </span>
              )}
            </div>

            {/* Overlay con botón de ver producto */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <button
                onClick={handleViewProduct}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Ver detalles
              </button>
            </div>

            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <span className="bg-gray-900 text-white px-3 py-1 rounded-lg font-medium text-sm">
                  Agotado
                </span>
              </div>
            )}
          </div>
          
          {/* Contenido */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between min-h-0">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-primary mb-1 hover:text-secondary transition-colors cursor-pointer line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-secondary text-xs font-medium bg-secondary-50 px-2 py-0.5 rounded-md inline-block">
                    SKU: {currentProduct.sku}
                  </p>
                </div>
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-full transition-all duration-300 ml-3 flex-shrink-0 ${
                    isLiked ? 'text-accent bg-accent/10' : 'text-primary/60 hover:text-accent hover:bg-accent/10'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              {/* Selector de variantes para vista lista */}
              {product.hasVariants && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-primary-700 font-medium">Opciones:</span>
                    {product.variants.slice(0, 4).map((variant) => (
                      <button
                        key={variant.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVariant(variant);
                        }}
                        className={`text-xs px-2 py-1 rounded-md border transition-all duration-300 ${
                          selectedVariant?.id === variant.id
                            ? 'border-primary bg-primary text-white'
                            : 'border-primary-700 hover:border-primary'
                        }`}
                        title={variant.name}
                      >
                        {variant.name}
                      </button>
                    ))}
                    {product.variants.length > 4 && (
                      <span className="text-xs text-primary-600">
                        +{product.variants.length - 4} más
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              <p className="text-primary-700 mb-4 text-sm line-clamp-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-secondary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <span className="text-primary-600 text-xs">(4.9)</span>
              </div>
            </div>
            
            {/* Precio y acciones */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-primary-600 line-through text-sm">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <span className="text-secondary text-sm font-medium">
                    Ahorras {formatPrice((product.originalPrice || 0) - product.price)}
                  </span>
                )}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleViewProduct}
                  className="flex-1 bg-primary hover:bg-primary-800 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm flex items-center justify-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Ver detalles
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="bg-primary-gradient hover:opacity-90 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm flex items-center justify-center gap-2 animate-gradient"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {product.inStock ? 'Agregar' : 'Agotado'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista de tarjeta (grid) mejorada con mejor responsive
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-primary/20 hover:border-primary/40 hover:-translate-y-1 w-full max-w-sm mx-auto cursor-pointer h-full flex flex-col"
      onClick={handleViewProduct}
    >

      {/* Imagen */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[4/3]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse" />
        )}
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-2 border-dashed border-primary/20">
            <div className="text-center text-gray-400 px-4">
              <div className="text-4xl mb-2">🏷️</div>
              <div className="text-sm font-medium line-clamp-2">{product.name}</div>
              <div className="text-xs text-gray-300 mt-1">Producto</div>
            </div>
          </div>
        ) : (
          <>
            <img
              src={currentImage}
              alt={`${product.name} - ${product.category} - GoToBuy Colombia`}
              title={product.name}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
            />

            {/* Controles de navegación para múltiples imágenes */}
            {productImages.length > 1 && (
              <>
                {/* Flecha izquierda */}
                <button
                  onClick={prevImage}
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-4 sm:h-4" />
                </button>

                {/* Flecha derecha */}
                <button
                  onClick={nextImage}
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-4 sm:h-4" />
                </button>

                {/* Indicadores de imagen */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white shadow-sm'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Badges en la esquina */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 z-10">
          {product.discount && (
            <span className="bg-accent text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
              -{product.discount}%
            </span>
          )}
          {product.inStock && (
            <span className="bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-1"></div>
              Stock: {product.stock}
            </span>
          )}
          {productImages.length > 1 && (
            <span className="bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <Eye className="w-3 h-3 mr-1" />
              {productImages.length}
            </span>
          )}
          {product.hasVariants && (
            <span className="bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <Palette className="w-3 h-3 mr-1" />
              {product.variants.length}
            </span>
          )}
        </div>

        {/* Overlay con botón de ver producto */}
         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center z-10">
           <button
             onClick={handleViewProduct}
             className="bg-white text-primary border-2 border-primary/30 hover:border-primary px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2 text-sm sm:text-base"
           >
             <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
             <span className="hidden sm:inline">Ver producto completo</span>
             <span className="sm:hidden">Ver más</span>
           </button>
         </div>

        {/* Botón de favorito */}
         <button
           onClick={handleLike}
           className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-2.5 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-10 ${
             isLiked
               ? 'bg-accent text-white shadow-lg'
               : 'bg-white bg-opacity-90 text-primary/70 hover:bg-accent hover:text-white shadow-md'
           }`}
         >
           <Heart className={`h-4 w-4 sm:h-4 sm:w-4 ${isLiked ? 'fill-current' : ''}`} />
         </button>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
            <span className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium">
              Agotado
            </span>
          </div>
        )}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between">

        {/* Título y SKU */}
        <div className="mb-2 sm:mb-3">
          <h3 className="font-bold text-sm sm:text-base lg:text-lg text-primary mb-1 group-hover:text-secondary transition-colors duration-300 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-secondary text-xs font-medium bg-secondary-50 px-2 py-0.5 rounded-md inline-block">
            SKU: {currentProduct.sku}
          </p>
        </div>

        {/* Selector de variantes */}
        {product.hasVariants && (
          <div className="mb-2 sm:mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-primary-700 font-medium">Opciones:</span>
              <div className="flex gap-1 flex-wrap">
                {product.variants.slice(0, 3).map((variant) => (
                  <button
                    key={variant.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVariant(variant);
                    }}
                    className={`text-xs px-2 py-1 rounded-md border transition-all duration-300 ${
                      selectedVariant?.id === variant.id
                        ? 'border-primary bg-primary text-white'
                        : 'border-primary-700 hover:border-primary'
                    }`}
                    title={variant.name}
                  >
                    {variant.name.split(' ')[1] || variant.name}
                  </button>
                ))}
                {product.variants.length > 3 && (
                  <span className="text-xs text-primary-600 flex items-center px-1">
                    +{product.variants.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Descripción */}
        <p className="text-primary-700 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center gap-1">
            <div className="flex text-secondary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
              ))}
            </div>
            <span className="text-primary-600 text-xs sm:text-sm ml-1">(4.9)</span>
          </div>
          {product.discount && (
            <span className="text-secondary text-xs sm:text-sm font-medium bg-secondary-50 px-2 py-1 rounded-md hidden sm:block">
              Ahorras {formatPrice((product.originalPrice || 0) - product.price)}
            </span>
          )}
        </div>

        {/* Precios */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-primary-600 line-through text-xs sm:text-sm">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={handleViewProduct}
            className="flex-1 bg-primary hover:bg-primary-800 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
          >
            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Ver detalles</span>
            <span className="sm:hidden">Ver</span>
          </button>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-primary-gradient hover:opacity-90 disabled:bg-gray-400 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 animate-gradient"
          >
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">
              {product.inStock ? 'Agregar' : 'Agotado'}
            </span>
            <span className="sm:hidden">
              {product.inStock ? '+' : 'N/A'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
