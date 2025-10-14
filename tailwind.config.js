/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en joyería de lujo
        primary: {
          DEFAULT: '#8B0000',
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#CC0000',
          600: '#8B0000',
          700: '#660000',
          800: '#4D0000',
          900: '#330000',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          50: '#FBF8E8',
          100: '#F7F1D1',
          200: '#EFE3A3',
          300: '#E7D575',
          400: '#DFC747',
          500: '#D4AF37',
          600: '#B8982C',
          700: '#8A7221',
          800: '#5C4C16',
          900: '#2E260B',
        },
        luxury: {
          DEFAULT: '#800020',
          50: '#FFE5EB',
          100: '#FFCCD7',
          200: '#FF99AF',
          300: '#FF6687',
          400: '#FF335F',
          500: '#CC0033',
          600: '#800020',
          700: '#660019',
          800: '#4D0013',
          900: '#33000D',
        },
        jewel: {
          DEFAULT: '#4A0E4E',
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A0E4E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(139, 0, 0, 0.3)',
        'gold': '0 10px 40px -10px rgba(212, 175, 55, 0.3)',
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