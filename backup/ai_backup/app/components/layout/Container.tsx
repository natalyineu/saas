import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  narrow?: boolean;
}

/**
 * Container component to maintain consistent width and padding throughout the site
 */
const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  narrow = false,
  ...props
}) => {
  return (
    <Component
      className={`container mx-auto px-4 md:px-6 ${narrow ? 'max-w-5xl' : 'max-w-7xl'} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container; 