/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        montserrat: ["Montserrat", 'sans-serif'],
        roboto: ["Roboto", 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
      }, colors:{
        primary: '#ef2230',
        secondary: '#ff672d',
        grayDark:"#37383c",
        grayLight:"#464646",
      }
    },
  },
  plugins: [],
}