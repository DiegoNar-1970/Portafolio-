import animations from '@midudev/tailwind-animations';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define tus colores personalizados
        brand: {
          light: '#6FCF97',
          DEFAULT: '#27AE60',
          dark: '#219653',
        },
        border: '#323f54',
        fondo: '#323f5451',
        hover: '#a395e0'
      },
    },
  },
  plugins: [animations],
}