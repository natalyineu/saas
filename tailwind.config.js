/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-purple': 'rgba(63,94,251,1)',
        'primary-pink': 'rgba(252,70,107,1)',
        'primary-blue': 'rgba(0,142,255,1)',
        'gradient-start': 'rgba(63,94,251,1)',
        'gradient-end': 'rgba(252,70,107,1)',
        'text': '#2E2E2E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(90deg, rgba(63,94,251,0.03) 0%, rgba(252,70,107,0.03) 100%)',
        'bold-gradient': 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            a: {
              color: theme('colors.primary-purple'),
              '&:hover': {
                color: theme('colors.primary-pink'),
              },
            },
            h1: {
              color: theme('colors.text'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.text'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.text'),
              fontWeight: '600',
            },
            strong: {
              color: theme('colors.text'),
              fontWeight: '600',
            },
          },
        },
      }),
      animation: {
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'draw': 'draw 1.5s ease-in-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'ping-once': 'ping 1s cubic-bezier(0, 0, 0.2, 1) forwards',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': {
            opacity: 0.2,
            transform: 'scale(0.95)',
          },
          '50%': {
            opacity: 0.3,
            transform: 'scale(1.05)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        draw: {
          '0%': {
            'stroke-dashoffset': 500,
          },
          '100%': {
            'stroke-dashoffset': 0,
          },
        },
        'spin-reverse': {
          'to': {
            transform: 'rotate(-360deg)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(63, 94, 251, 0.5)',
        'glow-pink': '0 0 15px rgba(252, 70, 107, 0.5)',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 