/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000814', // Deep black for backgrounds
          gold: '#FFD700', // Vibrant gold for accents
          'gold-light': '#FFE55C', // Lighter gold for hover states
          'black-light': '#1a1a2e', // Lighter black for cards
        },
      },
    },
  },
  plugins: [],
};