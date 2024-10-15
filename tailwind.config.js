/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Klik', 'sans-serif'],
      },
      colors: {
        primary: '#A1F0E7'
      }
    },
  },
  plugins: [],
};
