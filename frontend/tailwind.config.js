module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'rgba(213,37,37,100)',
        lightRed: 'rgb(200,90,87)',
        darkRed: '#941a1a',
        black: '#1f1f1f',
        offWhite: '#f3f1f0',
        ghostWhite: '#f8f8ff',
        slate: 'rgb(148,148,148)',
        veryLightGrey: '#e7ebed',
        teal2: '#2ad4d4',
        blue2: '#2a7fd4',
        green2: '#2ad47f'
      },
      height: {
        card: '400px',
        responsiveCard: '400px',
        mobile: '4rem',
        initial: '120px',
        scrolled: '80px',
        mobHeader: '6.5rem',
        mainHeader: '8.85rem',
        layoutTop: '130px'
      },
      width: {
        mobile: '8rem'
      },
      fontSize: {
        oneThree: '1.3rem'
      }
    }
  },
  variants: {},
  plugins: []
};
