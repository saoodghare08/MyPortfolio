/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Current Theme: Cream of the Crop ---
        // background: '#FFFFF0', // Ivory/Cream
        // surface: '#FFFFFF', // Pure White
        // primary: '#14b8a6', // Teal 500
        // secondary: '#f97316', // Orange 500
        // accent: '#facc15', // Yellow 400
        // text: '#1f2937', // Gray 800
        // muted: '#6b7280', // Gray 500
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Outfit', 'sans-serif'],
        },
        animation: {
          'glow': 'glow 2s ease-in-out infinite alternate',
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          glow: {
            '0%': { boxShadow: '0 0 5px rgb(var(--color-primary)), 0 0 10px rgb(var(--color-primary))' },
            '100%': { boxShadow: '0 0 20px rgb(var(--color-primary)), 0 0 30px rgb(var(--color-primary))' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      },
    },
  },
  plugins: [],
}
