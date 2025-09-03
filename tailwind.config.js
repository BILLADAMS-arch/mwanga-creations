/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0b2447",
        gold: "#d4a017"
      }
    },
  },
  plugins: [],
}
