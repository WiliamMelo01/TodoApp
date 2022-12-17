/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: '#333333'
        },
      },
      fontFamily: {
        montserrat: 'Montserrat',
        raleway: 'Raleway'
      }
    },
  },
  plugins: [],
}