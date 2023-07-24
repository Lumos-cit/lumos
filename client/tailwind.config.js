/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-lg' : "url('/Assets/Images/MainHead.jpg')",
      },
      backgroundColor:{
        'custom-1': "#F8F301",
        'custom-2': "#D4A400",
      },
    
    },
  },
  plugins: [require("daisyui")],
}
