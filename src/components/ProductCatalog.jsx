import React, { useState, useEffect } from 'react';
import { Filter, Search, Grid, List, Package, Star, Sliders, TrendingUp, Award, ArrowRight } from 'lucide-react';
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

  // Actualizar URL con parámetros de búsqueda para SEO
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

    // Actualizar URL sin recargar la página
    if (window.location.search !== `?${params.toString()}` || window.location.pathname !== '/') {
      window.history.replaceState(null, '', newUrl);
    }
  }, [selectedCategory, searchTerm, sortBy]);

  // Cargar parámetros de URL al inicializar
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
    
    // Limpiar URL
    window.history.replaceState(null, '', '/');
  };

  const productsInStock = filteredProducts.filter(p => p.inStock).length;
  const productsOnSale = filteredProducts.filter(p => p.discount).length;

  // Función para manejar la navegación a productos con SEO
  const handleProductClick = (product) => {
    if (navigateToProduct) {
      navigateToProduct(product);
    }
  };

  return (
    <section id="productos" className="py-8 sm:py-12 lg:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con SEO optimizado */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-3">
            <TrendingUp className="w-4 h-4 mr-2" />
            Productos destacados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
            Explora nuestro 
            <span className="text-gray-700"> catálogo</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra productos únicos con envío GRATIS incluido siempre. 
            {filteredProducts.length > 0 && (
              <span className="block mt-2 text-sm">
                <strong>{filteredProducts.length}</strong> productos disponibles
                {selectedCategory !== 'all' && (
                  <span> en <strong>{categories.find(c => c.id === selectedCategory)?.name}</strong></span>
                )}
              </span>
            )}
          </p>
        </div>

        {/* Barra de filtros SEO-friendly */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 mb-8 shadow-sm">
          
          {/* Búsqueda principal con SEO */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5" />
            <input
              type="text"
              placeholder={`Buscar en ${products.length} productos...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-black transition-all duration-300 text-base bg-white text-black placeholder-gray-600 font-medium"
              aria-label="Buscar productos por nombre, descripción o código SKU"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black transition-colors bg-gray-100 hover:bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
                aria-label="Limpiar búsqueda"
              >
                <span className="text-sm font-bold">×</span>
              </button>
            )}
          </div>

          {/* Controles principales */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-4">
            
            {/* Ordenamiento */}
            <div className="flex items-center gap-3">
              <Sliders className="h-5 w-5 text-black" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black bg-white text-black text-base font-medium min-w-0 flex-1 sm:flex-none sm:w-48"
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
            <div className="flex items-center gap-4">
              {/* Vista */}
              <div className="hidden md:flex bg-gray-100 border-2 border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-white border-2 border-black text-black shadow-sm' 
                      : 'text-gray-600 hover:text-black border-2 border-transparent'
                  }`}
                  title="Vista cuadrícula"
                  aria-label="Cambiar a vista cuadrícula"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-md transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-white border-2 border-black text-black shadow-sm' 
                      : 'text-gray-600 hover:text-black border-2 border-transparent'
                  }`}
                  title="Vista lista"
                  aria-label="Cambiar a vista lista"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Botón filtros */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border-2 ${
                  showFilters 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-black hover:bg-black hover:text-white'
                }`}
                aria-label={showFilters ? 'Ocultar categorías' : 'Mostrar categorías'}
                aria-expanded={showFilters}
              >
                <Filter className="h-5 w-5" />
                <span>Categorías</span>
              </button>
            </div>
          </div>

          {/* Panel de categorías expandido con SEO */}
          <div className={`transition-all duration-500 overflow-hidden ${
            showFilters ? 'max-h-96 opacity-100 border-t-2 border-gray-200 pt-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-black" />
                <span className="text-black font-semibold text-lg">Filtrar por categoría:</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-3" role="group" aria-label="Filtros de categoría">
                {categories.map(category => {
                  const productCount = category.id === 'all' 
                    ? products.length 
                    : products.filter(p => p.category === category.id).length;
                  
                  const IconComponent = category.icon;
                    
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border-2 text-center hover:scale-105 ${
                        selectedCategory === category.id
                          ? 'bg-black text-white border-black shadow-lg'
                          : 'bg-white text-black border-gray-300 hover:border-black hover:bg-gray-50'
                      }`}
                      aria-label={`Filtrar por ${category.name} (${productCount} productos)`}
                    >
                      <IconComponent className="w-4 h-4 mx-auto mb-2" />
                      <span className="whitespace-nowrap block">{category.name}</span>
                      <span className="block text-xs mt-1 opacity-75">({productCount})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Información de resultados mejorada con SEO */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-6 border-t-2 border-gray-200 gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <span className="font-bold text-lg text-black">
                {filteredProducts.length} productos encontrados
                {selectedCategory !== 'all' && (
                  <span className="ml-2 text-gray-700 font-semibold">
                    en {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
              </span>
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <span className="font-medium text-black">{productsInStock} disponibles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                  <span className="font-medium text-black">{productsOnSale} en oferta</span>
                </div>
              </div>
            </div>
            {(searchTerm || selectedCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-black hover:text-gray-700 font-bold underline decoration-2 underline-offset-2 transition-colors px-4 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white"
                aria-label="Limpiar todos los filtros de búsqueda"
              >
                Limpiar todos los filtros
              </button>
            )}
          </div>
        </div>

        {/* Grid responsivo mejorado con SEO */}
        <div
          className={`transition-all duration-500 ${
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr'
              : 'space-y-6'
          }`}
          role="main"
          aria-label={`Lista de ${filteredProducts.length} productos`}
        >
          {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className="opacity-0 animate-fade-in w-full"
              style={{ 
                animationDelay: `${Math.min(index * 100, 500)}ms`,
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

        {/* Estado vacío rediseñado con SEO */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white border-2 border-gray-200 rounded-xl" role="status">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              No encontramos productos
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
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
            <div className="space-y-4">
              <button
                onClick={clearFilters}
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 border-2 border-black text-lg"
              >
                Mostrar todos los productos
              </button>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <p className="text-sm text-gray-600">¿Buscas algo específico?</p>
                <a
                  href="https://wa.me/573508470735?text=Hola%20GoToBuy,%20estoy%20buscando%20un%20producto%20específico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold text-sm underline"
                >
                  Contáctanos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas mejoradas con SEO */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center hover:border-black transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform">
                {filteredProducts.length}
              </div>
              <div className="text-gray-600 text-base font-medium">Total Productos</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center hover:border-green-600 transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                {productsInStock}
              </div>
              <div className="text-gray-600 text-base font-medium">Disponibles</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center hover:border-red-600 transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">
                {productsOnSale}
              </div>
              <div className="text-gray-600 text-base font-medium">En Oferta</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center hover:border-yellow-500 transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 mr-1 fill-current text-yellow-500" />
                5.0
              </div>
              <div className="text-gray-600 text-base font-medium">Calificación</div>
            </div>
          </div>
        )}

        {/* CTA section rediseñada con SEO */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 bg-black rounded-xl p-8 text-center text-white border-2 border-black relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-6 h-6 mr-2 text-yellow-400" />
                <span className="text-sm font-bold bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Asesoría personalizada gratuita
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">¿Necesitas ayuda para elegir?</h3>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
                Nuestro equipo está listo para ayudarte a encontrar el producto perfecto. 
                Contacta por WhatsApp y recibe asesoría personalizada sobre cualquiera de nuestros {filteredProducts.length} productos con envío GRATIS incluido
              </p>
              <a
                href={`https://wa.me/573508470735?text=Hola%20GoToBuy,%20necesito%20asesoría%20para%20elegir%20un%20producto${searchTerm ? `%20relacionado%20con%20"${searchTerm}"` : ''}${selectedCategory !== 'all' ? `%20en%20la%20categoría%20"${categories.find(c => c.id === selectedCategory)?.name}"` : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 border-2 border-white text-lg"
              >
                <Package className="w-5 h-5 mr-2" />
                Obtener asesoría gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        )}

        {/* Schema.org structured data para la página de productos */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `Productos ${selectedCategory !== 'all' ? `- ${categories.find(c => c.id === selectedCategory)?.name}` : 'Premium GoToBuy'}`,
            "description": `Encuentra ${filteredProducts.length} productos premium en GoToBuy${selectedCategory !== 'all' ? ` en la categoría ${categories.find(c => c.id === selectedCategory)?.name}` : ''}. Envío GRATIS incluido siempre.`,
            "url": window.location.href,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": filteredProducts.length,
              "itemListElement": filteredProducts.slice(0, 10).map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.name,
                  "description": product.description,
                  "sku": product.sku,
                  "image": `https://gotobuyy.com${product.image}`,
                  "offers": {
                    "@type": "Offer",
                    "price": product.price,
                    "priceCurrency": "COP",
                    "availability": product.inStock ? "InStock" : "OutOfStock"
                  }
                }
              }))
            }
          })}
        </script>
      </div>
    </section>
  );
};

export default ProductCatalog;