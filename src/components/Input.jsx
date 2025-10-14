import React from 'react';

const Input = ({
  label,
  error,
  helperText,
  variant = 'default',
  size = 'md',
  fullWidth = true,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 glass-luxury focus:outline-none focus:ring-0';

  const variants = {
    default: 'border-secondary/30 focus:border-secondary hover:border-secondary/50',
    success: 'border-emerald-200/50 focus:border-emerald-500/50',
    error: 'border-red-200/50 focus:border-red-500/50',
  };

  const sizes = {
    sm: 'px-3 py-2.5 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  const inputClasses = [
    baseClasses,
    variants[variant],
    sizes[size],
    error ? 'border-red-300 focus:border-red-500' : '',
    className
  ].join(' ');

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-bold text-primary mb-2 font-display">
          {label}
        </label>
      )}

      <input
        className={inputClasses}
        {...props}
      />

      {error && (
        <p className="mt-2 text-sm text-red-600 font-semibold flex items-center">
          <span className="mr-1">⚠️</span>
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-600 font-medium">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;