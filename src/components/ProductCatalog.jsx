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
    <section id="productos" className="py-8 bg-gray-50 min-h-screen">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header premium elegante */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">✨</span>
            Productos destacados
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Explora nuestro catálogo
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Encuentra productos únicos con envío GRATIS incluido siempre.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gray-50 text-gray-700 rounded-full text-base font-medium">
            <span className="font-bold text-xl mr-2">{products.length}</span>
            productos disponibles
          </div>
        </div>

        {/* Barra de filtros premium elegante */}
        <div className="glass-luxury border border-secondary/30 rounded-3xl p-4 sm:p-6 mb-6 shadow-2xl relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-40"></div>

          {/* Búsqueda principal */}
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder={`Buscar en ${products.length} productos...`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);

                if (typeof fbq !== 'undefined' && e.target.value.trim() !== '') {
                  fbq('track', 'Search', {
                    search_string: e.target.value,
                    content_category: 'relojes'
                  });
                }
              }}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              aria-label="Buscar productos por nombre, descripción o referencia"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Limpiar búsqueda"
              >
                <span className="text-lg">×</span>
              </button>
            )}
          </div>

          {/* Controles principales */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-6">
            {/* Ordenamiento */}
            <div className="flex items-center gap-3">
              <Sliders className="h-5 w-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                aria-label="Ordenar productos por"
              >
                <option value="name">Ordenar por Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="discount">Mayor Descuento</option>
                <option value="stock">Más Disponibles</option>
              </select>
            </div>

            {/* Vista y filtros */}
            <div className="flex items-center gap-3">
              {/* Selector de vista */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  title="Vista cuadrícula"
                  aria-label="Cambiar a vista cuadrícula"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  title="Vista lista"
                  aria-label="Cambiar a vista lista"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Botón filtros */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  showFilters
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
                aria-label={showFilters ? 'Ocultar categorías' : 'Mostrar categorías'}
                aria-expanded={showFilters}
              >
                <Filter className="h-4 w-4" />
                <span>Categorías</span>
              </button>
            </div>
          </div>

          {/* Panel de categorías expandido */}
          <div className={`transition-all duration-300 overflow-hidden ${
            showFilters ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-700">Filtrar por categoría:</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {categories.map(category => {
                  const productCount = category.id === 'all'
                    ? products.length
                    : products.filter(p => p.category === category.id).length;

                  const IconComponent = category.icon;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group relative p-4 rounded-lg text-sm font-medium transition-all duration-200 text-center hover:scale-105 ${
                        selectedCategory === category.id
                          ? 'bg-gray-900 text-white shadow-lg'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                      aria-label={`Filtrar por ${category.name} (${productCount} productos)`}
                    >
                      <div className={`p-2 rounded-lg mx-auto mb-2 w-fit ${
                        selectedCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-gray-50 group-hover:bg-gray-100'
                      }`}>
                        <IconComponent className={`w-5 h-5 mx-auto transition-colors duration-200 ${
                          selectedCategory === category.id ? 'text-white' : 'text-gray-600 group-hover:text-gray-900'
                        }`} />
                      </div>
                      <span className="block font-medium text-sm mb-1">{category.name}</span>
                      <span className={`block text-xs ${
                        selectedCategory === category.id ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        ({productCount})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Información de resultados */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-200 gap-4">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium text-gray-700">
                {filteredProducts.length} productos encontrados
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">{productsInStock} disponibles</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">{productsOnSale} en oferta</span>
              </div>
            </div>
            {(searchTerm || selectedCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 self-start sm:self-auto"
                aria-label="Limpiar todos los filtros de búsqueda"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Grid de productos */}
        <div
          className={`transition-all duration-300 ${
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
              : 'space-y-4'
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

        {/* Estado vacío */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12" role="status">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No encontramos productos
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm && (
                <>No hay productos que coincidan con "<strong>{searchTerm}</strong>"</>
              )}
              {selectedCategory !== 'all' && !searchTerm && (
                <>No hay productos disponibles en la categoría "<strong>{categories.find(c => c.id === selectedCategory)?.name}</strong>"</>
              )}
              {!searchTerm && selectedCategory === 'all' && (
                <>No hay productos disponibles en este momento</>
              )}
            </p>
            <button
              onClick={clearFilters}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Mostrar toda la colección
            </button>
          </div>
        )}

        {/* Estadísticas */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {filteredProducts.length}
              </div>
              <div className="text-sm text-gray-600">Productos</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {productsInStock}
              </div>
              <div className="text-sm text-gray-600">Disponibles</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-red-600 mb-1">
                {productsOnSale}
              </div>
              <div className="text-sm text-gray-600">En oferta</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                <Star className="w-5 h-5 mr-1 fill-current text-yellow-400" />
                5.0
              </div>
              <div className="text-sm text-gray-600">Calificación</div>
            </div>
          </div>
        )}

        {/* CTA section */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 bg-gray-900 rounded-lg p-6 text-center text-white">
            <h3 className="text-xl font-bold mb-4">
              ¿Necesitas ayuda para elegir la pieza perfecta?
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de expertos está listo para guiarte en la selección de la pieza ideal.
            </p>
            <a
              href={`https://wa.me/573146081297?text=Hola%20TIEMPO%20Y%20ESTILO,%20necesito%20asesoría%20para%20elegir%20una%20pieza`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Consultar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;