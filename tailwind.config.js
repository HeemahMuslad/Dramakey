/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': {'min': '500px', 'max': '756px'},  
        'md': {'min': '380px', 'max': '501px'},
        'sm': {'max': '380px'},                   }
        
    },
   width:{lg:"90%",md:"80%",sm:"20%",xsm:"25px"},
height:{xsm:"3px"}
  },
  plugins: [],
} 