import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'lg',
  shadow = 'lg',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-3xl transition-all duration-300 border border-gray-200 relative overflow-hidden';

  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 hover:border-gray-300' : '';

  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-10',
    none: 'p-0',
  };

  const shadowClasses = {
    sm: 'shadow-sm sm:shadow-md',
    md: 'shadow-md sm:shadow-lg',
    lg: 'shadow-lg sm:shadow-xl',
    xl: 'shadow-xl sm:shadow-2xl',
    none: 'shadow-none',
  };

  const classes = [
    baseClasses,
    hoverClasses,
    paddingClasses[padding],
    shadowClasses[shadow],
    className
  ].join(' ');

  return (
    <div className={classes} {...props}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;