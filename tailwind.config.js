module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },

    extend:{
      height:{
        "screen-70":"70vh",
        "nav":"8vh",
        "logo":"6vh",
        "side":"92vh",
        "300px":"300px",
        'video':'50vh',
        '9/10':'90%',
        '0.15':'15%',
        '7/10':'70%'

      },
      maxHeight:{
        '1/5':'20%',
        '4/5':'80%',
      },
      width:{
        "vw-1/2":"50vw",
        "300px":"300px",
        '0.85':'85%',
        '9/10':'90%',
      },

    }



  },
  variants: {
    extend: {

      visibility:['hover, group-hover'],
      display:['hover','group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
