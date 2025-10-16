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
    return { 
      hasError: true, 
      error,
      errorId: Date.now().toString(36) + Math.random().toString(36).substr(2)
    };
  }

  componentDidCatch(error, errorInfo) {
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
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isDevelopment = process.env.NODE_ENV === 'development';
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-white flex items-center justify-center p-3 sm:p-4">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg w-full">
            {/* Tarjeta principal de error */}
            <div className="glass-luxury rounded-3xl shadow-2xl p-8 text-center border border-secondary/20">
              {/* Icono de error */}
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-luxury-100 to-luxury-50 rounded-full flex items-center justify-center mb-6 border border-luxury-200">
                <AlertTriangle className="w-10 h-10 text-luxury" />
              </div>

              {/* Título y mensaje principal */}
              <h1 className="text-3xl font-bold text-primary mb-4 font-display">
                ¡Oops! Algo salió mal
              </h1>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                {this.props.errorMessage || 
                 "Se produjo un error inesperado. Nuestro equipo ha sido notificado y está trabajando para solucionarlo."}
              </p>

              {/* Botones de acción */}
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <RefreshCw className="w-5 h-5" />
                  Intentar de nuevo
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={this.handleGoBack}
                    className="glass-luxury bg-white hover:bg-gray-50 text-primary font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-secondary/20"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver
                  </button>
                  
                  <button
                    onClick={this.handleGoHome}
                    className="glass-luxury bg-white hover:bg-gray-50 text-primary font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-secondary/20"
                  >
                    <Home className="w-4 h-4" />
                    Inicio
                  </button>
                </div>

                <button
                  onClick={this.handleReload}
                  className="w-full text-gray-600 hover:text-primary text-sm py-2 transition-colors duration-200 font-semibold"
                >
                  Recargar página completa
                </button>
              </div>

              {/* ID de error para soporte */}
              {this.state.errorId && (
                <div className="mt-6 p-4 bg-gradient-to-br from-secondary-50 to-white rounded-xl border border-secondary/20">
                  <p className="text-xs text-gray-600 font-semibold">
                    ID de error: <span className="font-mono text-primary">{this.state.errorId}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Información adicional en desarrollo */}
            {isDevelopment && this.state.error && (
              <div className="mt-6 bg-luxury-50 border border-luxury-200 rounded-2xl p-4">
                <h3 className="text-sm font-bold text-luxury mb-2">
                  Información de desarrollo:
                </h3>
                <details className="text-xs">
                  <summary className="cursor-pointer text-luxury-700 hover:text-luxury font-semibold">
                    Ver detalles del error
                  </summary>
                  <div className="glass-luxury p-3 rounded-xl border border-luxury-200 mt-2">
                    <p className="font-mono text-luxury mb-2 font-semibold">
                      <strong>Error:</strong> {this.state.error.message}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="text-luxury text-xs overflow-auto max-h-32 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              </div>
            )}

            {/* Información de contacto */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2 font-semibold">
                ¿El problema persiste?
              </p>
              <a
                href={`https://wa.me/573146081297?text=Hola, estoy experimentando un error en la página web. ID de error: ${this.state.errorId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-whatsapp-600 hover:text-whatsapp-700 text-sm font-bold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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