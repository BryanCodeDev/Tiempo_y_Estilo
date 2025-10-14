import React, { useState, useEffect } from 'react';
import { Phone, Star, ShoppingCart, Heart, Palette, Eye } from 'lucide-react';

const ProductCard = ({ product, addToCart, viewMode = 'grid', navigateToProduct }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(
    product.hasVariants ? product.variants[0] : null
  );

  const currentProduct = selectedVariant
    ? { ...product, ...selectedVariant, image: selectedVariant.image || product.image }
    : product;

  // Función para verificar si la imagen existe y cargar
  const checkImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error('Image failed to load'));
      img.src = src;
    });
  };

  // Verificar imagen al montar componente y cuando cambie
  useEffect(() => {
    if (currentProduct.image) {
      setImageError(false);
      setImageLoaded(false); // Iniciar como cargando

      // Verificar imagen
      checkImage(currentProduct.image)
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
  }, [currentProduct.image]);


  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const variantText = selectedVariant ? `%0AVariante: ${selectedVariant.name}` : '';
    const message = `¡Hola! Me interesa este producto de GoToBuy:%0A%0A*${product.name}*${variantText}%0APrecio: ${formatPrice(currentProduct.price)}%0ASKU: ${currentProduct.sku}%0A%0A¿Está disponible para entrega inmediata?`;
    window.open(`https://wa.me/573508470735?text=${message}`, '_blank');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(currentProduct);
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
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 cursor-pointer group"
        onClick={handleViewProduct}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Imagen */}
          <div className="relative w-full sm:w-48 h-48 sm:h-40 flex-shrink-0 overflow-hidden bg-gray-100 aspect-[4/3]">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
            )}
            {imageError ? (
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-400 px-4">
                  <div className="text-3xl mb-2">🏷️</div>
                  <div className="text-xs font-medium">{product.name}</div>
                  <div className="text-xs text-gray-300 mt-1">Producto</div>
                </div>
              </div>
            ) : (
              <img
                src={currentProduct.image}
                alt={`${product.name} - ${product.category} - GoToBuy Colombia`}
                title={product.name}
                className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: 'center center' }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                loading="lazy"
                decoding="async"
                fetchpriority="auto"
                width="400"
                height="300"
              />
            )}
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.discount && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                  -{product.discount}%
                </span>
              )}
              {product.inStock && (
                <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-1"></div>
                  Stock: {product.stock}
                </span>
              )}
              {product.hasVariants && (
                <span className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                  <Palette className="w-3 h-3 mr-1" />
                  {product.variants.length} opciones
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
                  <h3 className="font-bold text-lg text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                    {product.name}
                  </h3>
                  {selectedVariant && (
                    <span className="text-sm text-gray-600 block mb-1">
                      {selectedVariant.name}
                    </span>
                  )}
                  <p className="text-blue-600 text-xs font-medium bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                    SKU: {currentProduct.sku}
                  </p>
                </div>
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-full transition-all duration-300 ml-3 flex-shrink-0 ${
                    isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              {/* Selector de variantes para vista lista */}
              {product.hasVariants && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-gray-600 font-medium">Opciones:</span>
                    {product.variants.slice(0, 4).map((variant) => (
                      <button
                        key={variant.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVariant(variant);
                        }}
                        className={`text-xs px-2 py-1 rounded-md border transition-all duration-300 ${
                          selectedVariant?.id === variant.id 
                            ? 'border-gray-900 bg-gray-900 text-white' 
                            : 'border-gray-300 hover:border-gray-500'
                        }`}
                        title={variant.name}
                      >
                        {variant.name}
                      </button>
                    ))}
                    {product.variants.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{product.variants.length - 4} más
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                {product.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <span className="text-gray-500 text-xs">(4.9)</span>
              </div>
            </div>
            
            {/* Precio y acciones */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <span className="text-green-600 text-sm font-medium">
                    Ahorras {formatPrice((product.originalPrice || 0) - product.price)}
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleViewProduct}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm flex items-center justify-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Ver detalles
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {product.inStock ? 'Agregar' : 'Agotado'}
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  title="Consultar por WhatsApp"
                >
                  <Phone className="h-4 w-4" />
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
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-gray-300 hover:-translate-y-1 max-w-sm mx-auto cursor-pointer h-full flex flex-col"
      onClick={handleViewProduct}
    >
      
      {/* Imagen */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
        )}
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-400 px-4">
              <div className="text-4xl mb-2">🏷️</div>
              <div className="text-sm font-medium line-clamp-2">{product.name}</div>
              <div className="text-xs text-gray-300 mt-1">Producto</div>
            </div>
          </div>
        ) : (
          <img
            src={currentProduct.image}
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
            fetchpriority="auto"
            width="400"
            height="300"
          />
        )}
        
        {/* Badges en la esquina */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.discount && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
              -{product.discount}%
            </span>
          )}
          {product.inStock && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-1"></div>
              Stock: {product.stock}
            </span>
          )}
          {product.hasVariants && (
            <span className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <Palette className="w-3 h-3 mr-1" />
              {product.variants.length}
            </span>
          )}
        </div>

        {/* Overlay con botón de ver producto */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={handleViewProduct}
            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <Eye className="w-5 h-5" />
            Ver producto completo
          </button>
        </div>

        {/* Botón de favorito */}
        <button
          onClick={handleLike}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isLiked 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-white bg-opacity-90 text-gray-600 hover:bg-red-500 hover:text-white shadow-md'
          }`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium">
              Agotado
            </span>
          </div>
        )}
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        {/* Título y SKU */}
        <div className="mb-3">
          <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          {selectedVariant && (
            <span className="text-sm text-gray-600 block mb-1">
              {selectedVariant.name}
            </span>
          )}
          <p className="text-blue-600 text-xs font-medium bg-blue-50 px-2 py-0.5 rounded-md inline-block">
            SKU: {currentProduct.sku}
          </p>
        </div>

        {/* Selector de variantes */}
        {product.hasVariants && (
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 font-medium">Opciones:</span>
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
                        ? 'border-gray-900 bg-gray-900 text-white' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    title={variant.name}
                  >
                    {variant.name.split(' ')[1] || variant.name}
                  </button>
                ))}
                {product.variants.length > 3 && (
                  <span className="text-xs text-gray-500 flex items-center px-1">
                    +{product.variants.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Descripción */}
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-1">(4.9)</span>
          </div>
          {product.discount && (
            <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-md">
              Ahorras {formatPrice((product.originalPrice || 0) - product.price)}
            </span>
          )}
        </div>
        
        {/* Precios */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        
        {/* Botones de acción */}
        <div className="flex gap-2">
          <button
            onClick={handleViewProduct}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <Eye className="h-4 w-4" />
            <span className="hidden sm:inline">Ver detalles</span>
            <span className="sm:hidden">Ver</span>
          </button>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-2.5 px-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">
              {product.inStock ? 'Agregar' : 'Agotado'}
            </span>
            <span className="sm:hidden">
              {product.inStock ? '+' : 'N/A'}
            </span>
          </button>
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-600 hover:bg-green-700 text-white py-2.5 px-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
            title="Consultar por WhatsApp"
          >
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
