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
    success: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg',
    luxury: 'bg-gradient-to-r from-luxury to-jewel text-white shadow-lg',
    jewel: 'bg-gradient-to-r from-jewel to-luxury text-white shadow-lg',
    outline: 'glass-luxury border-2 border-primary text-primary hover:bg-primary hover:text-white',
    glass: 'glass-luxury bg-white/90 border border-secondary/20 text-primary shadow-lg',
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
    xl: 'px-6 py-3 text-lg',
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