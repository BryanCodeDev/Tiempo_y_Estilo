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
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
    none: 'p-0',
  };

  const shadowClasses = {
    sm: 'shadow-md',
    md: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl',
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