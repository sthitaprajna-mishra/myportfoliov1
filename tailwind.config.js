/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      leagueSpartan: ["League Spartan", "sans-serif"],
      spaceGrotesk: ["Space Grotesk", "serif"],
    },
    extend: {
      backgroundImage: {
        sampleBg2: "url('./src/assets/samplebg2.jpg')",
      },
      colors: {
        blue1: "#0077b6",
        blue2: "#0063db",
        gray1: "#495057",
        darkBlue: "#011627",
        lightWhite: "#fdfffc",
        lightBlue: "#2ec4b6",
        red: "#e71d36",
        orange: "#ff9f1c",
        yellow1: "#ffd166",
        yellow2: "#fffffa",
      },
    },
  },
  plugins: [],
};
