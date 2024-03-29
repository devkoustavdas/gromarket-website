/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sl': '880px',
        '3xl': '1600px',
        '4xl': '1800px',
      },
},
    fontFamily: {
      'body': ["Helvetica Neue Light"],
      'heading': ["Helvetica Neue Medium"],
      'serif': ['"Barlow", sans-serif'],
      'title': ["Helvetica Neue Bold"],
      'sans': ["'Noto Serif JP', serif"],
    },
  },
  plugins: [],
}

