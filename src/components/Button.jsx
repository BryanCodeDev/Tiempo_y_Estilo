import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:transform-none disabled:opacity-50';

  const variants = {
    primary: 'bg-ruby-gradient hover:opacity-90 text-white shadow-luxury hover:shadow-2xl focus:ring-primary/50 animate-gradient',
    secondary: 'bg-gold-gradient hover:opacity-90 text-primary shadow-gold hover:shadow-2xl focus:ring-secondary/50 animate-gradient',
    outline: 'glass-luxury border-2 border-primary text-primary hover:bg-ruby-gradient hover:text-white hover:border-transparent shadow-lg focus:ring-primary/50',
    ghost: 'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary/50',
    luxury: 'bg-gradient-to-br from-luxury to-secondary hover:from-luxury/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-2xl focus:ring-luxury/50',
    jewel: 'bg-gradient-to-br from-secondary to-luxury hover:from-secondary/90 hover:to-luxury/90 text-white shadow-lg hover:shadow-xl focus:ring-secondary/50',
    success: 'bg-gradient-to-r from-whatsapp-500 to-whatsapp-600 hover:from-whatsapp-600 hover:to-whatsapp-500 text-white shadow-lg hover:shadow-xl focus:ring-whatsapp-500/50',
  };

  const sizes = {
    sm: 'px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm',
    md: 'px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
    xl: 'px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl',
  };

  const classes = [
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className
  ].join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;