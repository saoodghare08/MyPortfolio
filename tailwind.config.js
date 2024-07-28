/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1B2A',
        text: '#00FFFF',
        cardBg: '#14253D',
      },
    },
  },
  plugins: [],
}

