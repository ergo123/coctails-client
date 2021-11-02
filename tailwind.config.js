module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      main: 'Josefin Sans, sans-serif'
    },
    colors: {
      darkergrey: '#272727',
      darkgrey: 'rgba(32, 37, 41, 0.9)',
      lightgrey: '#BDBDBD',
      grey: '#F2F2F3',
      minor: '#A0A8AB',
      white: '#fff',
      yellow: '#fcd088'
    },
    fontSize: {
      xxsm: ['12px', { lineHeight: '20px' }],
      xsm: ['14px', { lineHeight: '20px' }],
      sm: ['16px', { lineHeight: '20px' }],
      base: ['20px', { lineHeight: '24px' }],
      lg: ['24px', { lineHeight: '28px' }],
      xl: ['28px', { lineHeight: '32px' }],
      '2xl': ['36px', { lineHeight: '40px' }],
      '3xl': ['48px', { lineHeight: '52px' }],
    },
    maxWidth: {
      screen: '768px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
