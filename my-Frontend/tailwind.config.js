/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      Primary: "#f42c37",
      Secondary: "#f42c37",
      BrandYellow: "#fdc622",
      BrandGreen: "#2dcc6f",
      BrandBlue: "#1376f4",
      BrandWhite: "#eeeeee",
      },
      container:{
        center:true, 
        padding:{
          DEFAULT: "1rem", 
          sm: "3rem",  
          
      
        }
      }
    },
  },
  plugins: [],
}