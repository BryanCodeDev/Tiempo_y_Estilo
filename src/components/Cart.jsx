import React, { useEffect, useState } from 'react';
import {
  X, Plus, Minus, Phone, ShoppingBag, Trash2,
  Truck, Package, CreditCard, Shield, ArrowRight, CheckCircle, Crown
} from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
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
    let message = "🛍️ PEDIDO TIEMPO Y ESTILO%0A%0A";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      message += `   - SKU: ${item.sku}%0A`;
      message += `   - Cantidad: ${item.quantity}%0A`;
      message += `   - Precio: $${item.price.toLocaleString()}%0A`;
      message += `   - Subtotal: $${(item.price * item.quantity).toLocaleString()}%0A%0A`;
    });
    
    message += `✨ RESUMEN DEL PEDIDO%0A`;
    message += `- Subtotal: $${total.toLocaleString()}%0A`;
    message += `- Domicilio: GRATIS 🎁%0A`;
    message += `- *TOTAL: $${finalTotal.toLocaleString()}*%0A`;
    message += `- Productos: ${itemCount} ${itemCount === 1 ? 'item' : 'items'}%0A%0A`;
    
    message += "¿Podrían confirmar disponibilidad y tiempo de entrega?%0A%0A";
    message += "*TIEMPO Y ESTILO - Joyería Premium*";
    
    window.open(`https://wa.me/573146081297?text=${message}`, '_blank');
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
      <div className={`bg-white w-full max-w-2xl h-full overflow-hidden shadow-2xl transform transition-transform duration-300 ${
        isAnimating ? 'translate-x-0' : 'translate-x-0'
      }`}>
        
        {/* Header elegante */}
        <div className="sticky top-0 bg-gradient-to-r from-primary via-luxury to-primary text-white p-6 z-10 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl border border-white/30">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-display">Mi Carrito</h2>
                <p className="text-white/90 text-sm">TIEMPO Y ESTILO</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300 border border-white/20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Contador */}
          {itemCount > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-white/90 text-sm font-semibold">
                {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
              </span>
              <div className="glass-luxury bg-white/20 px-4 py-2 rounded-full border border-white/30">
                <span className="text-white font-bold">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Banner envío gratis */}
          {total > 0 && (
            <div className="mt-4 bg-emerald-500/20 rounded-xl p-3 border border-emerald-400/30">
              <div className="bg-emerald-50 rounded-lg p-3">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-700" />
                  <span className="text-emerald-800 text-sm font-bold">
                    ¡Envío GRATIS incluido siempre!
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
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-full p-12 mb-6 border border-secondary/20">
                <ShoppingBag className="h-20 w-20 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-display">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-sm">
                Descubre nuestras joyas y relojes exclusivos.
                Agrega algunos para comenzar tu compra con envío GRATIS
              </p>
              <button
                onClick={onClose}
                className="bg-ruby-gradient hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-luxury hover:shadow-2xl transform hover:scale-105 flex items-center gap-3 animate-gradient"
              >
                <Package className="w-5 h-5" />
                Explorar colección
              </button>
            </div>
          ) : (
            <>
              {/* PRODUCTOS */}
              <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 space-y-4 scrollbar-luxury" style={{minHeight: '60vh'}}>
                {cartItems.map((item, index) => (
                  <div 
                    key={item.cartId || item.id} 
                    className="glass-luxury rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary/20"
                  >
                    <div className="flex items-center gap-4">
                      {/* Imagen del producto */}
                      <div className="relative flex-shrink-0">
                        <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg border border-secondary/20">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {item.discount && (
                          <div className="absolute -top-2 -right-2 bg-ruby-gradient text-white text-xs px-2 py-1 rounded-lg font-bold shadow-luxury animate-gradient">
                            -{item.discount}%
                          </div>
                        )}
                      </div>
                      
                      {/* Info del producto */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1 min-w-0 pr-2">
                            <div className="flex items-center gap-2 mb-1">
                              <Crown className="w-4 h-4 text-secondary" />
                              <span className="text-xs text-primary/70 font-semibold">Pieza exclusiva</span>
                            </div>
                            <h3 className="font-bold text-primary text-lg leading-tight mb-1 font-display">
                              {item.name}
                            </h3>
                            {item.sku && (
                              <p className="text-secondary text-xs bg-secondary/10 px-2 py-1 rounded-md inline-block border border-secondary/20">
                                {item.sku}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.cartId || item.id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-all duration-300 flex-shrink-0"
                            title="Eliminar producto"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Precios */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="font-bold text-primary text-xl font-display">
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
                              className="glass-luxury bg-white hover:bg-gray-50 border border-secondary/20 rounded-xl w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              <Minus className="h-4 w-4 text-primary" />
                            </button>
                            <div className="glass-luxury bg-white px-4 py-2 rounded-xl min-w-[3rem] text-center border border-secondary/20 shadow-lg">
                              <span className="text-primary font-bold text-lg font-display">
                                {item.quantity}
                              </span>
                            </div>
                            <button
                              onClick={() => updateQuantity(item.cartId || item.id, item.quantity + 1)}
                              className="glass-luxury bg-white hover:bg-gray-50 border border-secondary/20 rounded-xl w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              <Plus className="h-4 w-4 text-primary" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Subtotal</p>
                            <p className="font-bold text-primary text-lg font-display">
                              ${(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="sticky bottom-0 glass-luxury border-t border-secondary/20 p-6 shadow-xl">
                <div className="space-y-4">
                  {/* Resumen */}
                  <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-4 space-y-2 border border-secondary/20 shadow-lg">
                    <div className="flex justify-between text-gray-700 text-sm">
                      <span className="font-semibold">Subtotal ({itemCount} {itemCount === 1 ? 'producto' : 'productos'})</span>
                      <span className="font-bold">${total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 text-sm">
                      <span className="flex items-center font-semibold">
                        <Truck className="w-4 h-4 mr-2" />
                        Domicilio
                      </span>
                      <span className="font-bold text-emerald-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        GRATIS
                      </span>
                    </div>
                    <div className="border-t border-secondary/20 pt-3 flex justify-between items-center">
                      <span className="text-xl font-bold text-primary font-display">Total:</span>
                      <span className="text-2xl font-bold text-primary font-display">
                        ${finalTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Beneficios */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass-luxury bg-blue-50/50 rounded-xl p-3 text-center border border-blue-200/50 shadow-lg">
                      <Shield className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <p className="text-blue-700 text-xs font-semibold">Compra segura</p>
                    </div>
                    <div className="glass-luxury bg-emerald-50/50 rounded-xl p-3 text-center border border-emerald-200/50 shadow-lg">
                      <CreditCard className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                      <p className="text-emerald-700 text-xs font-semibold">Contra entrega</p>
                    </div>
                  </div>
                  
                  {/* Botón WhatsApp */}
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    <Phone className="h-6 w-6" />
                    Finalizar pedido por WhatsApp
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  
                  {/* Info adicional */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">
                      Serás redirigido a WhatsApp para confirmar tu pedido
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs">
                      <span className="text-emerald-600 font-semibold flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        Pago seguro
                      </span>
                      <span className="text-blue-600 font-semibold flex items-center">
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