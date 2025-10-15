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
  Info,
  Crown
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
    const message = `¡Hola! Me interesa este producto de TIEMPO Y ESTILO:%0A%0A*${currentProduct.name}*${variantText}%0ACantidad: ${quantity}%0APrecio: $${currentProduct.price.toLocaleString()}%0ASKU: ${currentProduct.sku}%0ATotal: $${(currentProduct.price * quantity).toLocaleString()}%0AEnvío: GRATIS 🎁%0A%0A¿Está disponible para entrega inmediata?`;
    window.open(`https://wa.me/573146081297?text=${message}`, '_blank');
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

  return (
    <div className="min-h-screen bg-pearl-gradient pt-16">
      {/* Breadcrumbs */}
      <div className="glass-luxury border-b border-secondary/20">
        <div className="container-luxury py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button 
              onClick={onBack}
              className="flex items-center text-primary hover:text-luxury transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al catálogo
            </button>
            <span className="text-secondary">•</span>
            <span className="text-primary capitalize font-semibold">{product.category}</span>
            <span className="text-secondary">•</span>
            <span className="text-luxury font-bold truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-luxury py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Galería de imágenes */}
          <div className="space-y-4">
            {/* Imagen principal */}
            <div className="relative glass-luxury rounded-3xl overflow-hidden shadow-2xl group border border-secondary/20">
              <img 
                src={images[currentImageIndex]} 
                alt={`${product.name} - Vista ${currentImageIndex + 1}`}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                {product.discount && (
                  <span className="bg-ruby-gradient text-white px-4 py-2 rounded-xl text-sm font-bold shadow-luxury animate-gradient">
                    -{product.discount}%
                  </span>
                )}
                {product.inStock && (
                  <span className="glass-luxury bg-white/90 text-emerald-600 px-4 py-2 rounded-xl text-sm font-semibold flex items-center shadow-lg border border-emerald-200/50">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                    En Stock
                  </span>
                )}
                {product.hasVariants && (
                  <span className="bg-gold-gradient text-primary px-4 py-2 rounded-xl text-sm font-semibold flex items-center shadow-gold animate-gradient">
                    <Palette className="w-4 h-4 mr-2" />
                    {product.variants.length} Colores
                  </span>
                )}
                <span className="glass-luxury bg-white/90 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center shadow-lg border border-blue-200/50">
                  <Truck className="w-4 h-4 mr-2" />
                  Envío GRATIS
                </span>
              </div>

              {/* Controles de imagen */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 glass-luxury bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all opacity-0 group-hover:opacity-100 border border-secondary/20"
                  >
                    <ChevronLeft className="w-6 h-6 text-primary" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 glass-luxury bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all opacity-0 group-hover:opacity-100 border border-secondary/20"
                  >
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </button>
                </>
              )}

              {/* Botones flotantes */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-4 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl border ${
                    isLiked 
                      ? 'bg-red-500 text-white border-red-400' 
                      : 'glass-luxury bg-white/90 text-primary hover:bg-red-500 hover:text-white border-secondary/20'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                
                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="p-4 rounded-full glass-luxury bg-white/90 text-primary hover:bg-blue-500 hover:text-white backdrop-blur-md transition-all duration-300 shadow-xl border border-secondary/20"
                  >
                    <Share2 className="h-6 w-6" />
                  </button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 glass-luxury rounded-xl shadow-2xl border border-secondary/20 p-2 z-10 min-w-[150px]">
                      <button
                        onClick={copyToClipboard}
                        className="w-full text-left px-4 py-3 text-sm text-primary hover:bg-primary/10 rounded-lg font-semibold"
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
              <div className="flex gap-4 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shadow-lg ${
                      currentImageIndex === index 
                        ? 'border-secondary scale-110 shadow-gold' 
                        : 'border-gray-300 hover:border-secondary'
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
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-5 h-5 text-secondary" />
                <span className="text-primary text-sm font-bold bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  SKU: {currentProduct.sku}
                </span>
                <div className="flex items-center">
                  <div className="flex text-secondary mr-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm font-semibold">(4.9) • 127 reseñas</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-primary mb-4 font-display">
                {currentProduct.name}
                {selectedVariant && (
                  <span className="block text-xl text-luxury font-normal mt-2">
                    Color: {selectedVariant.name}
                  </span>
                )}
              </h1>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Selector de variantes */}
            {product.hasVariants && (
              <div className="glass-luxury border border-secondary/20 rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-primary mb-4 flex items-center font-display">
                  <Palette className="w-5 h-5 mr-3 text-secondary" />
                  Selecciona el color:
                </h3>
                <div className="grid grid-cols-6 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`group relative aspect-square rounded-xl border-2 transition-all duration-300 overflow-hidden shadow-lg ${
                        selectedVariant?.id === variant.id 
                          ? 'border-secondary scale-110 shadow-gold' 
                          : 'border-gray-300 hover:border-secondary'
                      }`}
                    >
                      <div 
                        className="w-full h-full rounded-lg"
                        style={{ backgroundColor: variant.color }}
                      ></div>
                      {selectedVariant?.id === variant.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <Check className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                      )}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap z-10">
                        {variant.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Precios */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-secondary/20 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-primary font-display">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              {product.discount && (
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold border border-emerald-200">
                    Ahorras ${((product.originalPrice || 0) - product.price).toLocaleString()}
                  </span>
                  <span className="bg-ruby-gradient text-white px-4 py-2 rounded-full text-sm font-bold shadow-luxury animate-gradient">
                    {product.discount}% OFF
                  </span>
                </div>
              )}
              
              <p className="text-gray-600 text-sm font-semibold">
                Precio incluye IVA • Envío GRATIS incluido siempre
              </p>
            </div>

            {/* Cantidad y botones */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-bold text-primary font-display">Cantidad:</label>
                <div className="flex items-center glass-luxury border border-secondary/20 rounded-xl shadow-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-primary hover:text-luxury transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 bg-amber-50/50 border-x border-secondary/20 font-bold text-primary font-display">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-primary hover:text-luxury transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-600 text-sm font-semibold">
                  Total: <span className="font-bold text-primary font-display text-lg">
                    ${(product.price * quantity).toLocaleString()}
                  </span>
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="add-to-cart-btn flex-1 bg-ruby-gradient hover:opacity-90 disabled:opacity-50 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-luxury hover:shadow-2xl flex items-center justify-center gap-3 animate-gradient"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {product.inStock ? 'Agregar al carrito' : 'Producto agotado'}
                </button>
                
                <button
                  onClick={handleWhatsAppOrder}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="Ordenar por WhatsApp"
                >
                  <Phone className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Beneficios rápidos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <Truck className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-bold text-emerald-900 text-sm">Envío gratis</p>
                  <p className="text-emerald-700 text-xs">Siempre incluido</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Shield className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-bold text-blue-900 text-sm">Pago seguro</p>
                  <p className="text-blue-700 text-xs">Contra entrega</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                <Clock className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-bold text-purple-900 text-sm">Entrega rápida</p>
                  <p className="text-purple-700 text-xs">2-5 días hábiles</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-amber-50 rounded-xl border border-secondary/30">
                <Award className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary text-sm">Garantía</p>
                  <p className="text-luxury text-xs">30 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de información detallada */}
        <div className="mt-12 glass-luxury rounded-3xl shadow-2xl overflow-hidden border border-secondary/20">
          {/* Tab headers */}
          <div className="border-b border-secondary/20 bg-gradient-to-r from-amber-50 to-white">
            <div className="flex flex-wrap">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-0 px-6 py-5 flex items-center justify-center gap-3 font-bold transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary border-b-2 border-secondary shadow-lg' 
                        : 'text-gray-600 hover:text-primary hover:bg-white/50'
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
          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Descripción detallada</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.longDescription || product.description}
                </p>
                
                {product.includes && (
                  <div>
                    <h4 className="font-bold text-primary mb-3 flex items-center font-display">
                      <Package className="w-5 h-5 mr-2 text-secondary" />
                      ¿Qué incluye?
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700 font-semibold">
                          <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
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
                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Especificaciones técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-xl border border-secondary/20 shadow-lg">
                      <p className="text-primary font-semibold">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && product.benefits && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Beneficios principales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-4 bg-blue-50 rounded-xl border border-blue-200 shadow-lg">
                      <Zap className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 font-semibold">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Información de envío</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center p-5 bg-emerald-50 rounded-2xl border border-emerald-200 shadow-lg">
                      <Truck className="w-8 h-8 text-emerald-600 mr-4" />
                      <div>
                        <h4 className="font-bold text-emerald-900">Envío gratuito</h4>
                        <p className="text-emerald-700 text-sm">Incluido en todos nuestros productos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-5 bg-blue-50 rounded-2xl border border-blue-200 shadow-lg">
                      <Clock className="w-8 h-8 text-blue-600 mr-4" />
                      <div>
                        <h4 className="font-bold text-blue-900">Tiempo de entrega</h4>
                        <p className="text-blue-700 text-sm">2-5 días hábiles</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-5 bg-purple-50 rounded-2xl border border-purple-200 shadow-lg">
                      <MapPin className="w-8 h-8 text-purple-600 mr-4" />
                      <div>
                        <h4 className="font-bold text-purple-900">Cobertura</h4>
                        <p className="text-purple-700 text-sm">Todo el territorio nacional</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-5 bg-amber-50 rounded-2xl border border-secondary/30 shadow-lg">
                      <Shield className="w-8 h-8 text-secondary mr-4" />
                      <div>
                        <h4 className="font-bold text-primary">Garantía</h4>
                        <p className="text-luxury text-sm">30 días de satisfacción garantizada</p>
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

export default ProductDetail;