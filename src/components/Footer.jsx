import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter, Store, Heart, Star, Shield, Truck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Sección superior con características */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm py-8 sm:py-12 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <Truck className="h-8 w-8 sm:h-12 sm:w-12 text-emerald-400 mx-auto mb-3" />
                  <h3 className="font-bold text-sm sm:text-base mb-1">Domicilios</h3>
                  <p className="text-emerald-300 text-xs sm:text-sm font-semibold">Gratis {'>'} $30.000</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-bold text-sm sm:text-base mb-1">Calidad</h3>
                  <p className="text-blue-300 text-xs sm:text-sm font-semibold">Garantizada</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <Star className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-bold text-sm sm:text-base mb-1">Experiencia</h3>
                  <p className="text-yellow-300 text-xs sm:text-sm font-semibold">+10 años</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <Clock className="h-8 w-8 sm:h-12 sm:w-12 text-purple-400 mx-auto mb-3" />
                  <h3 className="font-bold text-sm sm:text-base mb-1">Horarios</h3>
                  <p className="text-purple-300 text-xs sm:text-sm font-semibold">6AM - 10PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal del footer */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Información de la tienda */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-3 mr-4">
                    <Store className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Mi Tienda Virtual
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                  Tu tienda de barrio de confianza, ahora con la comodidad de comprar online 
                  y recibir tus productos en casa. Más de 10 años sirviendo a nuestra comunidad 
                  con productos frescos y de calidad.
                </p>
                
                {/* Redes sociales */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-white mb-3">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/munox09" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6 text-white group-hover:animate-pulse" />
                    </a>
                    <a 
                      href="https://www.instagram.com/santx._09_/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6 text-white group-hover:animate-pulse" />
                    </a>
                    <a 
                      href="https://x.com/santx_09_" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-black transition-all duration-300 transform hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6 text-white group-hover:animate-pulse" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Información de contacto */}
              <div>
                <h4 className="font-bold mb-6 text-xl text-white">Contacto</h4>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/573113670631" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-white/10"
                  >
                    <div className="bg-green-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="block font-semibold">+57 311 367 0631</span>
                      <span className="text-xs text-gray-400">WhatsApp disponible</span>
                    </div>
                  </a>
                  
                  <div className="flex items-start text-gray-300 p-2 rounded-lg">
                    <div className="bg-blue-500 p-2 rounded-lg mr-3 flex-shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="block font-semibold">Calle 123 #45-67</span>
                      <span className="text-sm text-gray-400">Barrio Centro</span>
                      <span className="text-sm text-gray-400">Bogotá, Colombia</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300 p-2 rounded-lg">
                    <div className="bg-purple-500 p-2 rounded-lg mr-3">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="block font-semibold">Lun - Dom</span>
                      <span className="text-sm text-gray-400">6:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                  
                  <a 
                    href="mailto:info@mitiendavirtual.com" 
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-white/10"
                  >
                    <div className="bg-red-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="block font-semibold">info@mitiendavirtual.com</span>
                      <span className="text-xs text-gray-400">Contáctanos por email</span>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Enlaces útiles */}
              <div>
                <h4 className="font-bold mb-6 text-xl text-white">Enlaces</h4>
                <ul className="space-y-3">
                  {[
                    { name: '🏠 Inicio', href: '#inicio' },
                    { name: '🛍️ Productos', href: '#productos' },
                    { name: '📞 Contacto', href: '#contacto' },
                    { name: '📋 Términos y Condiciones', href: '/terminos' },
                    { name: '🔒 Política de Privacidad', href: '/privacidad' },
                    { name: '❓ Preguntas Frecuentes', href: '/faq' }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 transform inline-block py-1"
                        onClick={link.href.startsWith('#') ? (e) => {
                          e.preventDefault();
                          document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                        } : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección inferior */}
        <div className="border-t border-white/10 bg-black/20 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {currentYear} Mi Tienda Virtual. Todos los derechos reservados.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Hecho con <Heart className="inline h-3 w-3 text-red-400" /> para nuestra comunidad
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-sm">
                <div className="flex items-center text-gray-400 bg-white/5 px-3 py-2 rounded-lg">
                  <span className="mr-2">💳</span>
                  <span>Pago contra entrega</span>
                </div>
                <div className="flex items-center text-gray-400 bg-white/5 px-3 py-2 rounded-lg">
                  <span className="mr-2">🚚</span>
                  <span>Domicilios gratis {'>'} $30.000</span>
                </div>
                <div className="flex items-center text-gray-400 bg-white/5 px-3 py-2 rounded-lg">
                  <span className="mr-2">⭐</span>
                  <span>Calidad garantizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;