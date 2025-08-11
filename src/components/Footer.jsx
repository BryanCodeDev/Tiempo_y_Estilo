import React from 'react';
import { Phone, MapPin, Clock, Mail, Instagram, Twitter, Package, Heart, Shield, Truck, Youtube, ExternalLink, Award, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-white border-t border-gray-200">
      
      {/* Sección de beneficios */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 w-fit mx-auto mb-3">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">Envío Gratis</h3>
                <p className="text-blue-600 text-xs sm:text-sm font-semibold">Sobre $80.000</p>
                <p className="text-gray-500 text-xs mt-1">A toda Colombia</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">Compra Segura</h3>
                <p className="text-green-600 text-xs sm:text-sm font-semibold">100% Protegida</p>
                <p className="text-gray-500 text-xs mt-1">Pago contra entrega</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-3 w-fit mx-auto mb-3">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">Calidad Premium</h3>
                <p className="text-orange-600 text-xs sm:text-sm font-semibold">Garantizada</p>
                <p className="text-gray-500 text-xs mt-1">Productos seleccionados</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">Soporte 24/7</h3>
                <p className="text-purple-600 text-xs sm:text-sm font-semibold">WhatsApp</p>
                <p className="text-gray-500 text-xs mt-1">Siempre disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-3 mr-4 shadow-lg">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    <span className="text-gray-900">GoTo</span>
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Buy</span>
                  </h3>
                  <p className="text-gray-500 text-sm">Tu tienda online de confianza</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Ofrecemos productos únicos y de calidad premium para tu hogar, belleza y bienestar. 
                Con envíos seguros a toda Colombia y atención personalizada 24/7.
              </p>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-500 text-xs">Productos</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-xl font-bold text-green-600">100%</div>
                  <div className="text-gray-500 text-xs">Satisfacción</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-500 text-xs">Soporte</div>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Síguenos</h4>
                <div className="flex space-x-3">
                  {[
                    { 
                      href: "https://www.instagram.com/gotobuyy1/", 
                      icon: Instagram, 
                      label: "Instagram",
                      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                    },
                    { 
                      href: "https://www.tiktok.com/@gotobuy00?lang=es", 
                      icon: Package, 
                      label: "TikTok",
                      color: "hover:bg-black"
                    },
                    { 
                      href: "https://www.youtube.com/@gootobuy", 
                      icon: Youtube, 
                      label: "YouTube",
                      color: "hover:bg-red-600"
                    },
                    { 
                      href: "https://x.com/gootobuy", 
                      icon: Twitter, 
                      label: "Twitter/X",
                      color: "hover:bg-gray-900"
                    }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group bg-gray-100 hover:text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-gray-600 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Información de contacto */}
            <div>
              <h4 className="font-bold mb-6 text-lg text-gray-900">Contacto</h4>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/573008226497" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start p-3 rounded-xl hover:bg-green-50 transition-all duration-300"
                >
                  <div className="bg-green-100 group-hover:bg-green-500 p-2 rounded-lg mr-3 transition-all duration-300">
                    <Phone className="h-4 w-4 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900 group-hover:text-green-700">
                      +57 300 822 6497
                    </span>
                    <span className="text-xs text-gray-500">WhatsApp • Disponible 24/7</span>
                  </div>
                </a>
                
                <div className="flex items-start p-3 rounded-xl">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">Colombia</span>
                    <span className="text-sm text-gray-500">Envíos a todo el país</span>
                    <span className="text-xs text-blue-600 block">Cobertura nacional garantizada</span>
                  </div>
                </div>
                
                <a 
                  href="mailto:info@gotobuy.com" 
                  className="group flex items-start p-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="bg-blue-100 group-hover:bg-blue-500 p-2 rounded-lg mr-3 transition-all duration-300">
                    <Mail className="h-4 w-4 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900 group-hover:text-blue-700">
                      info@gotobuy.com
                    </span>
                    <span className="text-xs text-gray-500">Contáctanos por email</span>
                  </div>
                </a>

                <div className="flex items-start p-3 rounded-xl">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <Clock className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">Horarios</span>
                    <span className="text-sm text-gray-500">Lun - Dom: 24 horas</span>
                    <span className="text-xs text-purple-600 block">Respuesta inmediata</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enlaces útiles */}
            <div>
              <h4 className="font-bold mb-6 text-lg text-gray-900">Enlaces</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Inicio', href: '#inicio', icon: '🏠' },
                  { name: 'Productos', href: '#productos', icon: '🛍️' },
                  { name: 'Sobre nosotros', href: '#about', icon: '💼' },
                  { name: 'Términos y condiciones', href: '/terms', icon: '📋' },
                  { name: 'Política de privacidad', href: '/privacy', icon: '🔒' },
                  { name: 'Envíos y devoluciones', href: '/shipping', icon: '🚚' },
                  { name: 'Preguntas frecuentes', href: '/faq', icon: '❓' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 text-sm"
                      onClick={link.href.startsWith('#') ? (e) => {
                        e.preventDefault();
                        document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                      } : undefined}
                    >
                      <span className="mr-3 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección inferior */}
      <div className="bg-gray-900 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} GoToBuy. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center lg:justify-start">
                Hecho con 
                <Heart className="inline h-3 w-3 text-red-400 mx-1" /> 
                en Colombia
              </p>
            </div>
            
            {/* Badges de confianza */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 text-xs">
              <div className="flex items-center bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700">
                <span className="mr-2">💳</span>
                <span>Pago seguro</span>
              </div>
              <div className="flex items-center bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700">
                <span className="mr-2">🚚</span>
                <span>Envío nacional</span>
              </div>
              <div className="flex items-center bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700">
                <span className="mr-2">⭐</span>
                <span>5.0 estrellas</span>
              </div>
              <div className="flex items-center bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700">
                <span className="mr-2">🛡️</span>
                <span>SSL seguro</span>
              </div>
            </div>
          </div>
          
          {/* Línea divisoria */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>Desarrollado con React & Tailwind CSS</span>
                <span>•</span>
                <span>Optimizado para móviles</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="/sitemap" className="hover:text-gray-300 transition-colors">Mapa del sitio</a>
                <span>•</span>
                <a href="/cookies" className="hover:text-gray-300 transition-colors">Política de cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;