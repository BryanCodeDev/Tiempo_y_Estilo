import React, { useState } from 'react';
import { Phone, Star, ShoppingCart, Heart, Eye, Zap, Package, CheckCircle } from 'lucide-react';

const ProductCard = ({ product, addToCart, viewMode = 'grid' }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const message = `¡Hola! Me interesa este producto de GoToBuy:%0A%0A*${product.name}*%0APrecio: $${product.price.toLocaleString()}%0ASKU: ${product.sku}%0A%0A¿Está disponible para entrega inmediata?`;
    window.open(`https://wa.me/573008226497?text=${message}`, '_blank');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-64 h-48 sm:h-auto overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse ${imageLoaded ? 'hidden' : 'block'}`} />
            <img 
              src={product.image} 
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {product.discount && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                -{product.discount}%
              </div>
            )}
            {product.inStock ? (
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Stock
              </div>
            ) : (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Agotado</span>
              </div>
            )}
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-xl text-gray-900 line-clamp-2 mb-1">{product.name}</h3>
                <p className="text-blue-600 text-sm font-medium">SKU: {product.sku}</p>
              </div>
              <button
                onClick={handleLike}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-blue-600">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-lg">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
              </button>
              <button
                onClick={handleWhatsAppOrder}
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                title="Preguntar por WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group border border-gray-100 hover:border-blue-200">
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse ${imageLoaded ? 'hidden' : 'block'}`} />
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount && (
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              -{product.discount}%
            </div>
          )}
          {product.inStock && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
              <Zap className="inline w-3 h-3 mr-1" />
              Stock
            </div>
          )}
        </div>

        {/* Overlay de acciones */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={handleLike}
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white shadow-lg'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setShowQuickView(true)}
              className="p-3 bg-white/90 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
            >
              <Eye className="h-5 w-5" />
            </button>
          </div>
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Agotado</span>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="mb-2">
          <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-blue-600 text-xs font-medium">SKU: {product.sku}</p>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-blue-600">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm sm:text-base">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base flex items-center justify-center gap-2"
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
            className="bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            title="Preguntar por WhatsApp"
          >
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowQuickView(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <button
                onClick={() => setShowQuickView(false)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-blue-600 font-medium">SKU: {product.sku}</p>
              </div>
              
              <p className="text-gray-600 mb-4">{product.longDescription || product.description}</p>
              
              {product.specifications && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Especificaciones:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-blue-600">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl"
                >
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;