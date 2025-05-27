/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
      './components/**/*.{js,ts,jsx,tsx}',
     './app/sections/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
     
    ],
    
    theme: {
         container: {
    center: true,
},
      screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      },
      extend: {
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