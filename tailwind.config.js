/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purplebit: {
        50: "#F7F5FF",
        100:"#EAE5FE",
        350: "#AF58FF",
        200:"#686A9E",
        300:"#BCAAFC",
        400:"#9D7CF9",
        500:"#9527FF",
        600:"#7D19D8",
        
      },
      graybit: {
        50:"#EDEEF1",
        100:"#E1E3E8",
        150:"#9199A5",
        200:"#5F6775",
        300:"#1B2031",
        400:"#222151",
        500:"#111220",
        600:"#070B13"
      },
      yellow: colors.amber,
      pink: colors.fuchsia,
      violet: colors.violet,

    },
    extend: {
      colors: {
        draftbit: {

        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

