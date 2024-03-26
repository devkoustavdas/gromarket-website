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
      'sans': ["'Noto Serif JP', serif"],
      'serif': ['"Barlow", sans-serif'],
      'title': ["'Red Rose Variable', sans-serif"],
      'condensed': ["'Roboto Condensed', sans-serif"]
    },
    // colors: {
    //   "white": "#ffffff",
    //   "black": "#000000",
    //   "blue": "#5271FF",
    // }
  },
  plugins: [],
}

