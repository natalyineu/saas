'use client';

import React, { ReactNode } from 'react';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

/**
 * A custom hook that provides a higher-order component with ErrorBoundary
 * allowing functional components to easily use error boundaries
 * 
 * @returns A function that wraps components with ErrorBoundary
 */
export function useErrorBoundary() {
  /**
   * Wraps a component or JSX element with an ErrorBoundary
   * 
   * @param children - The component or JSX to wrap
   * @param fallback - Optional custom fallback UI to show when an error occurs
   * @returns The wrapped component with error boundary
   */
  const withErrorBoundary = (children: ReactNode, fallback?: ReactNode) => {
    return (
      <ErrorBoundary fallback={fallback}>
        {children}
      </ErrorBoundary>
    );
  };

  return { withErrorBoundary };
}

/**
 * Higher-order component that wraps a component with an ErrorBoundary
 * 
 * @param Component - The component to wrap
 * @param fallback - Optional custom fallback UI to show when an error occurs
 * @returns A wrapped component with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  const WithErrorBoundaryComponent = (props: P) => {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

  // Set display name for better debugging
  const displayName = Component.displayName || Component.name || 'Component';
  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${displayName})`;

  return WithErrorBoundaryComponent;
} 