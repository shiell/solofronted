/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-button":'#ff561e',
        "azuls":'#003A54',
        "rojoficial":'#E52B2B',
        "plomo":'#EBEBEB',
        "celeste":'#4bc8c6'

      }
    },
    /** @type {import('tailwindcss').Config} */
    screens: {
      sm: "640px",
      // =› @media (min-width: 640px) { ..
      md: "790px",
      // » @media (min-width: 768px) ( ...
      lg: "1090px",
      // - @media (min-width: 1024px) ( .
      xl: "1300px",
      // -> @media (min-width: 1280px) ( ...
      "2Xl": "1720px",
      // => @media (min-width: 1536px) ( ...
      "3xl": "1930px",
      // =› @media (min-width: 1536px) ( .
      "4xl": "2256px",
      //@media (min-width: 1536px)
      
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

