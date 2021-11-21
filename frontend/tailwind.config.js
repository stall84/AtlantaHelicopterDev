module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'rgb(213,37,37)',
        lightRed: 'rgb(200,90,87)',
        darkRed: '#941a1a',
        black: '#1f1f1f',
        offWhite: '#f3f1f0',
        slate: 'rgb(148,148,148)',
        veryLightGrey: '#e7ebed',
        teal2: '#2ad4d4',
        blue2: '#2a7fd4',
        green2: '#2ad47f'
      },
      height: {
        mobile: '4rem',
        mobHeader: '6.5rem',
        mainHeader: '8.85rem'
      },
      width: {
        mobile: '8rem'
      }
    }
  },
  variants: {},
  plugins: []
};
