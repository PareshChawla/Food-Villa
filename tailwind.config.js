/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
      animation: {
        'bounce-limited': 'bounce 1s'
      }
    },
  },
  plugins: [],
}

