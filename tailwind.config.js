
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta exclusiva para joyería y relojería de lujo
        primary: {
          DEFAULT: '#1a1a1a', // Negro elegante para texto principal
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1a1a', // Negro puro para máximo contraste
        },
        secondary: {
          DEFAULT: '#B8860B', // Dorado más elegante y sofisticado
          50: '#FFFEF7',
          100: '#FFFCDF',
          200: '#FFF9C7',
          300: '#FFF6AF',
          400: '#FFF397',
          500: '#B8860B',
          600: '#9A7209',
          700: '#7C5E07',
          800: '#5E4A05',
          900: '#403603',
        },
        luxury: {
          DEFAULT: '#722F37', // Vino tinto elegante
          50: '#F5E6E8',
          100: '#E6C2C6',
          200: '#D499A0',
          300: '#C2707A',
          400: '#B84754',
          500: '#8B2630',
          600: '#722F37',
          700: '#5A282E',
          800: '#422125',
          900: '#2A1A1C',
        },
        whatsapp: {
          DEFAULT: '#25D366', // Verde oficial de WhatsApp
          50: '#E8F8ED',
          100: '#D1F1DB',
          200: '#A3E5B8',
          300: '#75D995',
          400: '#47CD72',
          500: '#25D366',
          600: '#1DA851',
          700: '#157D3C',
          800: '#0D5227',
          900: '#052812',
        },
        pearl: {
          DEFAULT: '#F8F6F0', // Blanco perla
          50: '#FFFFFF',
          100: '#FFFEFC',
          200: '#FFFCF8',
          300: '#FFFAF4',
          400: '#FFF8F0',
          500: '#F8F6F0',
          600: '#F0E6D6',
          700: '#E8D6BC',
          800: '#E0C6A2',
          900: '#D8B688',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 8px 32px rgba(114, 47, 55, 0.15), 0 4px 16px rgba(114, 47, 55, 0.1)',
        'gold': '0 4px 20px rgba(184, 134, 11, 0.3), 0 2px 8px rgba(184, 134, 11, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}