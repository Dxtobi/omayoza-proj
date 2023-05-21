/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      zIndex: {
        '3000': '3000',
        '6000' : '6000',
        '8000' : '8000'
      }
    },
  },
  plugins: [],
}

