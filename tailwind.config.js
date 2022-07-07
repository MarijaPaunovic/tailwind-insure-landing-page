/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/script.js'
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      screens: {
        xs: '375px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1536px',
      },
      fontFamily: {
        title: ['DM Serif Display', 'serif'],
        body: ['Karla', 'sans-serif']
      },
      colors: {
        darkViolet: 'hsl(256, 26% 20%)',
        grayishBlue: 'hsl(216, 30%, 68%)',
        veryDarkViolet: 'hsl(270, 9%, 17%)',
        darkGrayishViolet: 'hsl(273, 4%, 51%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      },
      backgroundImage: {
        'menu-pattern': "url('./images/bg-pattern-mobile-nav.svg')",
        'intro-left-mobile-pattern': "url('./images/bg-pattern-intro-left-mobile.svg')",
        'intro-right-mobile-pattern': "url('./images/bg-pattern-intro-right-mobile.svg')",
        'how-we-work-mobile-pattern': "url('./images/bg-pattern-how-we-work-mobile.svg')",
        'footer-mobile-pattern': "url('./images/bg-pattern-footer-mobile.svg')",
        'footer-desktop-pattern': "url('./images/bg-pattern-footer-desktop.svg')",
      }
    },
  },
  plugins: [],
}
