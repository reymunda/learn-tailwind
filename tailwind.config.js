module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Open Sans"']
      },
      colors: {
        subtleGrey: '#dedede',
        black: '#1C1C1C'
      },
      animation: {
        bounce: 'bounce 5s infinite'
      }
    }
  },
  plugin: []
} 