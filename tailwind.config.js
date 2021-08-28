module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'rgba(213,37,37,255)',
        lightRed: 'rgba(200,90,87,200)',
        black: '#1f1f1f',
        offWhite: '#f3f1f0',
        slate: 'rgba(148,148,148,150)',
        teal2: '#2ad4d4',
        blue2: '#2a7fd4',
        green2: '#2ad47f'
      },
      height: {
        mobile: '4rem'
      },
      width: {
        mobile: '8rem'
      }
    }
  },
  variants: {},
  plugins: []
};
