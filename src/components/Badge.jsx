import React from 'react';

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-bold rounded-full transition-all duration-300';

  const variants = {
    primary: 'bg-ruby-gradient text-white shadow-luxury animate-gradient',
    secondary: 'bg-gold-gradient text-primary shadow-gold animate-gradient',
    success: 'bg-gradient-to-r from-whatsapp-500 to-whatsapp-600 text-white shadow-lg',
    warning: 'bg-gradient-to-r from-secondary to-luxury text-white shadow-lg',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg',
    luxury: 'bg-gradient-to-r from-luxury to-secondary text-white shadow-lg',
    jewel: 'bg-gradient-to-r from-secondary to-luxury text-white shadow-lg',
    outline: 'glass-luxury border-2 border-primary text-primary hover:bg-primary hover:text-white',
    glass: 'glass-luxury bg-white/90 border border-secondary/20 text-primary shadow-lg',
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-2 sm:py-1 sm:text-xs',
    sm: 'px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-xs',
    md: 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm',
    lg: 'px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base',
    xl: 'px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg',
  };

  const classes = [
    baseClasses,
    variants[variant],
    sizes[size],
    className
  ].join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;