/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        custom: ["16px", { lineHeight: "24px" }],
        heading: ["70px", { lineHeight: "80px" }],
      },
    },
  },
  plugins: [],
};
