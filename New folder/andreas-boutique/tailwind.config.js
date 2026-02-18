/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-soft': '#FAFAFA',
        'gray-light': '#F0F0F0',
        'gray-mid': '#6B7280',
        'gray-dark': '#2D2D2D',
        pink: '#E91E8C',
        'pink-light': '#F9A8D4',
        coral: '#FF6B6B',
        mint: '#5EEAD4',
        gold: '#FBBF24',
        violet: '#A78BFA',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
