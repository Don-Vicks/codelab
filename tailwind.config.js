/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Violet 500
          600: '#7c3aed', // Violet 600
          700: '#6cd28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        surface: {
          primary: '#09090b', // Zinc 950
          secondary: '#18181b', // Zinc 900
          tertiary: '#27272a', // Zinc 800
          card: '#18181b', // Zinc 900
          'card-hover': '#27272a', // Zinc 800
          code: '#0d1117', // GitHub Dark (Keep for code)
          editor: '#0d1117',
          output: '#09090b',
          border: '#27272a', // Zinc 800
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease both',
        'spin-slow': 'spin 0.6s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
