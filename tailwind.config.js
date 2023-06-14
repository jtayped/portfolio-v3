/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
