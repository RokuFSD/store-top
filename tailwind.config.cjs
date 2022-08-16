/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif']
      },
      width: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        256: '64rem'
      }
    }
  },
  plugins: []
};
