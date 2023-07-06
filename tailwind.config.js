/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "light-bg": "#D9D9D9",
      blue: "#3430FA",
    },
    fontFamily: {
      fontHeading: ["Space Grotesk", "sans-serif"],
      fontBody: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
