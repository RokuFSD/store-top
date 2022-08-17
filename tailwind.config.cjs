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
      },
      keyframes: {
        'slide-in-left': {
          from: {
            transform: 'translateX(-50%)'
          },
          to: {
            transform: 'translateX(0)'
          }
        }
      },
      animation:{
        'slide-in-left': 'slide-in-left 0.5s ease-in-out'
      }
    }
  },
  plugins: []
};
