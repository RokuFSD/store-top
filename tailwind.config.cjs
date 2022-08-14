/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'display': ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
