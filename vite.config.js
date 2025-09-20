import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Configuración optimizada para SPA routing y SEO
  build: {
    // Generar manifest para mejor cache busting
    manifest: true,
    // Optimizar chunks para mejor carga
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk para librerías principales
          vendor: ['react', 'react-dom'],
          // UI chunk para componentes de interfaz
          ui: ['lucide-react'],
          // Utils chunk para utilidades
          utils: []
        },
        // Nombres de archivos optimizados para SEO
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimizar para producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  // Configuración del servidor de desarrollo optimizada
  server: {
    port: 3000,
    host: true, // Permitir conexiones externas
    // Configuración SPA fallback
    historyApiFallback: true,
    // Middleware para SPA routing
    middlewareMode: false
  },

  // Preview server optimizado
  preview: {
    port: 3000,
    host: true,
    // Configuración SPA fallback para preview
    historyApiFallback: true
  },

  // Base URL para producción
  base: '/',

  // Optimización de dependencias mejorada
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react'
    ],
    // Excluir dependencias problemáticas
    exclude: []
  },

  // Configuración específica para React
  esbuild: {
    // Mantener JSX para React
    jsx: 'automatic',
    // Optimizar para producción
    drop: ['console', 'debugger']
  },

  // Configuración para mejor SEO
  define: {
    // Variables de entorno para SEO
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0')
  }
})