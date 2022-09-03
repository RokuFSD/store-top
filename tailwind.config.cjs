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
        192: '48rem',
        208: '52rem',
        224: '56rem',
        240: '62rem',
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
        },
        'slide-from-top': {
          from: {
            opacity: 0,
            transform: 'translateY(-100%)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'slide-from-bottom': {
          from: {
            opacity: 1,
            transform: 'translateY(0)'
          },
          to: {
            opacity: 0,
            transform: 'translateY(-100%)'
          }
        }
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s ease-in-out',
        'slide-from-top': 'slide-from-top 0.5s ease-in-out',
        'slide-from-bottom': 'slide-from-bottom 0.5s ease-in-out'
      },
      colors:{
        'primary': '#90CAF9',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
