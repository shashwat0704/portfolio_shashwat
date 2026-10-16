/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#6ab01d',
        'brand-dark': '#000000',
        'brand-card': '#0d0d0d',
        'brand-nav': '#141414',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
