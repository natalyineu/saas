/**
 * Theme configuration for the application
 * This centralizes all theme values for easy reference and modification
 */

export const theme = {
  colors: {
    primary: {
      purple: 'rgba(63,94,251,1)',
      pink: 'rgba(252,70,107,1)',
    },
    text: {
      primary: '#2E2E2E',
      secondary: '#4A4A4A',
      muted: '#6B7280',
      light: '#FFFFFF',
    },
    background: {
      light: '#FFFFFF',
      soft: 'rgba(63,94,251,0.05), rgba(252,70,107,0.05)',
      dark: '#111827',
    },
    states: {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#3B82F6',
    },
  },
  spacing: {
    section: {
      desktop: '6rem',
      mobile: '4rem',
    },
    container: {
      padding: {
        desktop: '1.5rem',
        mobile: '1rem',
      },
    },
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}; 