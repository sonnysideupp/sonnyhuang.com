/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    
    extend: {
      width: {
        '4xl': '45rem',
        '5xl': '50rem'
      },
      backgroundColor:{
        'tan': "#e6e6e6",
        'dark': '#181818',
        'darkGray': '#1f1f1f'

      }
    },
    colors: {
      lightYellow: '#fcd37a',
      link: '#4e5dff',
      lightGray: "#bbb",
      ...colors
    },
  },
  plugins: [],
}

