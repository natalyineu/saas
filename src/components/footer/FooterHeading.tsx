import React, { ReactNode } from 'react';

interface FooterHeadingProps {
  children: ReactNode;
  icon?: ReactNode;
}

export default function FooterHeading({ children, icon }: FooterHeadingProps) {
  return (
    <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center relative text-white">
      {icon && (
        <span className="mr-2 h-4 w-4 md:h-5 md:w-5 text-blue-400">
          {icon}
        </span>
      )}
      {children}
      <div className="w-8 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink absolute -bottom-2 left-0"></div>
    </h4>
  );
} 