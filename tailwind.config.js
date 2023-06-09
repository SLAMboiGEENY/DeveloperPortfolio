/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1b1b1b',
          light: '#f1f1f1',
        },
        secondary: {
          dark: '#0d0d0d',
          light: '#f1f1f1',
        },
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

