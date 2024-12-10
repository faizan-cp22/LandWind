/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#111827',
        secondary: '#788188'
      },
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
}