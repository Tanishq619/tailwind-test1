/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(-5rem)' },
        
          '100%': { transform: 'rotate(20.0deg)' },
        },
      },

      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}

