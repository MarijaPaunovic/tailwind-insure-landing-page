/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/script.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['DM Serif Display', 'serif'],
        body: ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}
