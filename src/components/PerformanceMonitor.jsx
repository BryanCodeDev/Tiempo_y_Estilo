import React, { useState, useEffect } from 'react';
import { BarChart3, Image, Database, Trash2, RefreshCw } from 'lucide-react';
import { useProductService } from '../services/productService';
import { useImageOptimizer } from '../services/imageOptimizer';

const PerformanceMonitor = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState(null);
  const { getPerformanceStats: getProductStats, clearCache: clearProductCache } = useProductService();
  const { getPerformanceStats: getImageStats, clearCache: clearImageCache } = useImageOptimizer();

  // Actualizar estadísticas cada 5 segundos
  useEffect(() => {
    const updateStats = () => {
      const productStats = getProductStats();
      const imageStats = getImageStats();

      setStats({
        ...productStats,
        ...imageStats,
        timestamp: new Date().toLocaleTimeString()
      });
    };

    updateStats();
    const interval = setInterval(updateStats, 5000);

    return () => clearInterval(interval);
  }, [getProductStats, getImageStats]);

  // Función para limpiar todos los cachés
  const handleClearAllCaches = () => {
    if (confirm('¿Estás seguro de que quieres limpiar todos los cachés? Esto puede afectar el rendimiento temporalmente.')) {
      clearProductCache();
      clearImageCache();
      alert('Cachés limpiados correctamente');
    }
  };

  // Función para ejecutar test del píxel de Facebook
  const handleTestFacebookPixel = () => {
    if (typeof window !== 'undefined' && window.testFacebookPixel) {
      window.testFacebookPixel();
      alert('Test del píxel ejecutado. Revisa la consola del navegador.');
    } else {
      alert('Función de test no disponible');
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className={`fixed bottom-4 left-4 bg-gray-900 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50 ${className}`}
        title="Monitor de rendimiento"
      >
        <BarChart3 className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 left-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm z-50 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Monitor de Rendimiento
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>

      {/* Estadísticas */}
      {stats && (
        <div className="space-y-3 mb-4">
          {/* Imágenes */}
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <Image className="w-4 h-4 text-blue-500" />
            <div className="flex-1">
              <div className="text-sm font-medium">Imágenes en caché</div>
              <div className="text-xs text-gray-600">
                {stats.cachedImages || 0} imágenes • {stats.cacheHitRate?.toFixed(1) || 0}% éxito
              </div>
            </div>
          </div>

          {/* Productos */}
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <Database className="w-4 h-4 text-green-500" />
            <div className="flex-1">
              <div className="text-sm font-medium">Productos en caché</div>
              <div className="text-xs text-gray-600">
                {stats.cachedProducts || 0} productos • {stats.loadingStates || 0} estados
              </div>
            </div>
          </div>

          {/* Timestamp */}
          <div className="text-xs text-gray-500 text-center">
            Última actualización: {stats.timestamp}
          </div>
        </div>
      )}

      {/* Botones de acción */}
      <div className="space-y-2">
        <button
          onClick={handleTestFacebookPixel}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium transition-colors flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Test Facebook Pixel
        </button>

        <button
          onClick={handleClearAllCaches}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Limpiar cachés
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          💡 Las imágenes se cargan automáticamente cuando son visibles
        </div>
        <div className="text-xs text-gray-500">
          📦 Los productos se almacenan en caché para mejorar el rendimiento
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;