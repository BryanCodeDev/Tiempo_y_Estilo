import React, { useEffect, useState } from 'react';
import { X, Plus, Minus, Phone, ShoppingBag, Trash2, Gift, Truck, Package, CreditCard, Shield, ArrowRight } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 80000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);
  const shippingCost = total >= freeShippingThreshold ? 0 : 5000;
  const finalTotal = total + shippingCost;
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  const handleWhatsAppCheckout = () => {
    let message = "🛒 *PEDIDO GOTOBUY* 🛒%0A%0A";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      message += `   • SKU: ${item.sku}%0A`;
      message += `   • Cantidad: ${item.quantity}%0A`;
      message += `   • Precio: $${item.price.toLocaleString()}%0A`;
      message += `   • Subtotal: $${(item.price * item.quantity).toLocaleString()}%0A%0A`;
    });
    
    message += `💰 *RESUMEN DEL PEDIDO*%0A`;
    message += `• Subtotal: $${total.toLocaleString()}%0A`;
    message += `• Domicilio: ${shippingCost === 0 ? 'GRATIS 🎉' : '$' + shippingCost.toLocaleString()}%0A`;
    message += `• *TOTAL: $${finalTotal.toLocaleString()}*%0A`;
    message += `• Productos: ${itemCount} ${itemCount === 1 ? 'item' : 'items'}%0A%0A`;
    
    if (shippingCost === 0) {
      message += `✅ *¡Felicidades! Tu pedido incluye envío gratuito*%0A%0A`;
    }
    
    message += "¿Podrían confirmar disponibilidad y tiempo de entrega? ¡Gracias! 😊%0A%0A";
    message += "*GoToBuy - Calidad premium a tu alcance* 🌟";
    
    window.open(`https://wa.me/573508470735?text=${message}`, '_blank');
  };

  const handleRemoveItem = (cartId) => {
    setIsAnimating(true);
    setTimeout(() => {
      removeFromCart(cartId);
      setIsAnimating(false);
    }, 200);
  };

  if (!isOpen) return null;

  const progressPercentage = Math.min((total / freeShippingThreshold) * 100, 100);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-end">
      <div className={`bg-white w-full max-w-md sm:max-w-lg h-full overflow-hidden shadow-2xl transform transition-transform duration-300 ${
        isAnimating ? 'translate-x-0' : 'translate-x-0'
      }`}>
        
        {/* Header optimizado para móviles */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 sm:p-6 z-10 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-xl">
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Mi Carrito</h2>
                <p className="text-gray-300 text-xs">GoToBuy</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-300 hover:text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-300"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Contador de items responsivo */}
          {itemCount > 0 && (
            <div className="mt-3 flex items-center justify-between">
              <span className="text-gray-300 text-sm">
                {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
              </span>
              <div className="bg-white bg-opacity-20 px-2 py-1 rounded-full">
                <span className="text-white font-semibold text-sm">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Barra de progreso responsiva */}
          {total < freeShippingThreshold && total > 0 && (
            <div className="mt-4 bg-white/20 rounded-full p-1">
              <div className="bg-white/80 rounded-full p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 text-sm font-medium flex items-center">
                    <Truck className="w-3 h-3 mr-1" />
                    Envío gratis
                  </span>
                  <span className="text-gray-700 text-sm font-bold">${freeShippingThreshold.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-gray-500 to-gray-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-xs mt-2">
                  Te faltan ${remainingForFreeShipping.toLocaleString()} para envío gratis
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex-1 flex flex-col h-full">
          {cartItems.length === 0 ? (
            /* Carrito vacío optimizado */
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8 sm:py-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-8 sm:p-12 mb-6">
                <ShoppingBag className="h-16 w-16 sm:h-20 sm:w-20 text-gray-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-sm">
                Descubre nuestros productos únicos y de calidad. 
                ¡Agrega algunos para comenzar tu compra!
              </p>
              <button
                onClick={onClose}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-xl font-medium sm:font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base"
              >
                <Package className="w-4 h-4" />
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {/* Items del carrito optimizados */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.cartId || item.id} 
                    className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-xl shadow-md"
                        />
                        {item.discount && (
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs px-1 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-full font-bold">
                            -{item.discount}%
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-2 mb-1">
                              {item.name}
                            </h3>
                            {item.sku && (
                              <p className="text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                                {item.sku}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.cartId || item.id)}
                            className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-full transition-all duration-300 ml-2 flex-shrink-0"
                            title="Eliminar producto"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3 sm:mb-0">
                          <div className="font-bold text-gray-900 text-base sm:text-lg">
                            ${item.price.toLocaleString()}
                          </div>
                          {item.originalPrice && (
                            <div className="text-gray-400 line-through text-xs sm:text-sm">
                              ${item.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Controles de cantidad optimizados para móvil */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => updateQuantity(item.cartId || item.id, item.quantity - 1)}
                          className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-400 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                        </button>
                        <div className="bg-gray-50 px-3 py-2 sm:px-4 sm:py-2 rounded-xl">
                          <span className="text-gray-800 font-bold text-sm sm:text-lg">
                            {item.quantity}
                          </span>
                        </div>
                        <button
                          onClick={() => updateQuantity(item.cartId || item.id, item.quantity + 1)}
                          className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-400 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-0.5 sm:mb-1">Subtotal</p>
                        <p className="font-bold text-gray-900 text-sm sm:text-lg">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer responsivo con resumen */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-6 shadow-lg">
                <div className="space-y-4">
                  {/* Resumen de costos */}
                  <div className="bg-gray-50 rounded-2xl p-4 space-y-2 sm:space-y-3">
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Subtotal ({itemCount} {itemCount === 1 ? 'producto' : 'productos'})</span>
                      <span className="font-medium">${total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span className="flex items-center">
                        <Truck className="w-4 h-4 mr-1" />
                        Domicilio
                      </span>
                      <span className={`font-medium ${shippingCost === 0 ? 'text-gray-600' : 'text-gray-900'}`}>
                        {shippingCost === 0 ? 'GRATIS 🎉' : `$${shippingCost.toLocaleString()}`}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 sm:pt-3 flex justify-between items-center">
                      <span className="text-base sm:text-xl font-bold text-gray-900">Total:</span>
                      <span className="text-lg sm:text-2xl font-bold text-gray-600">
                        ${finalTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Mensaje de envío gratis */}
                  {shippingCost === 0 && total > 0 && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
                      <div className="flex items-center justify-center gap-2 text-green-700">
                        <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="font-medium text-sm sm:text-base">
                          🎉 ¡Felicidades! Tu pedido incluye envío gratuito
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Beneficios responsivos */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-blue-50 rounded-lg p-2 text-center">
                      <Shield className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                      <p className="text-blue-700 text-xs font-medium">Compra segura</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 text-center">
                      <CreditCard className="w-4 h-4 text-green-600 mx-auto mb-1" />
                      <p className="text-green-700 text-xs font-medium">Contra entrega</p>
                    </div>
                  </div>
                  
                  {/* Botón de checkout optimizado */}
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Phone className="h-4 w-4 sm:h-6 sm:w-6" />
                    Finalizar pedido por WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  
                  {/* Información adicional */}
                  <div className="space-y-1 text-center">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Serás redirigido a WhatsApp para confirmar tu pedido
                    </p>
                    <div className="flex items-center justify-center gap-3 text-xs">
                      <span className="text-green-600 font-medium flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        Pago seguro
                      </span>
                      <span className="text-blue-600 font-medium flex items-center">
                        <Truck className="w-3 h-3 mr-1" />
                        Entrega rápida
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Estilos personalizados para scrollbar */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f8fafc;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
          transition: background 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Cart;