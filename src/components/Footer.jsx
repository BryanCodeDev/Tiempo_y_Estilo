import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ExternalLink, 
  Award, 
  Users,
  Package, 
  Heart, 
  Shield, 
  Truck,
  Home,
  ShoppingBag,
  FileText,
  Lock,
  HelpCircle,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: "https://www.instagram.com/gotobuyy1/", 
      icon: Instagram, 
      label: "Instagram",
      bgColor: "hover:bg-pink-500"
    },
    { 
      href: "https://www.tiktok.com/@gotobuy00?lang=es", 
      icon: Package, // Usamos Package como placeholder para TikTok
      label: "TikTok",
      bgColor: "hover:bg-black"
    },
    { 
      href: "https://www.youtube.com/@gootobuy", 
      icon: Youtube, 
      label: "YouTube",
      bgColor: "hover:bg-red-600"
    },
    { 
      href: "https://x.com/gootobuy", 
      icon: Twitter, 
      label: "Twitter/X",
      bgColor: "hover:bg-gray-900"
    }
  ];

  const navigationLinks = [
    { name: 'Inicio', href: '#inicio', icon: Home },
    { name: 'Productos', href: '#productos', icon: ShoppingBag },
    { name: 'Sobre nosotros', href: '#about', icon: Users },
    { name: 'Términos y condiciones', href: '/terms', icon: FileText },
    { name: 'Política de privacidad', href: '/privacy', icon: Lock },
    { name: 'Envíos y devoluciones', href: '/shipping', icon: Truck },
    { name: 'Preguntas frecuentes', href: '/faq', icon: HelpCircle }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contacto" className="bg-white border-t border-gray-200">
      
      {/* Sección de beneficios */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            
            <div className="text-center group">
              <div className="bg-white rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg lg:rounded-xl p-2 lg:p-3 w-fit mx-auto mb-2 lg:mb-3">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm lg:text-base text-gray-900 mb-1">Envío Gratis</h3>
                <p className="text-blue-600 text-xs sm:text-sm font-semibold">Sobre $80.000</p>
                <p className="text-gray-500 text-xs mt-1 hidden sm:block">A toda Colombia</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg lg:rounded-xl p-2 lg:p-3 w-fit mx-auto mb-2 lg:mb-3">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm lg:text-base text-gray-900 mb-1">Compra Segura</h3>
                <p className="text-green-600 text-xs sm:text-sm font-semibold">100% Protegida</p>
                <p className="text-gray-500 text-xs mt-1 hidden sm:block">Pago contra entrega</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg lg:rounded-xl p-2 lg:p-3 w-fit mx-auto mb-2 lg:mb-3">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm lg:text-base text-gray-900 mb-1">Calidad Premium</h3>
                <p className="text-orange-600 text-xs sm:text-sm font-semibold">Garantizada</p>
                <p className="text-gray-500 text-xs mt-1 hidden sm:block">Productos seleccionados</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg lg:rounded-xl p-2 lg:p-3 w-fit mx-auto mb-2 lg:mb-3">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm lg:text-base text-gray-900 mb-1">Soporte 24/7</h3>
                <p className="text-purple-600 text-xs sm:text-sm font-semibold">WhatsApp</p>
                <p className="text-gray-500 text-xs mt-1 hidden sm:block">Siempre disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
            
            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl lg:rounded-2xl p-2 lg:p-3 mr-3 lg:mr-4 shadow-lg">
                  <Package className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    <span className="text-gray-900">GoTo</span>
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Buy</span>
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Tu tienda online de confianza</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 lg:mb-6 max-w-md leading-relaxed text-sm lg:text-base">
                Ofrecemos productos únicos y de calidad premium para tu hogar, belleza y bienestar. 
                Con envíos seguros a toda Colombia y atención personalizada 24/7.
              </p>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="text-center p-2 lg:p-3 bg-gray-50 rounded-lg lg:rounded-xl">
                  <div className="text-lg lg:text-xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-500 text-xs">Productos</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-gray-50 rounded-lg lg:rounded-xl">
                  <div className="text-lg lg:text-xl font-bold text-green-600">100%</div>
                  <div className="text-gray-500 text-xs">Satisfacción</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-gray-50 rounded-lg lg:rounded-xl">
                  <div className="text-lg lg:text-xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-500 text-xs">Soporte</div>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-sm lg:text-base">Síguenos</h4>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group bg-gray-100 hover:text-white p-2 lg:p-3 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md ${social.bgColor}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Información de contacto */}
            <div>
              <h4 className="font-bold mb-4 lg:mb-6 text-base lg:text-lg text-gray-900">Contacto</h4>
              <div className="space-y-3 lg:space-y-4">
                
                <a 
                  href="https://wa.me/573508470735" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start p-3 rounded-lg lg:rounded-xl hover:bg-green-50 transition-all duration-300"
                >
                  <div className="bg-green-100 group-hover:bg-green-500 p-2 rounded-lg mr-3 transition-all duration-300 flex-shrink-0">
                    <Phone className="h-4 w-4 text-green-600 group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-semibold text-gray-900 group-hover:text-green-700 text-sm lg:text-base">
                      +57 350 847 0735
                    </span>
                    <span className="text-xs lg:text-sm text-gray-500 block">WhatsApp • Disponible 24/7</span>
                  </div>
                </a>
                
                <div className="flex items-start p-3 rounded-lg lg:rounded-xl">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-semibold text-gray-900 text-sm lg:text-base">Colombia</span>
                    <span className="text-xs lg:text-sm text-gray-500 block">Envíos a todo el país</span>
                    <span className="text-xs text-blue-600 block">Cobertura nacional garantizada</span>
                  </div>
                </div>
                
                <a 
                  href="mailto:info@gotobuy.com" 
                  className="group flex items-start p-3 rounded-lg lg:rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="bg-blue-100 group-hover:bg-blue-500 p-2 rounded-lg mr-3 transition-all duration-300 flex-shrink-0">
                    <Mail className="h-4 w-4 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-semibold text-gray-900 group-hover:text-blue-700 text-sm lg:text-base break-all">
                      info@gotobuy.com
                    </span>
                    <span className="text-xs lg:text-sm text-gray-500 block">Contáctanos por email</span>
                  </div>
                </a>

                <div className="flex items-start p-3 rounded-lg lg:rounded-xl">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Clock className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-semibold text-gray-900 text-sm lg:text-base">Horarios</span>
                    <span className="text-xs lg:text-sm text-gray-500 block">Lun - Dom: 24 horas</span>
                    <span className="text-xs text-purple-600 block">Respuesta inmediata</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enlaces útiles */}
            <div>
              <h4 className="font-bold mb-4 lg:mb-6 text-base lg:text-lg text-gray-900">Enlaces</h4>
              <ul className="space-y-2 lg:space-y-3">
                {navigationLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 text-sm lg:text-base"
                        onClick={link.href.startsWith('#') ? (e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        } : undefined}
                      >
                        <IconComponent className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                        <span className="min-w-0 truncate">{link.name}</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección inferior */}
      <div className="bg-gray-900 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                &copy; {currentYear} GoToBuy. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center lg:justify-start">
                Hecho con 
                <Heart className="inline h-3 w-3 text-red-400 mx-1" /> 
                en Colombia
              </p>
            </div>
            
            {/* Badges de confianza */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-2 lg:gap-3 text-xs">
              <div className="flex items-center bg-gray-800 text-gray-300 px-2 lg:px-3 py-2 rounded-lg border border-gray-700">
                <span className="mr-2">💳</span>
                <span>Pago seguro</span>
              </div>
              <div className="flex items-center bg-gray-800 text-gray-300 px-2 lg:px-3 py-2 rounded-lg border border-gray-700">
                <Truck className="h-3 w-3 mr-2" />
                <span>Envío nacional</span>
              </div>
              <div className="flex items-center bg-gray-800 text-gray-300 px-2 lg:px-3 py-2 rounded-lg border border-gray-700">
                <span className="mr-2">⭐</span>
                <span>5.0 estrellas</span>
              </div>
              <div className="flex items-center bg-gray-800 text-gray-300 px-2 lg:px-3 py-2 rounded-lg border border-gray-700">
                <Shield className="h-3 w-3 mr-2" />
                <span>SSL seguro</span>
              </div>
            </div>
          </div>
          
          {/* Línea divisoria */}
          <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 lg:gap-4 text-xs text-gray-500">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                <span>Desarrollado con React & Tailwind CSS</span>
                <span className="hidden sm:inline">•</span>
                <span>Optimizado para móviles</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
                <a href="/sitemap" className="hover:text-gray-300 transition-colors">Mapa del sitio</a>
                <span className="hidden sm:inline">•</span>
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