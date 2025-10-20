import React, { useEffect, useState } from 'react';
import {
  X, Plus, Minus, Phone, ShoppingBag, Trash2,
  Truck, Package, CreditCard, Shield, ArrowRight, CheckCircle, Crown, Gem
} from 'lucide-react';

// Función helper para ejecutar evento Purchase cuando se concrete una venta
export const trackFacebookPurchase = (cartItems, total, itemCount) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const contents = cartItems.map(item => ({
      id: item.sku,
      quantity: item.quantity,
      item_price: item.price
    }));

    window.fbq('track', 'Purchase', {
      value: total,
      currency: 'COP',
      content_ids: cartItems.map(item => item.sku),
      content_name: cartItems.map(item => item.name).join(', '),
      content_type: 'product',
      contents: contents,
      num_items: itemCount
    });
  }
};

export const testFacebookPixel = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
    window.fbq('track', 'ViewContent', {
      content_ids: ['TEST-SKU'],
      content_name: 'Producto de Prueba',
      content_type: 'product',
      value: 100000,
      currency: 'COP'
    });
  }
};

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
    if (typeof fbq !== 'undefined') {
      const contents = cartItems.map(item => ({
        id: item.sku,
        quantity: item.quantity,
        item_price: item.price
      }));

      fbq('track', 'InitiateCheckout', {
        value: total,
        currency: 'COP',
        content_ids: cartItems.map(item => item.sku),
        content_name: cartItems.map(item => item.name).join(', '),
        content_type: 'product',
        contents: contents,
        num_items: itemCount
      });
    }

    let message = "🛍️ *SOLICITUD DE COMPRA*%0A";
    message += "━━━━━━━━━━━━━━━━━━━━━━%0A%0A";
    message += "*TIEMPO Y ESTILO*%0A";
    message += "_Joyería & Relojería Premium_%0A%0A";
    message += "*📦 DETALLE DEL PEDIDO:*%0A%0A";

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      message += `   • Referencia: ${item.sku}%0A`;
      message += `   • Cantidad: ${item.quantity}%0A`;
      message += `   • Precio unitario: $${item.price.toLocaleString('es-CO')}%0A`;
      message += `   • Subtotal: $${(item.price * item.quantity).toLocaleString('es-CO')}%0A%0A`;
    });

    message += "━━━━━━━━━━━━━━━━━━━━━━%0A";
    message += "*💰 RESUMEN DE COMPRA:*%0A%0A";
    message += `• Subtotal productos: $${total.toLocaleString('es-CO')}%0A`;
    message += `• Envío: *GRATIS* ✓%0A`;
    message += `• *TOTAL A PAGAR: $${finalTotal.toLocaleString('es-CO')}*%0A`;
    message += `• Total artículos: ${itemCount}%0A%0A`;
    message += "━━━━━━━━━━━━━━━━━━━━━━%0A%0A";
    message += "Deseo confirmar la disponibilidad de estos productos y conocer el tiempo estimado de entrega.%0A%0A";
    message += "Gracias por su atención.";

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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-end">
      <div className={`bg-gradient-to-b from-gray-50 to-white w-full max-w-sm sm:max-w-md lg:max-w-2xl h-full overflow-hidden shadow-2xl transform transition-transform duration-300 ${
        isAnimating ? 'translate-x-0' : 'translate-x-0'
      }`}>
        
        {/* Header profesional */}
        <div className="sticky top-0 bg-gradient-to-r from-black via-secondary to-black text-white p-6 z-10 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-display">Carrito de Compras</h2>
                <p className="text-white/90 text-sm font-semibold">TIEMPO Y ESTILO</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-white hover:bg-white/10 p-2 rounded-xl transition-all duration-300 border border-white/20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Contador de productos */}
          {itemCount > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-white/90 text-sm font-semibold flex items-center">
                <Package className="w-4 h-4 mr-2" />
                {itemCount} {itemCount === 1 ? 'artículo seleccionado' : 'artículos seleccionados'}
              </span>
              <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-bold text-lg font-display">
                  ${total.toLocaleString('es-CO')}
                </span>
              </div>
            </div>
          )}

          {/* Banner envío gratis */}
          {total > 0 && (
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="flex items-center justify-center">
                <Truck className="w-5 h-5 mr-2 text-white" />
                <span className="text-white text-sm font-bold">
                  Envío sin costo incluido en toda Colombia
                </span>
                <CheckCircle className="w-5 h-5 ml-2 text-white" />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            /* Carrito vacío */
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
              <div className="bg-gradient-to-br from-secondary-50 to-white rounded-full p-12 mb-6 border-2 border-secondary/20 shadow-lg">
                <ShoppingBag className="h-20 w-20 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-display">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-sm">
                Explora nuestra exclusiva colección de joyería fina y relojería de lujo. 
                Cada pieza está diseñada para complementar tu estilo único.
              </p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-3"
              >
                <Gem className="w-5 h-5" />
                Explorar Colección Premium
              </button>
            </div>
          ) : (
            <>
              {/* PRODUCTOS */}
              <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 space-y-4" style={{minHeight: '60vh'}}>
                {cartItems.map((item, index) => (
                  <div 
                    key={item.cartId || item.id} 
                    className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary/20"
                  >
                    <div className="flex items-center gap-4">
                      {/* Imagen del producto */}
                      <div className="relative flex-shrink-0">
                        <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg border-2 border-secondary/20">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {item.discount && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-secondary to-accent text-white text-xs px-2 py-1 rounded-lg font-bold shadow-lg">
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
                              <span className="text-xs text-gray-600 font-semibold">Producto Premium</span>
                            </div>
                            <h3 className="font-bold text-black text-lg leading-tight mb-1 font-display">
                              {item.name}
                            </h3>
                            {item.sku && (
                              <p className="text-secondary text-xs bg-secondary/10 px-2 py-1 rounded-md inline-block border border-secondary/20">
                                REF: {item.sku}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.cartId || item.id)}
                            className="text-accent hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-all duration-300 flex-shrink-0"
                            title="Eliminar del carrito"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Precios */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="font-bold text-black text-xl font-display">
                            ${item.price.toLocaleString('es-CO')}
                          </div>
                          {item.originalPrice && (
                            <div className="text-gray-400 line-through text-sm">
                              ${item.originalPrice.toLocaleString('es-CO')}
                            </div>
                          )}
                        </div>
                        
                        {/* Controles de cantidad */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.cartId || item.id, item.quantity - 1)}
                              className="bg-white hover:bg-gray-100 border-2 border-secondary/30 rounded-xl w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                              <Minus className="h-4 w-4 text-black" />
                            </button>
                            <div className="bg-white px-4 py-2 rounded-xl min-w-[3rem] text-center border-2 border-secondary/30 shadow-md">
                              <span className="text-black font-bold text-lg font-display">
                                {item.quantity}
                              </span>
                            </div>
                            <button
                              onClick={() => updateQuantity(item.cartId || item.id, item.quantity + 1)}
                              className="bg-white hover:bg-gray-100 border-2 border-secondary/30 rounded-xl w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                              <Plus className="h-4 w-4 text-black" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500 font-semibold">Subtotal</p>
                            <p className="font-bold text-black text-lg font-display">
                              ${(item.price * item.quantity).toLocaleString('es-CO')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t-2 border-secondary/20 p-6 shadow-2xl">
                <div className="space-y-4">
                  {/* Resumen */}
                  <div className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-4 space-y-2 border-2 border-secondary/30 shadow-lg">
                    <div className="flex justify-between text-gray-700 text-sm">
                      <span className="font-semibold">Subtotal ({itemCount} {itemCount === 1 ? 'artículo' : 'artículos'})</span>
                      <span className="font-bold">${total.toLocaleString('es-CO')}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 text-sm">
                      <span className="flex items-center font-semibold">
                        <Truck className="w-4 h-4 mr-2" />
                        Envío nacional
                      </span>
                      <span className="font-bold text-whatsapp flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        GRATIS
                      </span>
                    </div>
                    <div className="border-t-2 border-secondary/30 pt-3 flex justify-between items-center">
                      <span className="text-xl font-bold text-black font-display">Total a pagar:</span>
                      <span className="text-2xl font-bold text-secondary font-display">
                        ${finalTotal.toLocaleString('es-CO')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Beneficios */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-3 text-center border-2 border-secondary/30 shadow-md">
                      <Shield className="w-5 h-5 text-secondary mx-auto mb-1" />
                      <p className="text-secondary text-xs font-bold">Compra Protegida</p>
                    </div>
                    <div className="bg-gradient-to-br from-whatsapp-50 to-white rounded-xl p-3 text-center border-2 border-whatsapp/30 shadow-md">
                      <CreditCard className="w-5 h-5 text-whatsapp mx-auto mb-1" />
                      <p className="text-whatsapp text-xs font-bold">Pago Contra Entrega</p>
                    </div>
                  </div>
                  
                  {/* Botón WhatsApp */}
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-whatsapp text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    <Phone className="h-6 w-6" />
                    Completar Compra por WhatsApp
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  
                  {/* Info adicional */}
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-2 font-medium">
                      Serás redirigido a WhatsApp para finalizar tu compra de forma segura
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs">
                      <span className="text-whatsapp font-semibold flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        Transacción segura
                      </span>
                      <span className="text-secondary font-semibold flex items-center">
                        <Truck className="w-3 h-3 mr-1" />
                        Envío garantizado
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