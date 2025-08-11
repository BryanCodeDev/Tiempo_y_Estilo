import React, { useState, useEffect } from 'react';
import { Filter, Search, Grid, List, Package, Star, Sliders, TrendingUp, Award, ArrowRight } from 'lucide-react';
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
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.sku.toLowerCase().includes(searchTerm.toLowerCase());
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
        case 'stock':
          return Number(b.inStock) - Number(a.inStock);
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

  const productsInStock = filteredProducts.filter(p => p.inStock).length;
  const productsOnSale = filteredProducts.filter(p => p.discount).length;

  return (
    <section id="productos" className="py-8 sm:py-12 lg:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header mejorado */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
            <TrendingUp className="w-4 h-4 mr-2" />
            Productos destacados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Explora nuestro 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> catálogo</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra productos únicos con envío gratis sobre $80.000
          </p>
        </div>

        {/* Barra de filtros rediseñada */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-8">
          
          {/* Fila principal de controles */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-4">
            
            {/* Búsqueda mejorada */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar por nombre, SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <span className="text-lg font-medium">×</span>
                </button>
              )}
            </div>
            
            {/* Controles de la derecha */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              
              {/* Ordenamiento */}
              <div className="flex items-center gap-2 flex-1 sm:flex-none">
                <Sliders className="h-4 w-4 text-gray-500 hidden sm:block" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 sm:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm min-w-0"
                >
                  <option value="name">Nombre A-Z</option>
                  <option value="price-low">Precio Menor</option>
                  <option value="price-high">Precio Mayor</option>
                  <option value="discount">Descuento</option>
                  <option value="stock">Disponibilidad</option>
                </select>
              </div>

              {/* Vista */}
              <div className="hidden md:flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  title="Vista cuadrícula"
                  aria-label="Vista cuadrícula"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  title="Vista lista"
                  aria-label="Vista lista"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Botón filtros móvil */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                aria-label={showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
              >
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Categorías mejoradas */}
          <div className={`${showFilters ? 'block' : 'hidden'} sm:block transition-all duration-300`}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="text-gray-700 font-medium text-sm flex items-center flex-shrink-0">
                <Package className="w-4 h-4 mr-2" />
                Categorías:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 border ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-1.5">{category.icon}</span>
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Información de resultados */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600 gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-medium">
                {filteredProducts.length} productos
                {selectedCategory !== 'all' && (
                  <span className="ml-1 text-blue-600 font-semibold">
                    en {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                  <span>{productsInStock} disponibles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-1.5"></div>
                  <span>{productsOnSale} en oferta</span>
                </div>
              </div>
            </div>
            {(searchTerm || selectedCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm underline decoration-dotted transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Grid/Lista de productos */}
        <div className={`transition-all duration-500 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6' 
            : 'space-y-4'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${Math.min(index * 50, 500)}ms`,
                animationFillMode: 'both'
              }}
            >
              <ProductCard 
                product={product} 
                addToCart={addToCart}
                viewMode={viewMode}
              />
            </div>
          ))}
        </div>

        {/* Estado vacío rediseñado */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No encontramos productos
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
              Intenta ajustar los filtros o usar términos de búsqueda diferentes
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              Mostrar todos los productos
            </button>
          </div>
        )}

        {/* Estadísticas mejoradas */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {filteredProducts.length}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">Productos</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 group-hover:scale-110 transition-transform">
                {productsInStock}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">Disponibles</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 group-hover:scale-110 transition-transform">
                {productsOnSale}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">En oferta</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-5 h-5 mr-1 fill-current text-yellow-400" />
                5.0
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">Calificación</div>
            </div>
          </div>
        )}

        {/* CTA section rediseñada */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-center text-white relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full transform -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full transform translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-6 h-6 mr-2 text-yellow-300" />
                <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  Asesoría personalizada
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">¿Necesitas ayuda para elegir?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Nuestro equipo está listo para ayudarte a encontrar el producto perfecto. 
                Contacta por WhatsApp y recibe asesoría personalizada
              </p>
              <a
                href="https://wa.me/573008226497?text=Hola%20GoToBuy,%20necesito%20asesoría%20para%20elegir%20un%20producto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <Package className="w-4 h-4 mr-2" />
                Obtener asesoría gratuita
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out both;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Mejorar el scroll en móviles */
        @media (max-width: 640px) {
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Optimización para pantallas pequeñas */
        @media (max-width: 480px) {
          .grid-cols-1 {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductCatalog;