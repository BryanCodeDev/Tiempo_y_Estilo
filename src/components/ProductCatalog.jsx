import React, { useState, useEffect } from 'react';
import { Filter, Search, Grid, List, Package, Star, Sliders, Award, ArrowRight, Crown, Phone } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const ProductCatalog = ({ addToCart, navigateToProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.sku.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'discount':
          return (b.discount || 0) - (a.discount || 0);
        case 'stock':
          return Number(b.inStock) - Number(a.inStock);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedCategory !== 'all') {
      params.set('categoria', selectedCategory);
    }
    
    if (searchTerm) {
      params.set('buscar', searchTerm);
    }
    
    if (sortBy !== 'name') {
      params.set('orden', sortBy);
    }
    
    const newUrl = params.toString() ? `/?${params.toString()}` : '/';

    if (window.location.search !== `?${params.toString()}` || window.location.pathname !== '/') {
      window.history.replaceState(null, '', newUrl);
    }
  }, [selectedCategory, searchTerm, sortBy]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    const categoria = urlParams.get('categoria');
    if (categoria && categories.find(c => c.id === categoria)) {
      setSelectedCategory(categoria);
    }
    
    const buscar = urlParams.get('buscar');
    if (buscar) {
      setSearchTerm(buscar);
    }
    
    const orden = urlParams.get('orden');
    if (orden) {
      setSortBy(orden);
    }
  }, []);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('name');
    window.history.replaceState(null, '', '/');
  };

  const productsInStock = filteredProducts.filter(p => p.inStock).length;
  const productsOnSale = filteredProducts.filter(p => p.discount).length;

  const handleProductClick = (product) => {
    if (navigateToProduct) {
      navigateToProduct(product);
    }
  };

  return (
    <section id="productos" className="py-16 lg:py-20 bg-gradient-to-br from-white via-amber-50/30 to-white min-h-screen relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-primary/3"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-20"></div>

      <div className="container-luxury relative z-10">

        {/* Header premium elegante */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-luxury border border-secondary/20 text-primary rounded-full text-sm font-bold mb-6 shadow-luxury">
            <Crown className="w-5 h-5 mr-3 text-secondary animate-pulse" />
            Colección Exclusiva de Lujo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight font-display">
            Explora nuestra
            <span className="block text-gold animate-shimmer">
              Colección Premium
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubre piezas únicas de joyería y relojería con acabados excepcionales.
            Cada artículo es seleccionado por expertos para garantizar la máxima calidad y exclusividad.
            {filteredProducts.length > 0 && (
              <span className="block mt-4 text-base">
                <span className="inline-flex items-center px-6 py-3 glass-luxury rounded-full shadow-lg border border-secondary/20">
                  <span className="text-primary font-bold text-xl mr-2 font-display">{filteredProducts.length}</span>
                  piezas excepcionales disponibles
                  {selectedCategory !== 'all' && (
                    <span className="ml-2">en <span className="font-bold text-luxury">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
                  )}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Barra de filtros premium elegante */}
        <div className="glass-luxury border border-secondary/20 rounded-3xl p-8 mb-12 shadow-2xl relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-40"></div>

          {/* Búsqueda principal premium */}
          <div className="relative mb-8">
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-ruby-gradient p-3 rounded-2xl shadow-luxury animate-gradient">
              <Search className="text-white h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder={`Buscar en nuestra colección de ${products.length} piezas exclusivas...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-20 pr-14 py-5 border-2 border-secondary/30 rounded-2xl focus:outline-none focus:ring-0 focus:border-secondary transition-all duration-300 text-base glass-luxury text-primary placeholder-gray-500 font-semibold shadow-lg"
              aria-label="Buscar productos por nombre, descripción o referencia"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors glass-luxury hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-secondary/20"
                aria-label="Limpiar búsqueda"
              >
                <span className="text-lg font-bold">×</span>
              </button>
            )}
          </div>

          {/* Controles principales premium */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between mb-6 relative z-10">

            {/* Ordenamiento elegante */}
            <div className="flex items-center gap-4 glass-luxury rounded-2xl p-3 border border-secondary/20 shadow-lg">
              <div className="bg-gold-gradient p-3 rounded-xl shadow-gold animate-gradient">
                <Sliders className="h-5 w-5 text-primary" />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent text-primary text-base font-bold min-w-0 flex-1 sm:flex-none sm:w-52"
                aria-label="Ordenar productos por"
              >
                <option value="name">Ordenar por Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="discount">Mayor Descuento</option>
                <option value="stock">Más Disponibles</option>
              </select>
            </div>

            {/* Vista y filtros premium */}
            <div className="flex items-center gap-4">
              {/* Selector de vista elegante */}
              <div className="hidden md:flex glass-luxury border border-secondary/20 rounded-2xl p-2 shadow-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-ruby-gradient text-white shadow-luxury scale-105 animate-gradient'
                      : 'text-primary hover:text-white hover:bg-ruby-gradient border-0'
                  }`}
                  title="Vista cuadrícula"
                  aria-label="Cambiar a vista cuadrícula"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-ruby-gradient text-white shadow-luxury scale-105 animate-gradient'
                      : 'text-primary hover:text-white hover:bg-ruby-gradient border-0'
                  }`}
                  title="Vista lista"
                  aria-label="Cambiar a vista lista"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Botón filtros premium */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 shadow-lg border backdrop-blur-sm ${
                  showFilters
                    ? 'bg-ruby-gradient text-white border-primary/30 shadow-luxury animate-gradient'
                    : 'glass-luxury text-primary border-secondary/20 hover:bg-white hover:border-secondary hover:text-luxury'
                }`}
                aria-label={showFilters ? 'Ocultar categorías' : 'Mostrar categorías'}
                aria-expanded={showFilters}
              >
                <Filter className="h-5 w-5" />
                <span className="hidden sm:inline">Categorías</span>
                <span className="sm:hidden">Filtros</span>
              </button>
            </div>
          </div>

          {/* Panel de categorías premium expandido */}
          <div className={`transition-all duration-500 overflow-hidden ${
            showFilters ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-secondary/20 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gold-gradient p-3 rounded-2xl shadow-gold animate-gradient">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-bold text-xl font-display">Filtrar por categoría:</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" role="group" aria-label="Filtros de categoría">
                {categories.map(category => {
                  const productCount = category.id === 'all'
                    ? products.length
                    : products.filter(p => p.category === category.id).length;

                  const IconComponent = category.icon;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group relative p-6 rounded-2xl text-sm font-bold transition-all duration-300 text-center hover:scale-105 hover:-translate-y-1 shadow-lg backdrop-blur-sm border ${
                        selectedCategory === category.id
                          ? 'bg-ruby-gradient text-white border-primary/30 shadow-luxury shadow-xl animate-gradient'
                          : 'glass-luxury text-primary border-secondary/20 hover:border-secondary hover:shadow-xl'
                      }`}
                      aria-label={`Filtrar por ${category.name} (${productCount} productos)`}
                    >
                      <div className={`p-3 rounded-2xl mx-auto mb-4 w-fit transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-white/20 backdrop-blur-sm'
                          : 'bg-gradient-to-br from-amber-50 to-white group-hover:from-secondary/10 group-hover:to-primary/10'
                      }`}>
                        <IconComponent className={`w-6 h-6 mx-auto transition-colors duration-300 ${
                          selectedCategory === category.id ? 'text-white' : 'text-secondary group-hover:text-primary'
                        }`} />
                      </div>
                      <span className="block font-bold text-base mb-2">{category.name}</span>
                      <span className={`block text-xs font-semibold ${
                        selectedCategory === category.id ? 'text-white/80' : 'text-gray-600 group-hover:text-luxury'
                      }`}>
                        {productCount} pieza{productCount !== 1 ? 's' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Información de resultados premium */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-8 border-t border-secondary/20 gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="glass-luxury rounded-2xl px-6 py-4 border border-secondary/20 shadow-lg">
                <span className="font-bold text-xl text-primary font-display">
                  {filteredProducts.length} pieza{filteredProducts.length !== 1 ? 's' : ''} encontradas
                  {selectedCategory !== 'all' && (
                    <span className="ml-2 text-secondary font-bold">
                      en {categories.find(c => c.id === selectedCategory)?.name}
                    </span>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center glass-luxury bg-emerald-50/50 rounded-2xl px-4 py-3 border border-emerald-200/50 shadow-lg">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-bold text-emerald-700">{productsInStock} disponibles</span>
                </div>
                <div className="flex items-center glass-luxury bg-red-50/50 rounded-2xl px-4 py-3 border border-red-200/50 shadow-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="font-bold text-red-700">{productsOnSale} en oferta</span>
                </div>
              </div>
            </div>
            {(searchTerm || selectedCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="glass-luxury text-primary hover:text-white hover:bg-ruby-gradient font-bold px-6 py-3 rounded-2xl transition-all duration-300 border border-secondary/20 shadow-lg hover:shadow-xl"
                aria-label="Limpiar todos los filtros de búsqueda"
              >
                <span className="flex items-center gap-2">
                  <span>Limpiar filtros</span>
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Grid premium elegante */}
        <div
          className={`transition-all duration-500 ${
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'
              : 'space-y-8'
          }`}
          role="main"
          aria-label={`Lista de ${filteredProducts.length} productos`}
        >
          {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className="opacity-100 w-full transform translate-y-0"
              style={{
                animationDelay: `${Math.min(index * 150, 800)}ms`,
                animationFillMode: 'both'
              }}
            >
              <ProductCard
                product={product}
                addToCart={addToCart}
                viewMode={viewMode}
                navigateToProduct={handleProductClick}
              />
            </article>
          ))}
        </div>

        {/* Estado vacío premium elegante */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 glass-luxury border border-secondary/20 rounded-3xl shadow-2xl backdrop-blur-sm relative overflow-hidden" role="status">
            {/* Elementos decorativos */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-20"></div>

            <div className="relative z-10">
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8 shadow-lg border border-secondary/20">
                <Search className="w-16 h-16 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4 font-display">
                No encontramos productos
              </h3>
              <p className="text-gray-600 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                {searchTerm && (
                  <>No hay productos que coincidan con "<strong className="text-luxury font-bold">{searchTerm}</strong>"</>
                )}
                {selectedCategory !== 'all' && !searchTerm && (
                  <>No hay productos disponibles en la categoría "<strong className="text-secondary font-bold">{categories.find(c => c.id === selectedCategory)?.name}</strong>"</>
                )}
                {!searchTerm && selectedCategory === 'all' && (
                  <>No hay productos disponibles en este momento</>
                )}
              </p>
              <div className="space-y-6">
                <button
                  onClick={clearFilters}
                  className="bg-ruby-gradient hover:opacity-90 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-luxury hover:shadow-2xl text-lg border border-primary/20 animate-gradient"
                >
                  <span className="flex items-center gap-3">
                    <span>Mostrar toda la colección</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <p className="text-sm text-gray-600 font-semibold">¿Buscas algo específico?</p>
                  <a
                    href="https://wa.me/573146081297?text=Hola%20TIEMPO%20Y%20ESTILO,%20estoy%20buscando%20un%20producto%20específico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-luxury bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 font-bold text-sm px-6 py-3 rounded-2xl border border-emerald-200 transition-all duration-300 flex items-center gap-2 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas premium elegantes */}
        {filteredProducts.length > 0 && (
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group glass-luxury rounded-3xl p-8 border border-secondary/20 text-center hover:border-secondary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform duration-300 font-display">
                {filteredProducts.length}
              </div>
              <div className="text-gray-600 text-base font-bold">Piezas en Colección</div>
            </div>
            <div className="group glass-luxury rounded-3xl p-8 border border-emerald-200/50 text-center hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-300 font-display">
                {productsInStock}
              </div>
              <div className="text-gray-600 text-base font-bold">Disponibles</div>
            </div>
            <div className="group glass-luxury rounded-3xl p-8 border border-red-200/50 text-center hover:border-red-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300 font-display">
                {productsOnSale}
              </div>
              <div className="text-gray-600 text-base font-bold">En Oferta Especial</div>
            </div>
            <div className="group glass-luxury rounded-3xl p-8 border border-secondary/20 text-center hover:border-secondary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl font-bold text-primary mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 font-display">
                <Star className="w-10 h-10 mr-2 fill-current text-secondary" />
                5.0
              </div>
              <div className="text-gray-600 text-base font-bold">Calificación Perfecta</div>
            </div>
          </div>
        )}

        {/* CTA section premium elegante */}
        {filteredProducts.length > 0 && (
          <div className="mt-16 bg-gradient-to-br from-primary via-luxury to-primary rounded-3xl p-12 text-center text-white border border-primary/50 relative overflow-hidden shadow-2xl">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-white/10 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-white/20 to-secondary/10 rounded-full blur-2xl opacity-15"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gold-gradient p-4 rounded-2xl shadow-gold animate-gradient">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-black bg-white text-primary px-6 py-3 rounded-full ml-4 border-2 border-secondary shadow-xl">
                  Asesoría VIP personalizada
                </span>
              </div>
              <h3 className="text-4xl font-bold mb-6 font-display">
                ¿Necesitas ayuda para elegir la pieza perfecta?
              </h3>
              <p className="text-white/90 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
                Nuestro equipo de expertos en joyería y relojería está listo para guiarte en la selección de la pieza ideal.
                Recibe asesoría personalizada sobre cualquiera de nuestras {filteredProducts.length} piezas exclusivas con envío GRATIS incluido
              </p>
              <a
                href={`https://wa.me/573146081297?text=Hola%20TIEMPO%20Y%20ESTILO,%20necesito%20asesoría%20VIP%20para%20elegir%20una%20pieza${searchTerm ? `%20relacionada%20con%20"${searchTerm}"` : ''}${selectedCategory !== 'all' ? `%20en%20la%20categoría%20"${categories.find(c => c.id === selectedCategory)?.name}"` : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold-gradient hover:opacity-90 text-primary px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-gold hover:shadow-2xl text-lg border border-secondary/30 hover:scale-105 animate-gradient"
              >
                <Package className="w-6 h-6 mr-3" />
                Obtener asesoría VIP gratuita
                <ArrowRight className="w-6 h-6 ml-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;