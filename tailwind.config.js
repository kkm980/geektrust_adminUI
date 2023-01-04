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
  },
  plugins: [],
}
