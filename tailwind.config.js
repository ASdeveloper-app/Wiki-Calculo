const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'tealwk': '#1b6372',
        'tealwkbo': '#144d58',
        'paperwk': '#f2e1bc',
        'tealwkli': '#518e96',
        'bluewk': '#76c6cf',
        'blueli': '#7cabbc',
        'pinkwk': '#f9b2a6',
        'pinkbo': '#ff7f7f',
        'rosebo': '#946c74',
        'yellowwk': '#f7aa52'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
