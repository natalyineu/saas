'use client';

import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
}

/**
 * Primary button component that can be used as a button or a link
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  disabled = false,
  isExternal = false,
  onClick,
}) => {
  const baseStyles = "font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-primary-purple to-primary-pink text-white shadow-sm hover:shadow-md focus:ring-primary-purple",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };
  
  const disabledStyles = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "hover:transform hover:scale-[1.02] active:scale-[0.98]";
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  
  if (href) {
    return (
      <Link 
        href={href}
        className={styles}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 