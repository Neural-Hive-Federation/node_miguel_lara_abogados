/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#8b5cf6',
        accent: '#f97316',
        dark: '#0a0a0c',
        navy: { DEFAULT: '#0B1426', light: '#111D32', lighter: '#152238' },
        gold: { DEFAULT: '#C5A55A', hover: '#B8974F', light: 'rgba(197,165,90,0.1)' },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
