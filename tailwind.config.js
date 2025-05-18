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
      }
    },
  },
  plugins: [],
}

