import React from 'react';
import Container from './Container';

type BackgroundType = 'default' | 'soft-gradient' | 'white' | 'dark';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: BackgroundType;
  containerClassName?: string;
  narrow?: boolean;
}

/**
 * Section component for consistent section spacing and styling
 */
const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'default',
  containerClassName = '',
  narrow = false,
}) => {
  const backgroundClasses = {
    default: '',
    'soft-gradient': 'bg-soft-gradient',
    white: 'bg-white',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <Container className={containerClassName} narrow={narrow}>
        {children}
      </Container>
    </section>
  );
};

export default Section; 