module.exports = {
  // mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        navColor: '#000000',
        navTextColor: '#ffffff',
        navHover: '#333333',
        contentColor: '#181818',
        contentColorAlternative: '#1a1c20',
        contentCard: '#272a2f',
        contentTitle: '#17462e',
        topLineColor: '#01bf71',
        contentColorInverted: '#E43F5A',
        textColor: 'white',
        textColorInverted: 'black',
        buttonColor2: '#01BF71',
        buttonColor: '#7ECA9C',
        footerBg: '#000000',
        footerIcon: '#333333',
        footerText: '#ffffff',
        facebook: '#3b5998',
        twitter: '#1da1f2',
        linkedin: '#00a0dc',
      }),
      borderColor: (theme) => ({
        contentTitle: '#17462e',
        topLineColor: '#01bf71',
        contentColor: '#181818',
        facebook: '#3b5998',
        twitter: '#1da1f2',
        linkedin: '#00a0dc',
      }),
      textColor: {
        topLineColor: '#01bf71',
        contentColor: '#181818',
        contentColorAlternative: '#1a1c20',
        contentColorInverted: '#E43F5A',
        facebook: '#3b5998',
        twitter: '#1da1f2',
        linkedin: '#00a0dc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
