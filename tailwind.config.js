/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      leagueSpartan: ["League Spartan", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
    extend: {
      colors: {
        darkBlue: "#011627",
        lightWhite: "#fdfffc",
        lightBlue: "#2ec4b6",
        red: "#e71d36",
        orange: "ff9f1c",
      },
    },
  },
  plugins: [],
};
