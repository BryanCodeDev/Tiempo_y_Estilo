import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  Phone, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  Award, 
  Package,
  ChevronLeft,
  ChevronRight,
  Palette,
  Check,
  Clock,
  MapPin,
  Zap,
  Info
} from 'lucide-react';

const ProductDetail = ({ product, onBack, addToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.hasVariants ? product.variants[0] : null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [showShareMenu, setShowShareMenu] = useState(false);

  const currentProduct = selectedVariant 
    ? { ...product, ...selectedVariant, image: selectedVariant.image || product.image }
    : product;

  const images = [
    currentProduct.image,
    ...(product.secondaryImage ? [product.secondaryImage] : []),
    ...(product.galleryImages || [])
  ];

  useEffect(() => {
    // Simular vista de página para analytics (solo si gtag está disponible)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: product.name,
        page_location: window.location.href
      });
    }
  }, [product]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(currentProduct);
    }
    // Feedback visual
    const button = document.querySelector('.add-to-cart-btn');
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
  };

  const handleWhatsAppOrder = () => {
    const variantText = selectedVariant ? `%0AColor: ${selectedVariant.name}` : '';
    const message = `¡Hola! Me interesa este producto de GoToBuy:%0A%0A*${currentProduct.name}*${variantText}%0ACantidad: ${quantity}%0APrecio: $${currentProduct.price.toLocaleString()}%0ASKU: ${currentProduct.sku}%0ATotal: $${(currentProduct.price * quantity).toLocaleString()}%0AEnvío: GRATIS 🎉%0A%0A¿Está disponible para entrega inmediata?`;
    window.open(`https://wa.me/573508470735?text=${message}`, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: product.description,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
    // Mostrar feedback (puedes implementar un toast aquí)
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const tabs = [
    { id: 'description', label: 'Descripción', icon: Info },
    { id: 'specifications', label: 'Especificaciones', icon: Package },
    { id: 'benefits', label: 'Beneficios', icon: Award },
    { id: 'shipping', label: 'Envío', icon: Truck }
  ];

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": images,
    "description": product.longDescription || product.description,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "GoToBuy"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "COP",
      "price": product.price,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Structured Data para SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <button 
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Volver al catálogo
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 capitalize">{product.category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Galería de imágenes */}
          <div className="space-y-4">
            {/* Imagen principal */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={images[currentImageIndex]} 
                alt={`${product.name} - Vista ${currentImageIndex + 1}`}
                className="w-full h-96 sm:h-[500px] object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.discount && (
                  <span className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                    -{product.discount}%
                  </span>
                )}
                {product.inStock && (
                  <span className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    En Stock
                  </span>
                )}
                {product.hasVariants && (
                  <span className="bg-purple-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center shadow-lg">
                    <Palette className="w-4 h-4 mr-1" />
                    {product.variants.length} Colores
                  </span>
                )}
                {/* Badge de envío gratis siempre visible */}
                <span className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center shadow-lg">
                  <Truck className="w-4 h-4 mr-1" />
                  Envío GRATIS
                </span>
              </div>

              {/* Controles de imagen */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </>
              )}

              {/* Botones de acción flotantes */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg ${
                    isLiked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white bg-opacity-90 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                
                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-full bg-white bg-opacity-90 text-gray-600 hover:bg-blue-500 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-lg"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border p-2 z-10 min-w-[150px]">
                      <button
                        onClick={copyToClipboard}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Copiar enlace
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Miniaturas */}
            {images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? 'border-gray-900 scale-105' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                  SKU: {currentProduct.sku}
                </span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">(4.9) • 127 reseñas</span>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentProduct.name}
                {selectedVariant && (
                  <span className="block text-lg text-gray-600 font-normal mt-2">
                    Color: {selectedVariant.name}
                  </span>
                )}
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Selector de variantes */}
            {product.hasVariants && (
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Selecciona el color:
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`group relative aspect-square rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                        selectedVariant?.id === variant.id 
                          ? 'border-gray-900 scale-105 shadow-lg' 
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div 
                        className="w-full h-full rounded-lg"
                        style={{ backgroundColor: variant.color }}
                      ></div>
                      {selectedVariant?.id === variant.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white drop-shadow-lg" />
                        </div>
                      )}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                        {variant.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Precios */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              {product.discount && (
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Ahorras ${((product.originalPrice || 0) - product.price).toLocaleString()}
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}% OFF
                  </span>
                </div>
              )}
              
              <p className="text-gray-600 text-sm">
                Precio incluye IVA • Envío GRATIS incluido siempre
              </p>
            </div>

            {/* Cantidad y botones */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold text-gray-900">Cantidad:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 bg-gray-50 border-x border-gray-300 font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-600 text-sm">
                  Total: <span className="font-bold text-gray-900">
                    ${(product.price * quantity).toLocaleString()}
                  </span>
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="add-to-cart-btn flex-1 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {product.inStock ? 'Agregar al carrito' : 'Producto agotado'}
                </button>
                
                <button
                  onClick={handleWhatsAppOrder}
                  className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="Ordenar por WhatsApp"
                >
                  <Phone className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Beneficios rápidos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <Truck className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900 text-sm">Envío gratis</p>
                  <p className="text-green-700 text-xs">Siempre incluido</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900 text-sm">Pago seguro</p>
                  <p className="text-blue-700 text-xs">Contra entrega</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-900 text-sm">Entrega rápida</p>
                  <p className="text-purple-700 text-xs">2-5 días hábiles</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                <Award className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-900 text-sm">Garantía</p>
                  <p className="text-yellow-700 text-xs">30 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de información detallada */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab headers */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex flex-wrap">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-0 px-4 py-4 flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-white text-gray-900 border-b-2 border-gray-900' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content */}
          <div className="p-6 lg:p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Descripción detallada</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.longDescription || product.description}
                </p>
                
                {product.includes && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Package className="w-5 h-5 mr-2" />
                      ¿Qué incluye?
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && product.specifications && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Especificaciones técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-800 font-medium">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && product.benefits && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beneficios principales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                      <Zap className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Información de envío</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-green-50 rounded-xl">
                      <Truck className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-green-900">Envío gratuito</h4>
                        <p className="text-green-700 text-sm">Incluido en todos nuestros productos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                      <Clock className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Tiempo de entrega</h4>
                        <p className="text-blue-700 text-sm">2-5 días hábiles</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-purple-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-purple-900">Cobertura</h4>
                        <p className="text-purple-700 text-sm">Todo el territorio nacional</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-yellow-50 rounded-xl">
                      <Shield className="w-6 h-6 text-yellow-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-yellow-900">Garantía</h4>
                        <p className="text-yellow-700 text-sm">30 días de satisfacción garantizada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook para generar URLs SEO-friendly
export const useProductUrl = (product) => {
  if (!product) return '';
  
  const slug = product.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .trim('-'); // Remover guiones al inicio/final
  
  return `/producto/${product.id}/${slug}`;
};

// Componente Router simple para manejo de rutas
export const ProductRouter = ({ products, currentPath, onNavigate, addToCart }) => {
  const isProductRoute = currentPath.startsWith('/producto/');
  
  if (!isProductRoute) {
    return null;
  }
  
  // Extraer ID del producto de la URL
  const pathParts = currentPath.split('/');
  const productId = parseInt(pathParts[2]);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-8">El producto que buscas no existe o ha sido removido.</p>
          <button
            onClick={() => onNavigate('/')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <ProductDetail 
      product={product} 
      onBack={() => onNavigate('/')}
      addToCart={addToCart}
    />
  );
};

export default ProductDetail;