import React, { useEffect, useState } from 'react';
import { 
  X, Plus, Minus, Phone, ShoppingBag, Trash2, Gift, 
  Truck, Package, CreditCard, Shield, ArrowRight, CheckCircle 
} from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // Envío siempre gratis
  const shippingCost = 0;
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
    let message = "PEDIDO GOTOBUY%0A%0A";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      message += `   - SKU: ${item.sku}%0A`;
      message += `   - Cantidad: ${item.quantity}%0A`;
      message += `   - Precio: $${item.price.toLocaleString()}%0A`;
      message += `   - Subtotal: $${(item.price * item.quantity).toLocaleString()}%0A%0A`;
    });
    
    message += `RESUMEN DEL PEDIDO%0A`;
    message += `- Subtotal: $${total.toLocaleString()}%0A`;
    message += `- Domicilio: GRATIS%0A`;
    message += `- *TOTAL: $${finalTotal.toLocaleString()}*%0A`;
    message += `- Productos: ${itemCount} ${itemCount === 1 ? 'item' : 'items'}%0A%0A`;
    message += `Tu pedido incluye envio gratuito siempre%0A%0A`;
    
    message += "Podrian confirmar disponibilidad y tiempo de entrega? Gracias%0A%0A";
    message += "*GoToBuy - Calidad premium a tu alcance*";
    
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div className={`bg-white w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-full overflow-hidden shadow-2xl transform transition-transform duration-300 ${
        isAnimating ? 'translate-x-0' : 'translate-x-0'
      }`}>
        
        {/* Header compacto */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 sm:p-5 lg:p-6 z-10 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Mi Carrito</h2>
                <p className="text-gray-300 text-sm">GoToBuy</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-300 hover:text-white p-2 hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Contador compacto */}
          {itemCount > 0 && (
            <div className="mt-3 flex items-center justify-between">
              <span className="text-gray-300 text-sm">
                {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
              </span>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-white font-semibold text-sm">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Banner envío gratis compacto */}
          {total > 0 && (
            <div className="mt-3 bg-green-500/20 rounded-xl p-2">
              <div className="bg-green-100 rounded-lg p-2">
                <div className="flex items-center justify-center">
                  <Truck className="w-4 h-4 mr-2 text-green-700" />
                  <CheckCircle className="w-4 h-4 mr-2 text-green-700" />
                  <span className="text-green-800 text-sm font-bold">
                    Envío GRATIS siempre
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            /* Carrito vacío */
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-12 mb-6">
                <ShoppingBag className="h-20 w-20 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-8 text-base leading-relaxed max-w-sm">
                Descubre nuestros productos únicos y de calidad. 
                Agrega algunos para comenzar tu compra con envío GRATIS
              </p>
              <button
                onClick={onClose}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 text-base"
              >
                <Package className="w-5 h-5" />
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {/* PRODUCTOS - Área principal más grande */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-5 lg:px-6 pt-4 pb-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{minHeight: '60vh'}}>
                {cartItems.map((item, index) => (
                  <div 
                    key={item.cartId || item.id} 
                    className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200"
                  >
                    {/* Layout horizontal optimizado para productos */}
                    <div className="flex items-center gap-4">
                      {/* Imagen del producto más grande */}
                      <div className="relative flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-xl shadow-md"
                        />
                        {item.discount && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-bold">
                            -{item.discount}%
                          </div>
                        )}
                      </div>
                      
                      {/* Info del producto */}
                      <div className="flex-1 min-w-0">
                        {/* Título y eliminar */}
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1 min-w-0 pr-2">
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg leading-tight mb-1">
                              {item.name}
                            </h3>
                            {item.sku && (
                              <p className="text-blue-600 text-xs bg-blue-50 px-2 py-1 rounded-md inline-block">
                                {item.sku}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.cartId || item.id)}
                            className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-full transition-all duration-300 flex-shrink-0"
                            title="Eliminar producto"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        {/* Precios */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="font-bold text-gray-900 text-lg sm:text-xl">
                            ${item.price.toLocaleString()}
                          </div>
                          {item.originalPrice && (
                            <div className="text-gray-400 line-through text-sm">
                              ${item.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                        
                        {/* Controles de cantidad */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.cartId || item.id, item.quantity - 1)}
                              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300"
                            >
                              <Minus className="h-3 w-3 text-gray-600" />
                            </button>
                            <div className="bg-gray-50 px-3 py-1 rounded-lg min-w-[2.5rem] text-center">
                              <span className="text-gray-800 font-bold text-base">
                                {item.quantity}
                              </span>
                            </div>
                            <button
                              onClick={() => updateQuantity(item.cartId || item.id, item.quantity + 1)}
                              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300"
                            >
                              <Plus className="h-3 w-3 text-gray-600" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Subtotal</p>
                            <p className="font-bold text-gray-900 text-base sm:text-lg">
                              ${(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer compacto */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-5 shadow-xl">
                <div className="space-y-3">
                  {/* Resumen compacto */}
                  <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Subtotal ({itemCount} {itemCount === 1 ? 'producto' : 'productos'})</span>
                      <span className="font-medium">${total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span className="flex items-center">
                        <Truck className="w-4 h-4 mr-1" />
                        Domicilio
                      </span>
                      <span className="font-medium text-green-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        GRATIS
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total:</span>
                      <span className="text-xl font-bold text-gray-900">
                        ${finalTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Mensaje envío gratis */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2 text-green-700">
                      <Gift className="h-4 w-4" />
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium text-sm">
                        Todos nuestros productos incluyen envío GRATIS
                      </span>
                    </div>
                  </div>
                  
                  {/* Beneficios compactos */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 rounded-lg p-2 text-center border border-blue-100">
                      <Shield className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                      <p className="text-blue-700 text-xs font-medium">Compra segura</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 text-center border border-green-100">
                      <CreditCard className="w-4 h-4 text-green-600 mx-auto mb-1" />
                      <p className="text-green-700 text-xs font-medium">Contra entrega</p>
                    </div>
                  </div>
                  
                  {/* Botón WhatsApp */}
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Phone className="h-5 w-5" />
                    Finalizar pedido por WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  
                  {/* Info adicional compacta */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">
                      Serás redirigido a WhatsApp para confirmar tu pedido
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs">
                      <span className="text-green-600 font-medium flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        Pago seguro
                      </span>
                      <span className="text-blue-600 font-medium flex items-center">
                        <Truck className="w-3 h-3 mr-1" />
                        Envío GRATIS
                      </span>
                    </div>
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