/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif"
      },
      colors: {
        primary: '#2C2A30',
        secondary: '#242327',
        tertiary: '#49464F',
        background: '#333138',
        accent: '#977ADD'
      },
      textColor: {
        primary: '#ffffff',
        secondary: '#929198'
      }
    },
  },
  plugins: [],
}

