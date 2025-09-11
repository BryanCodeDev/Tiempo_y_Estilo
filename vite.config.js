import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Configuración para SPA routing
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react']
        }
      }
    }
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    historyApiFallback: true, // Para manejar rutas SPA
    fallback: 'index.html'
  },
  
  // Preview server configuration (para testing de build)
  preview: {
    port: 3000,
    historyApiFallback: true,
    fallback: 'index.html'
  },
  
  // Base URL para producción
  base: '/',
  
  // Optimización de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
})