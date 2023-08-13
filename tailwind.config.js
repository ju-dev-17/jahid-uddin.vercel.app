/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#efe7ed',
        'background': '#060406',
        'primary': '#a9c6b0',
        'secondary': '#1f141c',
        'accent': '#669972',
      }
    },
  },
  plugins: [],
}

