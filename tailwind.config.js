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
          DEFAULT: '#D4AF37', // Dorado elegante mantenido
          50: '#FFFEF7',
          100: '#FFFCDF',
          200: '#FFF9C7',
          300: '#FFF6AF',
          400: '#FFF397',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9C7A1A',
          800: '#806015',
          900: '#644710',
        },
        luxury: {
          DEFAULT: '#8B1538', // Rojo burdeos más sofisticado
          50: '#FFEFF1',
          100: '#FFD6DB',
          200: '#FFB8C1',
          300: '#FF9AA7',
          400: '#FF7C8D',
          500: '#E91E63',
          600: '#8B1538',
          700: '#6B1028',
          800: '#4B0A18',
          900: '#2B0508',
        },
        jewel: {
          DEFAULT: '#2C1810', // Marrón chocolate elegante
          50: '#FAF7F5',
          100: '#F5EFE8',
          200: '#EBDDD1',
          300: '#E1CBBA',
          400: '#D7B9A3',
          500: '#C4997A',
          600: '#2C1810',
          700: '#241209',
          800: '#1C0C06',
          900: '#140603',
        },
        accent: {
          DEFAULT: '#C9A961', // Dorado rosado premium
          50: '#FFFAF0',
          100: '#FFF5E0',
          200: '#FFECC0',
          300: '#FFE3A0',
          400: '#FFDA80',
          500: '#C9A961',
          600: '#A68A4A',
          700: '#836B33',
          800: '#604C1C',
          900: '#3D2D05',
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
        'luxury': '0 8px 32px rgba(139, 0, 0, 0.15), 0 4px 16px rgba(139, 0, 0, 0.1)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3), 0 2px 8px rgba(212, 175, 55, 0.2)',
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