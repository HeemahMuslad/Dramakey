/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': {'min': '500px', 'max': '756px'},  // for screens between 756px and 1023px
        'md': {'min': '380px', 'max': '501px'},   // for screens between 481px and 755px
        'sm': {'max': '380px'},                    // for screens up to 480px
      },
        
    },
   width:{lg:"90%",md:"80%",sm:"20%",xsm:"25px"},
height:{xsm:"3px"}
  },
  plugins: [],
} 