/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,vue}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1366px',
    },
     colors: {
      'white': '#fff',
      'dark': '#19191A',
      'dark-light': '#232324',
      'gray': '#F6F7F8',
      'blue': '#00103D',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
