/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif']
      },
      colors: {
        primary: {
          "blue": "#3939FF",
          "yellow": "#F2BB05",
          "orange": "#FF5B22",
          "pink": "#DBBBFF",
          "skyblue": "#AEE6ED",
          "grey" : "#E3E3E5"
        },
        secondary: {
          "blue": "#002684",
          "orange": "#F26C29",
          "grey" : "#6A6D71"
        },
        hoverd: {
          "primary": "#405CA3",
          "secondary": "#F58954",
          "social": "#2B2C2E"
        },
        active: {
          "primary": "#00174F",
          "secondary": "#C25621",
          "social": "#2B2C2E"
        },

        text: {
          primary: "#474747",
          secondary: "#181818"
        }
      }
    },
  },
  plugins: [],
}