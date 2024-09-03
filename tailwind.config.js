/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Main/*.{html,js}"],
  theme: {
    screens:{
        'sm': '393px',
        'xl': '1920px',
    },
    extend: {
      fontFamily:{
        'aeod': ["Anek Odia"],
        'copse': ["Copse"],
        'timm':["Timmana"]
      },
    },
  },
  plugins: [],
}

