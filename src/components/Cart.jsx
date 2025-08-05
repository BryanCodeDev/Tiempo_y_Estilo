import React, { useEffect, useState } from 'react';
import { X, Plus, Minus, Phone, ShoppingBag, Trash2, Gift, Truck } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 30000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);
  
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
    let message = "🛒 *MI PEDIDO* 🛒%0A%0A";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      message += `   📦 Cantidad: ${item.quantity}%0A`;
      message += `   💰 Precio unitario: $${item.price.toLocaleString()}%0A`;
      message += `   💵 Subtotal: $${(item.price * item.quantity).toLocaleString()}%0A%0A`;
    });
    
    message += `🏷️ *TOTAL: $${total.toLocaleString()}*%0A`;
    message += `📦 *Items: ${itemCount}*%0A%0A`;
    
    if (total >= freeShippingThreshold) {
      message += `🚚 *¡DOMICILIO GRATIS!* 🎉%0A%0A`;
    } else {
      message += `🚚 Domicilio: $3.000%0A`;
      message += `💡 Solo te faltan $${remainingForFreeShipping.toLocaleString()} para domicilio gratis%0A%0A`;
    }
    
    message += "¿Podrían confirmar disponibilidad y tiempo de entrega? ¡Gracias! 😊";
    
    window.open(`https://wa.me/573113670631?text=${message}`, '_blank');
  };

  const handleRemoveItem = (id) => {
    setIsAnimating(true);
    setTimeout(() => {
      removeFromCart(id);
      setIsAnimating(false);
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
      <div className={`bg-white w-full max-w-md sm:max-w-lg h-full overflow-hidden shadow-2xl transform transition-transform duration-300 ${
        isAnimating ? 'translate-x-0' : 'translate-x-0'
      }`}>
        
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 sm:p-6 z-10 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Mi Carrito</h2>
                {itemCount > 0 && (
                  <p className="text-white/80 text-sm">
                    {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
                  </p>
                )}
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-white/80 hover:text-white p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Barra de progreso para envío gratis */}
          {total < freeShippingThreshold && total > 0 && (
            <div className="mt-4 bg-white/20 rounded-full p-1">
              <div className="bg-white/80 rounded-full p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 text-sm font-medium">Envío gratis</span>
                  <span className="text-gray-700 text-sm font-bold">${freeShippingThreshold.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((total / freeShippingThreshold) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-xs mt-2">
                  <Truck className="inline w-3 h-3 mr-1" />
                  Te faltan ${remainingForFreeShipping.toLocaleString()} para envío gratis
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex-1 flex flex-col h-full">
          {cartItems.length === 0 ? (
            /* Carrito vacío */
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-12 mb-6">
                <ShoppingBag className="h-20 w-20 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-8 max-w-sm">
                Descubre nuestros productos frescos y de calidad. 
                ¡Agrega algunos para comenzar tu compra!
              </p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {/* Items del carrito */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-4">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl shadow-md"
                        />
                        {item.discount && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            -{item.discount}%
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-2">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-full transition-all duration-300 ml-2"
                            title="Eliminar producto"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-emerald-600 font-bold text-lg">
                            ${item.price.toLocaleString()}
                          </div>
                          {item.originalPrice && (
                            <div className="text-gray-400 line-through text-sm">
                              ${item.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Controles de cantidad */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-emerald-300 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <div className="bg-emerald-50 px-4 py-2 rounded-xl">
                          <span className="text-emerald-800 font-bold text-lg">
                            {item.quantity}
                          </span>
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-emerald-300 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">Subtotal</p>
                        <p className="font-bold text-gray-900 text-lg">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer con total y botón de checkout */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-6 shadow-lg">
                <div className="space-y-4">
                  {/* Resumen de costos */}
                  <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({itemCount} {itemCount === 1 ? 'producto' : 'productos'})</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Domicilio</span>
                      <span className={total >= freeShippingThreshold ? 'text-green-600 font-semibold' : ''}>
                        {total >= freeShippingThreshold ? 'GRATIS' : '$3.000'}
                      </span>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold text-emerald-600">
                        ${(total >= freeShippingThreshold ? total : total + 3000).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Mensaje de envío gratis */}
                  {total >= freeShippingThreshold && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
                      <div className="flex items-center justify-center gap-2 text-green-800">
                        <Gift className="h-5 w-5" />
                        <span className="font-semibold text-sm">
                          🎉 ¡Felicidades! Tu pedido tiene envío gratuito
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Botón de checkout */}
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Phone className="h-6 w-6" />
                    Finalizar pedido por WhatsApp
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    Serás redirigido a WhatsApp para confirmar tu pedido.<br />
                    <span className="text-emerald-600 font-medium">Pago contra entrega disponible</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </div>
  );
};

export default Cart;