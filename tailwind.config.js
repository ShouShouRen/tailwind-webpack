module.exports = {
  purge: ['./src/**/*.html','./src/**/*.js'],
  // media 是系統控制 class是自訂
  // purge: {
    // content: ['./src/**/*.html'],
    // 安全名單一定會被打包出去
  //   safelist: [
  //     'text-center'
  //   ]
  // },
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
