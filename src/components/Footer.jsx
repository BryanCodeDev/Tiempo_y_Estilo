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
  Star
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://wa.me/573146081297",
      icon: Phone,
      label: "WhatsApp",
      bgColor: "hover:bg-emerald-500"
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
      bgColor: "hover:bg-pink-500"
    }
  ];

  const navigationLinks = [
    { name: 'Inicio', href: '#inicio', icon: Home },
    { name: 'Productos', href: '#productos', icon: ShoppingBag },
    { name: 'Contacto', href: '#contacto', icon: Phone }
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
    <footer id="contacto" className="bg-pearl-gradient relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-white/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-100/20 to-secondary/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-white/10 to-amber-50/20 rounded-full blur-3xl opacity-25"></div>

      {/* Sección de beneficios premium */}
      <div className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-display">
              ¿Por qué elegir
              <span className="block text-gold">TIEMPO Y ESTILO?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Disfruta de una experiencia de compra excepcional con beneficios exclusivos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            <div className="text-center group">
              <div className="glass-luxury rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-secondary/20 group-hover:border-secondary/40 h-full hover:-translate-y-2">
                <div className="bg-gold-gradient rounded-2xl p-4 w-fit mx-auto mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <Truck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3 font-display">Envío Premium</h3>
                <p className="text-secondary text-sm font-semibold mb-2">Completamente Gratis</p>
                <p className="text-gray-600 text-sm leading-relaxed">Entrega express a toda Colombia</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-luxury rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-emerald-200/50 group-hover:border-emerald-400/50 h-full hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3 font-display">Compra Segura</h3>
                <p className="text-emerald-600 text-sm font-semibold mb-2">100% Protegida</p>
                <p className="text-gray-600 text-sm leading-relaxed">Pago contra entrega</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-luxury rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-primary/20 group-hover:border-primary/40 h-full hover:-translate-y-2">
                <div className="bg-ruby-gradient rounded-2xl p-4 w-fit mx-auto mb-6 shadow-luxury group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3 font-display">Calidad Excepcional</h3>
                <p className="text-luxury text-sm font-semibold mb-2">Premium Garantizada</p>
                <p className="text-gray-600 text-sm leading-relaxed">Proveedores certificados</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-luxury rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-purple-200/50 group-hover:border-purple-400/50 h-full hover:-translate-y-2">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3 font-display">Asesoría VIP</h3>
                <p className="text-purple-600 text-sm font-semibold mb-2">24/7 Disponible</p>
                <p className="text-gray-600 text-sm leading-relaxed">Expertos en joyería</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="relative z-10 py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-ruby-gradient rounded-3xl p-4 mr-6 shadow-luxury animate-gradient">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 font-display">
                    <span className="text-primary">TIEMPO Y </span>
                    <span className="text-gold">ESTILO</span>
                  </h3>
                  <p className="text-secondary text-sm font-semibold bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 inline-block">
                    Productos premium a tu alcance
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 max-w-lg leading-relaxed text-base">
                Especialistas en joyería y relojería premium, ofreciendo piezas excepcionales que reflejan tu personalidad única.
              </p>

              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 glass-luxury rounded-2xl border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-gold mb-1 font-display">50+</div>
                  <div className="text-gray-600 text-xs font-semibold">Piezas Exclusivas</div>
                </div>
                <div className="text-center p-4 glass-luxury rounded-2xl border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-emerald-600 mb-1 font-display">100%</div>
                  <div className="text-gray-600 text-xs font-semibold">Satisfacción</div>
                </div>
                <div className="text-center p-4 glass-luxury rounded-2xl border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-purple-600 mb-1 font-display">24/7</div>
                  <div className="text-gray-600 text-xs font-semibold">Asesoría VIP</div>
                </div>
              </div>

              {/* Redes sociales */}
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg font-display">Conéctate con nosotros</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group glass-luxury hover:text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-secondary/20 ${social.bgColor}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Información de contacto */}
            <div>
              <h4 className="font-bold mb-6 text-xl text-primary font-display">Contacto VIP</h4>
              <div className="space-y-4">

                <a
                  href="https://wa.me/573146081297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start p-4 rounded-2xl glass-luxury hover:bg-emerald-50/50 transition-all duration-300 border border-secondary/20 hover:border-emerald-400/30 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 group-hover:scale-110 p-3 rounded-2xl mr-4 transition-all duration-300 flex-shrink-0 shadow-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-primary group-hover:text-emerald-700 text-base">
                      +57 314 6081297
                    </span>
                    <span className="text-sm text-gray-600 block">WhatsApp VIP • 24/7</span>
                  </div>
                </a>

                <div className="flex items-start p-4 rounded-2xl glass-luxury border border-secondary/20 shadow-lg">
                  <div className="bg-ruby-gradient p-3 rounded-2xl mr-4 flex-shrink-0 shadow-luxury animate-gradient">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-primary text-base">C.C. Puerto Príncipe</span>
                    <span className="text-sm text-gray-600 block">Bogotá, Colombia</span>
                  </div>
                </div>

                <a
                  href="mailto:tiempoestilo7@gmail.com"
                  className="group flex items-start p-4 rounded-2xl glass-luxury hover:bg-primary/5 transition-all duration-300 border border-secondary/20 hover:border-primary/30 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="bg-gold-gradient group-hover:scale-110 p-3 rounded-2xl mr-4 transition-all duration-300 flex-shrink-0 shadow-gold animate-gradient">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-primary group-hover:text-luxury text-base">
                      tiempoestilo7@gmail.com
                    </span>
                    <span className="text-sm text-gray-600 block">Servicio premium</span>
                  </div>
                </a>

                <div className="flex items-start p-4 rounded-2xl glass-luxury border border-secondary/20 shadow-lg">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-2xl mr-4 flex-shrink-0 shadow-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-primary text-base">Horarios VIP</span>
                    <span className="text-sm text-gray-600 block">Siempre abierto • 24/7</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enlaces útiles */}
            <div>
              <h4 className="font-bold mb-6 text-xl text-primary font-display">Navegación</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center text-gray-600 hover:text-primary transition-all duration-300 py-3 px-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/20 text-base hover:shadow-lg hover:-translate-y-0.5"
                        onClick={link.href.startsWith('#') ? (e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        } : undefined}
                      >
                        <div className="bg-primary/10 group-hover:bg-ruby-gradient p-2 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-5 h-5 text-primary group-hover:text-white" />
                        </div>
                        <span className="min-w-0 truncate font-semibold">{link.name}</span>
                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 text-secondary" />
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
      <div className="bg-gradient-to-br from-primary/90 via-luxury/90 to-primary/90 py-12 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-white/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-white/20 to-secondary/10 rounded-full blur-2xl opacity-15"></div>

        <div className="container-luxury relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white text-base font-semibold">
                &copy; {currentYear} TIEMPO Y ESTILO. Todos los derechos reservados.
              </p>
              <p className="text-white/80 text-sm mt-2 flex items-center justify-center lg:justify-start">
                Hecho con
                <Heart className="inline h-4 w-4 text-secondary mx-2 fill-current" />
                en Colombia para el mundo
              </p>
            </div>

            {/* Badges de confianza */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 text-sm">
              <div className="flex items-center bg-white text-primary px-6 py-4 rounded-2xl border-2 border-secondary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CreditCard className="h-5 w-5 mr-3 text-secondary" />
                <span className="font-black text-base">Pago 100% Seguro</span>
              </div>
              <div className="flex items-center bg-white text-primary px-6 py-4 rounded-2xl border-2 border-secondary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Truck className="h-5 w-5 mr-3 text-secondary" />
                <span className="font-black text-base">Envío Premium Gratis</span>
              </div>
              <div className="flex items-center bg-white text-primary px-6 py-4 rounded-2xl border-2 border-secondary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Star className="h-5 w-5 mr-3 text-secondary fill-current" />
                <span className="font-black text-base">Calificación 5.0</span>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <span className="font-semibold">Desarrollado con React & Tailwind CSS</span>
                <span className="hidden sm:inline text-white/60">•</span>
                <span className="font-semibold">Optimizado para experiencia premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;