/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      'hover-blue': '#766CF1',
    },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
    },
  },
  plugins: [],
}
