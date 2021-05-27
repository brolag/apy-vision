module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        700: '#5F99F7'
      },
      purple: {
        700: "#6B57B8"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
