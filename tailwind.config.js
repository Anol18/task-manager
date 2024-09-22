/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      colors: {
        primary: {
          DEFAULT: "#009164",
          light: "#ffffff",
          50: "#FCFFFE",
          100: "#00916424",
         
        },
        secondary: {
          DEFAULT: "#000000",
          ash: "#B6B6B6",
          light: "#BCBCBC",
        },
        warning: {
          DEFAULT: "#009164",
        },
      },
    },
  },
  plugins: [],
};
