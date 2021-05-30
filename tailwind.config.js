module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#ffffff',
      green: {
        500: '#67A143'
      },
      gray: {
        100: '#F6F7F8',
        300: '#E9EBEE',
        500: "#8D98AA",
        800: '#1B3155',
        900: '#071B3C'
      },
      blue: {
        700: '#06B5DD'
      },
      red: {
        700: '#EF4D4D'
      },
      purple: {
        700: "#6B57B8",
        900: "#5C2F97"
      },
      solitude: {
        100: "#E8EAEE"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
