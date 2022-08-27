module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      screens: {
        'xx': '1000px'
      },
      colors: {
        fill:'#fff'
      }
    },
  },
  variants: {
    extend:{
      ringWidth: ['active']
    },
  },
  plugins: [],
}
