/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}"
           ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "btnBg":"#1d4ed8"
    },
    screens: {
      'sm': { 'max': '850px' },
      'md': { 'max': '1000px' },
      'lg': { 'max': '1300px' },
      'xl': { 'max': '1550px' }
    },
  },
  plugins: [],
}
