/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
      "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

