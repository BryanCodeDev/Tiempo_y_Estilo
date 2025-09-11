import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la UI de error
    return { 
      hasError: true, 
      error,
      errorId: Date.now().toString(36) + Math.random().toString(36).substr(2)
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log del error para debugging
    console.error("🚨 Error capturado por ErrorBoundary:", {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });

    this.setState({
      error,
      errorInfo
    });

    // Opcional: Enviar error a servicio de monitoreo
    if (typeof window !== 'undefined') {
      // Ejemplo con Sentry
      // if (window.Sentry) {
      //   window.Sentry.withScope((scope) => {
      //     scope.setTag('errorBoundary', true);
      //     scope.setContext('errorInfo', errorInfo);
      //     window.Sentry.captureException(error);
      //   });
      // }

      // O enviar a tu propia API de logs
      // fetch('/api/log-error', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     error: error.message,
      //     stack: error.stack,
      //     url: window.location.href,
      //     timestamp: new Date().toISOString()
      //   })
      // }).catch(() => {}); // Silenciar errores de logging
    }
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.handleGoHome();
    }
  };

  render() {
    if (this.state.hasError) {
      // Si hay un componente fallback personalizado, usarlo
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isDevelopment = process.env.NODE_ENV === 'development';
      
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            {/* Tarjeta principal de error */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              {/* Icono de error */}
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>

              {/* Título y mensaje principal */}
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Oops! Algo salió mal
              </h1>
              
              <p className="text-gray-600 mb-8">
                {this.props.errorMessage || 
                 "Se produjo un error inesperado. Nuestro equipo ha sido notificado y está trabajando para solucionarlo."}
              </p>

              {/* Botones de acción */}
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Intentar de nuevo
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={this.handleGoBack}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver
                  </button>
                  
                  <button
                    onClick={this.handleGoHome}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Inicio
                  </button>
                </div>

                <button
                  onClick={this.handleReload}
                  className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors duration-200"
                >
                  Recargar página completa
                </button>
              </div>

              {/* ID de error para soporte */}
              {this.state.errorId && (
                <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">
                    ID de error: <span className="font-mono">{this.state.errorId}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Información adicional en desarrollo */}
            {isDevelopment && this.state.error && (
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-800 mb-2">
                  Información de desarrollo:
                </h3>
                <details className="text-xs">
                  <summary className="cursor-pointer text-red-700 hover:text-red-900 mb-2">
                    Ver detalles del error
                  </summary>
                  <div className="bg-white p-3 rounded border">
                    <p className="font-mono text-red-600 mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="text-red-500 text-xs overflow-auto max-h-32 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              </div>
            )}

            {/* Información de contacto */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">
                ¿El problema persiste?
              </p>
              <a
                href="https://wa.me/573508470735?text=Hola, estoy experimentando un error en la página web. ID de error: {this.state.errorId}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Contactar soporte
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  errorMessage: PropTypes.string,
  onError: PropTypes.func
};

ErrorBoundary.defaultProps = {
  errorMessage: null,
  onError: () => {}
};

export default ErrorBoundary;