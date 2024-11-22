/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['"DM Sans"', 'sans-serif']
      },
      colors : {
        primary : {
          "blue" : "#3939FF",
          "yellow" : "#F2BB05",
          "orange" : "#FF5B22",
          "pink" : "#DBBBFF",
          "skyblue" : "#AEE6ED"
        },
        text : {
          primary  : "#474747",
          secondary : "#181818"
        }
      }
    },
  },
  plugins: [],
}