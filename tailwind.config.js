/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xsm': '500px',
      },

      colors: {
        "DesaturatedRed": "#ce9797",
        "SoftRed": "#f96262"
      }
    },
  },
  plugins: [],
}

