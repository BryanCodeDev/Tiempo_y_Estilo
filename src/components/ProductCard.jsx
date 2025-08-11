import React, { useState } from 'react';
import { Phone, Star, ShoppingCart, Heart, Eye, CheckCircle, Info, X, Palette } from 'lucide-react';

const ProductCard = ({ product, addToCart, viewMode = 'grid' }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(
    product.hasVariants ? product.variants[0] : null
  );

  const currentProduct = selectedVariant 
    ? { ...product, ...selectedVariant, image: selectedVariant.image || product.image }
    : product;

  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const variantText = selectedVariant ? `%0AColor: ${selectedVariant.name}` : '';
    const message = `¡Hola! Me interesa este producto de GoToBuy:%0A%0A*${currentProduct.name}*${variantText}%0APrecio: $${currentProduct.price.toLocaleString()}%0ASKU: ${currentProduct.sku}%0A%0A¿Está disponible para entrega inmediata?`;
    window.open(`https://wa.me/573008226497?text=${message}`, '_blank');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(currentProduct);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  // Vista de lista mejorada
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-200">
        <div className="flex flex-col sm:flex-row">
          {/* Imagen */}
          <div className="relative w-full sm:w-48 h-48 sm:h-40 flex-shrink-0 overflow-hidden bg-gray-100">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
            )}
            <img 
              src={currentProduct.image} 
              alt={currentProduct.name}
              className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
            
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
                  Stock
                </span>
              )}
              {product.hasVariants && (
                <span className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                  <Palette className="w-3 h-3 mr-1" />
                  {product.variants.length} colores
                </span>
              )}
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
                  <h3 className="font-bold text-lg text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer">
                    {currentProduct.name}
                    {selectedVariant && (
                      <span className="text-sm font-normal text-gray-600 ml-2">
                        - {selectedVariant.name}
                      </span>
                    )}
                  </h3>
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
                    <span className="text-xs text-gray-600 font-medium">Color:</span>
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                          selectedVariant?.id === variant.id 
                            ? 'border-gray-900 scale-110' 
                            : 'border-gray-300 hover:border-gray-500'
                        }`}
                        style={{ backgroundColor: variant.color }}
                        title={variant.name}
                      />
                    ))}
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
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <span className="text-green-600 text-sm font-medium">
                    Ahorras ${((product.originalPrice || 0) - product.price).toLocaleString()}
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm flex items-center justify-center gap-2"
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
                <button
                  onClick={() => setShowQuickView(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  title="Vista rápida"
                >
                  <Eye className="h-4 w-4" />
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
    <>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-blue-200 hover:-translate-y-1 max-w-sm mx-auto">
        
        {/* Imagen */}
        <div className="relative overflow-hidden bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
          )}
          <img 
            src={currentProduct.image} 
            alt={currentProduct.name}
            className={`w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          
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
                Stock
              </span>
            )}
            {product.hasVariants && (
              <span className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                <Palette className="w-3 h-3 mr-1" />
                {product.variants.length}
              </span>
            )}
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

          {/* Overlay de acciones */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-black group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              onClick={() => setShowQuickView(true)}
              className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              Vista rápida
            </button>
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium">
                Agotado
              </span>
            </div>
          )}
        </div>
        
        {/* Contenido de la tarjeta */}
        <div className="p-4 sm:p-5">
          
          {/* Título y SKU */}
          <div className="mb-3">
            <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {currentProduct.name}
              {selectedVariant && (
                <span className="text-sm font-normal text-gray-600 block">
                  Color: {selectedVariant.name}
                </span>
              )}
            </h3>
            <p className="text-blue-600 text-xs font-medium bg-blue-50 px-2 py-0.5 rounded-md inline-block">
              SKU: {currentProduct.sku}
            </p>
          </div>

          {/* Selector de variantes */}
          {product.hasVariants && (
            <div className="mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600 font-medium">Color:</span>
                <div className="flex gap-1">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                        selectedVariant?.id === variant.id 
                          ? 'border-gray-900 scale-110' 
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                      style={{ backgroundColor: variant.color }}
                      title={variant.name}
                    />
                  ))}
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
                Ahorras ${((product.originalPrice || 0) - product.price).toLocaleString()}
              </span>
            )}
          </div>
          
          {/* Precios */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          {/* Botones de acción */}
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-2.5 px-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-2"
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

      {/* Quick View Modal mejorado */}
      {showQuickView && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
          onClick={() => setShowQuickView(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh]">
              
              {/* Imagen del modal */}
              <div className="relative h-64 lg:h-full bg-gray-100">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name} 
                  className="w-full h-full object-cover" 
                />
                <button
                  onClick={() => setShowQuickView(false)}
                  className="absolute top-4 right-4 bg-white hover:bg-gray-50 p-2 rounded-full transition-colors shadow-lg"
                >
                  <X className="h-4 w-4" />
                </button>
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
              </div>
              
              {/* Contenido del modal */}
              <div className="p-6 lg:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-full">
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {currentProduct.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-lg inline-block">
                      SKU: {currentProduct.sku}
                    </p>
                  </div>

                  {/* Selector de variantes en modal */}
                  {product.hasVariants && (
                    <div className="mb-4">
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Colores disponibles:
                      </label>
                      <div className="flex gap-2">
                        {product.variants.map((variant) => (
                          <button
                            key={variant.id}
                            onClick={() => setSelectedVariant(variant)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
                              selectedVariant?.id === variant.id 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div 
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: variant.color }}
                            />
                            <span className="text-sm">{variant.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">(4.9) • 127 reseñas</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.longDescription || product.description}
                  </p>
                  
                  {/* Especificaciones */}
                  {product.specifications && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="w-4 h-4 mr-2 text-blue-600" />
                        Especificaciones:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.specifications.slice(0, 4).map((spec, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Precio y acciones */}
                <div className="border-t pt-6 mt-6">
                  <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-400 line-through text-sm">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-green-600 text-sm font-medium">
                            Ahorras ${((product.originalPrice || 0) - product.price).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
                    </button>
                    <button
                      onClick={handleWhatsAppOrder}
                      className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Phone className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;