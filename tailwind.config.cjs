/** @type {import('tailwindcss').Config} */

//@ts-ignore
// eslint-disable-next-line
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkTheme: "#232533",
        darkThemeMain: "#323445",
      },
    },
  },
  plugins: [],
};
