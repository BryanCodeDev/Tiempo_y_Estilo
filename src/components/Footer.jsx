import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ExternalLink,
  Award,
  Users,
  Heart,
  Shield,
  Truck,
  Home,
  ShoppingBag,
  Crown,
  CreditCard,
  Star,
  Gem,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://wa.me/573146081297",
      icon: Phone,
      label: "WhatsApp",
      bgColor: "hover:bg-whatsapp"
    },
    {
      href: "https://www.instagram.com/tiempo_estilo7?fbclid=IwY2xjawNc5R1leHRuA2FlbQIxMABicmlkETFUMUZQdFl2dXBCYjNRd01XAR5dNDohIkUJ16qF8YCL2bqchcwSkqQs1jWzZRooa3b5AdQ5yWRyQIK0CmpHnw_aem_pHTojgSNqvslrsYiScIJrw",
      icon: ({ className }) => (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          role="img"
          aria-labelledby="instagram-icon"
        >
          <title id="instagram-icon">Instagram</title>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label: "Instagram",
      bgColor: "hover:bg-instagram"
    }
  ];

  const navigationLinks = [
    { name: 'Inicio', href: '#inicio', icon: Home },
    { name: 'Catálogo Premium', href: '#productos', icon: ShoppingBag },
    { name: 'Atención al Cliente', href: '#contacto', icon: Phone }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const elementId = href.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer id="contacto" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-white/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-white/5 to-secondary/10 rounded-full blur-3xl opacity-20"></div>

      {/* Sección de beneficios premium */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-black font-display">
                Experiencia Premium
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Descubre por qué somos la elección preferida en joyería y relojería de alta gama
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary/20 h-full hover:-translate-y-2">
                <div className="bg-gradient-to-br from-secondary to-accent rounded-xl p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-black mb-3 font-display">Envío sin Costo</h3>
                <p className="text-secondary text-sm font-semibold mb-2">A nivel nacional</p>
                <p className="text-gray-600 text-sm leading-relaxed">Entrega rápida y segura en toda Colombia</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-whatsapp/20 h-full hover:-translate-y-2">
                <div className="bg-whatsapp rounded-xl p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-black mb-3 font-display">Compra Protegida</h3>
                <p className="text-whatsapp text-sm font-semibold mb-2">Garantía total</p>
                <p className="text-gray-600 text-sm leading-relaxed">Pago seguro contra entrega</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary/20 h-full hover:-translate-y-2">
                <div className="bg-gradient-to-br from-accent to-secondary rounded-xl p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-black mb-3 font-display">Autenticidad</h3>
                <p className="text-accent text-sm font-semibold mb-2">Certificada</p>
                <p className="text-gray-600 text-sm leading-relaxed">Productos originales verificados</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary/20 h-full hover:-translate-y-2">
                <div className="bg-gradient-to-br from-secondary to-accent rounded-xl p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-black mb-3 font-display">Atención Personalizada</h3>
                <p className="text-accent text-sm font-semibold mb-2">Servicio exclusivo</p>
                <p className="text-gray-600 text-sm leading-relaxed">Asesoría especializada 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="relative z-10 py-12 border-t border-secondary/10">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-secondary rounded-2xl p-4 mr-4 shadow-lg">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1 font-display text-black">
                    TIEMPO Y ESTILO
                  </h3>
                  <p className="text-secondary text-sm font-semibold">
                    Joyería & Relojería Premium
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 max-w-lg leading-relaxed text-base">
                Especialistas en joyería fina y relojería de lujo. Ofrecemos una selección exclusiva de piezas que combinan elegancia, sofisticación y calidad excepcional para complementar tu estilo único.
              </p>

              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-xl border border-secondary/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-secondary mb-1 font-display">100+</div>
                  <div className="text-gray-600 text-xs font-semibold">Diseños Exclusivos</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-secondary/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-whatsapp mb-1 font-display">5.0</div>
                  <div className="text-gray-600 text-xs font-semibold flex items-center justify-center">
                    <Star className="w-3 h-3 text-whatsapp fill-current mr-1" />
                    Calificación
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-secondary/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-1 font-display">24/7</div>
                  <div className="text-gray-600 text-xs font-semibold">Disponibilidad</div>
                </div>
              </div>

              {/* Redes sociales */}
              <div>
                <h4 className="font-bold text-black mb-4 text-lg font-display">Síguenos</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group bg-white hover:text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl border border-secondary/20 ${social.bgColor}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-6 w-6 text-black group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Información de contacto */}
            <div>
              <h4 className="font-bold mb-6 text-xl text-black font-display">Contacto</h4>
              <div className="space-y-4">

                <a
                  href="https://wa.me/573146081297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start p-4 rounded-xl bg-white hover:bg-whatsapp-50 transition-all duration-300 border border-secondary/20 hover:border-whatsapp/30 shadow-md hover:shadow-lg"
                >
                  <div className="bg-whatsapp group-hover:scale-110 p-3 rounded-xl mr-3 transition-all duration-300 flex-shrink-0 shadow-md">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-black group-hover:text-whatsapp text-base">
                      +57 314 608 1297
                    </span>
                    <span className="text-sm text-gray-600 block">WhatsApp • Disponible 24/7</span>
                  </div>
                </a>

                <div className="flex items-start p-4 rounded-xl bg-white border border-secondary/20 shadow-md">
                  <div className="bg-secondary p-3 rounded-xl mr-3 flex-shrink-0 shadow-md">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-black text-base">Centro Comercial Puerto Príncipe</span>
                    <span className="text-sm text-gray-600 block">Bogotá D.C., Colombia</span>
                  </div>
                </div>

                <a
                  href="mailto:tiempoestilo7@gmail.com"
                  className="group flex items-start p-4 rounded-xl bg-white hover:bg-secondary-50 transition-all duration-300 border border-secondary/20 hover:border-secondary/40 shadow-md hover:shadow-lg"
                >
                  <div className="bg-accent group-hover:scale-110 p-3 rounded-xl mr-3 transition-all duration-300 flex-shrink-0 shadow-md">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-black group-hover:text-accent text-base">
                      tiempoestilo7@gmail.com
                    </span>
                    <span className="text-sm text-gray-600 block">Consultas y pedidos</span>
                  </div>
                </a>

                <div className="flex items-start p-4 rounded-xl bg-white border border-secondary/20 shadow-md">
                  <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-xl mr-3 flex-shrink-0 shadow-md">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-black text-base">Atención Continua</span>
                    <span className="text-sm text-gray-600 block">Lunes a Domingo • 24 horas</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enlaces útiles */}
            <div>
              <h4 className="font-bold mb-6 text-xl text-black font-display">Navegación</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center text-gray-700 hover:text-secondary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white border border-transparent hover:border-secondary/20 text-base hover:shadow-md"
                        onClick={link.href.startsWith('#') ? (e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        } : undefined}
                      >
                        <div className="bg-secondary-50 group-hover:bg-secondary p-2 rounded-lg mr-3 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                        </div>
                        <span className="min-w-0 truncate font-semibold">{link.name}</span>
                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 text-secondary" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Certificaciones */}
              <div className="mt-6 p-4 bg-white rounded-xl border border-secondary/20 shadow-md">
                <h5 className="font-bold text-black text-sm mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                  Garantías
                </h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Gem className="w-3 h-3 text-secondary mr-2" />
                    Productos originales
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-3 h-3 text-secondary mr-2" />
                    Compra protegida
                  </li>
                  <li className="flex items-center">
                    <Award className="w-3 h-3 text-secondary mr-2" />
                    Garantía de calidad
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="bg-gradient-to-r from-black via-secondary to-black py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        <div className="container-luxury relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white text-base font-semibold">
                © {currentYear} TIEMPO Y ESTILO - Joyería & Relojería Premium
              </p>
              <p className="text-white/80 text-sm mt-2 flex items-center justify-center lg:justify-start">
                Diseñado con
                <Heart className="inline h-4 w-4 text-secondary mx-2 fill-current" />
                para ofrecer excelencia
              </p>
            </div>

            {/* Badges de confianza */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 text-sm">
              <div className="flex items-center bg-white text-black px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
                <CreditCard className="h-5 w-5 mr-2 text-secondary" />
                <span className="font-bold text-sm">Pago Seguro</span>
              </div>
              <div className="flex items-center bg-white text-black px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
                <Truck className="h-5 w-5 mr-2 text-secondary" />
                <span className="font-bold text-sm">Envío Gratis</span>
              </div>
              <div className="flex items-center bg-white text-black px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
                <Star className="h-5 w-5 mr-2 text-secondary fill-current" />
                <span className="font-bold text-sm">5.0 Estrellas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;