import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart, Palette, Eye, ChevronLeft, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';

const ProductCard = ({ product, addToCart, viewMode = 'grid', navigateToProduct }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(
    product.hasVariants ? product.variants[0] : null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const productImages = selectedVariant && selectedVariant.images
    ? selectedVariant.images
    : (product.images && product.images.length > 0 ? product.images : [product.image]);

  const variantImage = selectedVariant && selectedVariant.image ? selectedVariant.image : product.image;
  const currentImage = productImages[currentImageIndex] || variantImage;

  const currentProduct = selectedVariant
    ? { ...product, ...selectedVariant, image: currentImage }
    : { ...product, image: currentImage };

  const checkImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error('Image failed to load'));
      img.src = src;
    });
  };

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

  useEffect(() => {
    if (currentImage) {
      setImageError(false);
      setImageLoaded(false);

      checkImage(currentImage)
        .then(() => {
          setImageLoaded(true);
          setImageError(false);
        })
        .catch(() => {
          setImageError(true);
          setImageLoaded(true);
        });
    } else {
      setImageError(true);
      setImageLoaded(true);
    }
  }, [currentImage]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedVariant]);

  useEffect(() => {
    if (selectedVariant && selectedVariant.image) {
      setCurrentImageIndex(0);
    }
  }, [selectedVariant]);

  const handleAddToCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!product.inStock) {
      return;
    }
    
    addToCart(currentProduct);

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
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsLiked(!isLiked);
  };

  const handleViewProduct = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (navigateToProduct) {
      navigateToProduct(product);
    }

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
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary/40 transform hover:-translate-y-1 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Imagen con overlay gradiente */}
          <div className="relative w-full sm:w-48 md:w-64 h-48 sm:h-40 md:h-48 flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-gray-50 to-accent/5 animate-pulse" />
            )}
            {imageError ? (
              <div className="w-full h-full bg-gradient-to-br from-secondary/10 via-gray-50 to-accent/10 flex items-center justify-center">
                <div className="text-center text-gray-400 px-4">
                  <Sparkles className="w-12 h-12 mx-auto mb-2 text-secondary/40" />
                  <div className="text-sm font-semibold text-gray-500">{product.name}</div>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={currentImage}
                  alt={`${product.name} - ${product.category}`}
                  title={product.name}
                  className={`w-full h-full object-cover object-center transition-all duration-700 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                  loading="lazy"
                />
                
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )}

            {/* Controles de navegación mejorados */}
            {productImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-secondary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-secondary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? 'bg-secondary w-6 h-2'
                          : 'bg-white/60 hover:bg-white/90 w-2 h-2'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            
            {/* Badges premium */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.discount && (
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  -{product.discount}%
                </span>
              )}
              {product.inStock && (
                <span className="bg-gradient-to-r from-secondary to-accent text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    Stock: {product.stock}
                  </div>
                </span>
              )}
              {productImages.length > 1 && (
                <span className="bg-white/90 backdrop-blur-sm text-secondary px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                  <Eye className="w-3 h-3 inline mr-1" />
                  {productImages.length}
                </span>
              )}
            </div>

            {!product.inStock && (
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm flex items-center justify-center">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-xl">
                  Agotado
                </span>
              </div>
            )}
          </div>
          
          {/* Contenido mejorado */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 hover:text-secondary transition-colors cursor-pointer line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary px-3 py-1.5 rounded-full border border-secondary/20">
                    <Sparkles className="w-3 h-3" />
                    SKU: {currentProduct.sku}
                  </span>
                </div>
                <button
                  onClick={handleLike}
                  className={`p-3 rounded-full transition-all duration-300 ml-3 flex-shrink-0 ${
                    isLiked 
                      ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg scale-110' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 hover:text-red-500 hover:scale-110'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              {/* Selector de variantes mejorado */}
              {product.hasVariants && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-semibold text-gray-700">Colores disponibles:</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {product.variants.slice(0, 4).map((variant) => (
                      <button
                        key={variant.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVariant(variant);
                        }}
                        className={`text-xs px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                          selectedVariant?.id === variant.id
                            ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                        }`}
                        title={variant.name}
                      >
                        {variant.name}
                      </button>
                    ))}
                    {product.variants.length > 4 && (
                      <span className="text-xs text-gray-500 flex items-center px-2 font-medium">
                        +{product.variants.length - 4} más
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              <p className="text-gray-600 mb-4 text-sm line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              {/* Rating mejorado */}
              <div className="flex items-center gap-3 mb-4 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-2 rounded-lg w-fit">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current drop-shadow-sm" />
                  ))}
                </div>
                <span className="text-gray-700 text-sm font-bold">(4.9)</span>
              </div>
            </div>
            
            {/* Precio y acciones */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm font-medium">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <div className="text-right">
                    <span className="text-green-600 text-sm font-bold bg-green-50 px-3 py-1 rounded-full">
                      Ahorras {formatPrice((product.originalPrice || 0) - product.price)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleViewProduct(e);
                  }}
                  className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl text-sm flex items-center justify-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Ver detalles
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart(e);
                  }}
                  disabled={!product.inStock}
                  className="bg-gradient-to-r from-secondary to-accent hover:from-secondary-600 hover:to-accent-600 disabled:from-gray-300 disabled:to-gray-400 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed"
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

  // Vista de tarjeta (grid) mejorada
  return (
    <div
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary/40 w-full h-full flex flex-col transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen con efectos premium */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-[4/3]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-gray-50 to-accent/5 animate-pulse" />
        )}
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-secondary/10 via-gray-50 to-accent/10 flex items-center justify-center">
            <div className="text-center text-gray-400 px-4">
              <Sparkles className="w-16 h-16 mx-auto mb-3 text-secondary/40" />
              <div className="text-sm font-semibold text-gray-500 line-clamp-2">{product.name}</div>
            </div>
          </div>
        ) : (
          <>
            <img
              src={currentImage}
              alt={`${product.name} - ${product.category}`}
              title={product.name}
              className={`w-full h-full object-cover object-center transition-all duration-700 ${
                isHovered ? 'scale-110 rotate-1' : 'scale-100 rotate-0'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
              loading="lazy"
            />

            {/* Overlay gradiente con efecto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Controles de navegación premium */}
            {productImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-secondary p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-secondary p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? 'bg-secondary shadow-lg w-6 h-2'
                          : 'bg-white/70 hover:bg-white w-2 h-2'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Badges premium con animación */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.discount && (
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg backdrop-blur-sm animate-pulse flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              -{product.discount}%
            </span>
          )}
          {product.inStock && (
            <span className="bg-gradient-to-r from-secondary to-accent text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                {product.stock}
              </div>
            </span>
          )}
          {productImages.length > 1 && (
            <span className="bg-white/90 backdrop-blur-sm text-secondary px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
              <Eye className="w-3 h-3 inline mr-1" />
              {productImages.length}
            </span>
          )}
          {product.hasVariants && (
            <span className="bg-white/90 backdrop-blur-sm text-accent px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
              <Palette className="w-3 h-3 inline mr-1" />
              {product.variants.length}
            </span>
          )}
        </div>

        {/* Overlay con botón de acción */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleViewProduct(e);
            }}
            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl flex items-center gap-2 hover:scale-105"
          >
            <Eye className="w-5 h-5" />
            Ver producto
          </button>
        </div>

        {/* Botón de favorito mejorado */}
        <button
          onClick={handleLike}
          className={`absolute top-3 right-3 p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10 ${
            isLiked
              ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl scale-110'
              : 'bg-white/90 text-gray-400 hover:bg-white hover:text-red-500 hover:scale-110 shadow-lg'
          }`}
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm flex items-center justify-center z-10">
            <span className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold shadow-2xl">
              Agotado
            </span>
          </div>
        )}
      </div>

      {/* Contenido de la tarjeta mejorado */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-gray-50">
        {/* Título y SKU */}
        <div className="mb-3">
          <h3 className="font-bold text-base lg:text-lg text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-300 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary px-3 py-1 rounded-full border border-secondary/20">
            <Sparkles className="w-3 h-3" />
            {currentProduct.sku}
          </span>
        </div>

        {/* Selector de variantes mejorado */}
        {product.hasVariants && (
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-3 h-3 text-secondary" />
              <span className="text-xs font-semibold text-gray-700">Colores:</span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {product.variants.slice(0, 3).map((variant) => (
                <button
                  key={variant.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariant(variant);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all duration-300 ${
                    selectedVariant?.id === variant.id
                      ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  title={variant.name}
                >
                  {variant.name.split(' ')[1] || variant.name}
                </button>
              ))}
              {product.variants.length > 3 && (
                <span className="text-xs text-gray-500 flex items-center px-1 font-medium">
                  +{product.variants.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Rating mejorado */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 rounded-lg">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current drop-shadow-sm" />
              ))}
            </div>
            <span className="text-gray-700 text-xs font-bold">(4.9)</span>
          </div>
          {product.discount && (
            <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
              Ahorra {formatPrice((product.originalPrice || 0) - product.price)}
            </span>
          )}
        </div>

        {/* Precios mejorados */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm font-medium">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Botones de acción mejorados */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleViewProduct(e);
            }}
            className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white py-3 px-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl text-sm flex items-center justify-center gap-2"
          >
            <Eye className="h-4 w-4" />
            <span className="hidden sm:inline">Ver</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart(e);
            }}
            disabled={!product.inStock}
            className="flex-1 bg-gradient-to-r from-secondary to-accent hover:from-secondary-600 hover:to-accent-600 disabled:from-gray-300 disabled:to-gray-400 text-white py-3 px-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="h-4 w-4" />
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