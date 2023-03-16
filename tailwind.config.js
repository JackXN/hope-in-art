/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },


  fontFamily: {
    poppins: ['Poppins']
  },

  plugins: [require('@tailwindcss/aspect-ratio'),require('flowbite/plugin')],
}