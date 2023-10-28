/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mainColor':  '#fff',
        'secondaryColor': '#29ca8e'
      },
      container: {
        padding: '1rem'
      }
    },
  },
  plugins: [require('daisyui')],
}
