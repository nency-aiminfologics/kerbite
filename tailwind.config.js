/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/sections/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Add this if your files are in src/
  ],
  theme: {
    container: {
      center: true,
      DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {

      colors: {
      primary: '#1B1A1F',
      step1: '#1DD673',
      step2: '#FF733D',
      step3: '#FDCB26',
      textGray: '#7D7C81',
      iconText: '#111827',
    },
    
      boxShadow: {
        'custom': '0px 4px 30px #D8D8D866', // #D8D8D866
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-150px) scale(0.8) rotate(var(--initial-rotate))', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1) rotate(var(--initial-rotate))', opacity: '1' },
        },
      },
      animation: {
        fall: 'fall 1.5s ease forwards',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
        'chivo-mono': ['Chivo Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};