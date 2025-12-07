/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        church: {
          sage: '#6E9896',
          'sage-light': '#8FB3B1',
          'sage-dark': '#5A7D7B',
          yellow: '#FEC76F',
          'yellow-light': '#FFD28C',
          'yellow-dark': '#E5B25E',
          gray: '#888F92',
          'gray-light': '#A5ABAE',
          'gray-dark': '#6B7075',
          white: '#FFFFFF',
          cream: '#FFF8DC'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Quicksand', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px - small labels, captions
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px - secondary text
        'base': ['1.25rem', { lineHeight: '1.6' }],    // 20px - body text (matches body font-size)
        'lg': ['1.375rem', { lineHeight: '1.6' }],     // 22px - slightly larger body text
        'xl': ['1.5rem', { lineHeight: '1.5' }],       // 24px - lead text
        '2xl': ['1.75rem', { lineHeight: '1.4' }],     // 28px - small headings
        '3xl': ['2rem', { lineHeight: '1.3' }],        // 32px - section subheadings
        '4xl': ['2.5rem', { lineHeight: '1.2' }],      // 40px - section headings
        '5xl': ['3rem', { lineHeight: '1.1' }],        // 48px - page headings
        '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px - hero headings
        '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px - large hero
        '8xl': ['6rem', { lineHeight: '1' }],          // 96px - display
        '9xl': ['8rem', { lineHeight: '1' }],          // 128px - jumbo display
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}