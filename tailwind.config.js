/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bank: {
          "primary-1": "#FEAA09",
          "primary-2": "#343C6A",
          "primary-3": "#2D60FF",
          secondary: "#FE5C73",
          terciary: "#B1B1B1",
        },
      },
    },
  },
  plugins: [],
};
