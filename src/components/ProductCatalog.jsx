import React, { useState, useEffect } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const ProductCatalog = ({ addToCart }) => {
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
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sorting
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
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('name');
  };

  return (
    <section id="productos" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            🛍️ Catálogo completo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Productos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra todo lo que necesitas para tu hogar con la mejor calidad y los mejores precios
          </p>
        </div>

        {/* Filtros y controles */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-8 border border-gray-100">
          {/* Búsqueda y controles principales */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Barra de búsqueda */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            
            {/* Controles de vista y ordenamiento */}
            <div className="flex items-center gap-3">
              {/* Ordenamiento */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="name">Nombre A-Z</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="discount">Mayor Descuento</option>
              </select>

              {/* Vista */}
              <div className="hidden sm:flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-white shadow-md text-emerald-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-white shadow-md text-emerald-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Botón filtros móvil */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg"
              >
                <Filter className="h-4 w-4" />
                Filtros
              </button>
            </div>
          </div>

          {/* Categorías */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-700 font-medium text-sm">Categorías:</span>
              <div className="flex-1 flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-1">{category.icon}</span>
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Información de resultados */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                Mostrando {filteredProducts.length} de {products.length} productos
                {selectedCategory !== 'all' && (
                  <span className="ml-2 text-emerald-600">
                    en "{categories.find(c => c.id === selectedCategory)?.name}"
                  </span>
                )}
              </span>
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <div className={`transition-all duration-500 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8' 
            : 'space-y-4'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard 
                product={product} 
                addToCart={addToCart}
                viewMode={viewMode}
              />
            </div>
          ))}
        </div>

        {/* Estado vacío */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              No encontramos productos que coincidan con tu búsqueda. 
              Intenta con otros términos o explora nuestras categorías.
            </p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver todos los productos
            </button>
          </div>
        )}

        {/* Estadísticas */}
        {filteredProducts.length > 0 && (
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                {filteredProducts.length}
              </div>
              <div className="text-gray-600 text-sm">Productos disponibles</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {filteredProducts.filter(p => p.discount).length}
              </div>
              <div className="text-gray-600 text-sm">En oferta</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600 text-sm">Categorías</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 text-sm">Calidad garantizada</div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ProductCatalog;