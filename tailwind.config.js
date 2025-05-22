/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      container : {
        center : true ,
        screens : {
          DEFAULT : '100%'
        }
      },
      colors : {
        textLight : "#000",
        textDark : "#fff",
        bgLight: "#ccc",
        bgDark : "#2a2a2a",
        darkPrice : "#04ff00",
        lightPrice : "#008f00",
        hoverLight : "#dd3af8",
        hoverDark : "#35a0f2",
        rateLight : "#fc9c00",
        rateDark : "#ffe605",
      },
      screens : {
        xm : '580px'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

