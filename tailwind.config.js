/** @type {import('tailwindcss').Config} */
module.exports = {
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
        hoverDark : "#58b1f7"
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

