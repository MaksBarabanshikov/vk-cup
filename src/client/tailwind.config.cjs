/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1366px',
    },
     colors: {
      'dark': '#232324',
      'gray': '#F6F7F8',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
