import React, { useEffect } from 'react';
import { X, Plus, Minus, Phone, ShoppingBag, Trash2, Gift, Truck, Package, CreditCard, Shield, ArrowRight } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 80000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);
  const shippingCost = total >= freeShippingThreshold ? 0 : 5000;
  const finalTotal = total + shippingCost;
  
  useEffect(() => {
    if (isOpen) {
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
    
    window.open(`https://wa.me/573008226497?text=${message}`, '_blank');
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  if (!isOpen) return null;

  const progressPercentage = Math.min((total / freeShippingThreshold) * 100, 100);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-full max-w-md sm:max-w-lg lg:max-w-xl h-full overflow-hidden shadow-2xl transform transition-transform duration-300">
        
        {/* Header moderno */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 sm:p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2.5 rounded-xl">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Carrito de compras</h2>
                <p className="text-gray-300 text-sm">GoToBuy</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-300 hover:text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Contador de items */}
          {itemCount > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-300 text-sm">
                {itemCount} {itemCount === 1 ? 'producto' : 'productos'} en tu carrito
              </span>
              <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <span className="text-white font-semibold text-sm">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Barra de progreso para envío gratis */}
          {total < freeShippingThreshold && total > 0 && (
            <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-medium flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Envío gratis
                </span>
                <span className="text-white text-sm font-bold">${freeShippingThreshold.toLocaleString()}</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-green-300 text-xs">
                Te faltan ${remainingForFreeShipping.toLocaleString()} para envío gratis
              </p>
            </div>
          )}
        </div>
        
        <div className="flex-1 flex flex-col h-full">
          {cartItems.length === 0 ? (
            /* Carrito vacío rediseñado */
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6 w-32 h-32 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-8 max-w-sm text-sm leading-relaxed">
                Explora nuestro catálogo y agrega productos únicos de calidad premium
              </p>
              <button
                onClick={onClose}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Package className="w-4 h-4" />
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {/* Items del carrito */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300 border border-gray-200 border-opacity-50 animate-fadeIn"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                        />
                        {item.discount && (
                          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-md font-bold">
                            -{item.discount}%
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                              {item.sku}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-lg transition-all duration-300 ml-2"
                            title="Eliminar"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-bold text-gray-900 text-lg">
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
                    
                    {/* Controles de cantidad modernos */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-lg w-8 h-8 flex items-center justify-center transition-all duration-300 shadow-sm"
                        >
                          <Minus className="h-3 w-3 text-gray-600" />
                        </button>
                        <div className="bg-white border border-gray-300 px-3 py-1.5 rounded-lg min-w-12 text-center">
                          <span className="text-gray-900 font-semibold text-sm">
                            {item.quantity}
                          </span>
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-lg w-8 h-8 flex items-center justify-center transition-all duration-300 shadow-sm"
                        >
                          <Plus className="h-3 w-3 text-gray-600" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-0.5">Subtotal</p>
                        <p className="font-bold text-gray-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer con resumen y checkout */}
              <div className="bg-white border-t border-gray-200 p-4 sm:p-6">
                
                {/* Resumen de costos */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Subtotal ({itemCount} {itemCount === 1 ? 'producto' : 'productos'})</span>
                    <span className="font-medium">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span className="flex items-center">
                      <Truck className="w-4 h-4 mr-1" />
                      Domicilio
                    </span>
                    <span className={`font-medium ${shippingCost === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {shippingCost === 0 ? 'GRATIS 🎉' : `$${shippingCost.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total:</span>
                    <span className="text-xl font-bold text-blue-600">
                      ${finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                {/* Mensaje de envío gratis */}
                {shippingCost === 0 && total > 0 && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3 mb-4">
                    <div className="flex items-center justify-center gap-2 text-green-700">
                      <Gift className="h-4 w-4" />
                      <span className="font-medium text-sm">
                        🎉 ¡Perfecto! Tu pedido incluye envío gratuito
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Beneficios de compra */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <Shield className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-blue-700 text-xs font-medium">Compra segura</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <CreditCard className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <p className="text-green-700 text-xs font-medium">Contra entrega</p>
                  </div>
                </div>
                
                {/* Botón de checkout rediseñado */}
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-4"
                >
                  <Phone className="h-5 w-5" />
                  Finalizar pedido
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                {/* Información adicional */}
                <div className="space-y-2 text-center">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Serás redirigido a WhatsApp para confirmar tu pedido
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;